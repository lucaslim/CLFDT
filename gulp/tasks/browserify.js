'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var gulpif       = require('gulp-if');
var gutil        = require('gulp-util');
var source       = require('vinyl-source-stream');
var streamify    = require('gulp-streamify');
var watchify     = require('watchify');
var browserify   = require('browserify');
var handleErrors = require('../util/handleErrors');
var browserSync  = require('browser-sync');
var stringify    = require('stringify');

function buildScript(file) {

  let bundler = browserify({
    entries: [config.sourceDir + 'js/' + file],
    debug: false,
    cache: {},
    packageCache: {},
    fullPaths: !global.isProd,
  });

  if (!global.isProd) {
    bundler = watchify(bundler);

    bundler.on('update', function () {
      rebundle();
      gutil.log('Rebundle...');
    });
  }

  var transforms = [
      { 'name':'stringify', 'options': { 'extensions': ['.html']}},
      // { 'name':babelify, 'options': {}},
      // { 'name':ngAnnotate, 'options': {}},
      // { 'name':'brfs-htmlmin', 'options': {}},
  ];

  transforms.forEach(function (transform) {
    bundler.transform(transform.name, transform.options);
  });

  function rebundle() {
    var stream = bundler.bundle();
    var sourceMapLocation = global.isProd ? './' : '';

    return stream.on('error', handleErrors)
        .pipe(source(file))
        .pipe(gulp.dest(config.scripts.dest))
        .pipe(gulpif(global.isProd, gulp.dest(config.buildDir)))
        .pipe(browserSync.stream());
  }

  return rebundle();

}

gulp.task('browserify', function () {

  return buildScript('main.js');

});
