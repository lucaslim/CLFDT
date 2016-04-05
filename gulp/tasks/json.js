'use strict';

var config = require('../config');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var handleErrors = require('../util/handleErrors');

gulp.task('json', function () {
  return gulp.src(config.json.src)
      .on('error', handleErrors)
      .pipe(gulp.dest(config.json.dest))
      .pipe(gulpif(global.isProd, gulp.dest(config.buildDir)));
});
