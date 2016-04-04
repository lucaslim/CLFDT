var config       = require('../config');
var gulp         = require('gulp');
var gulpif       = require('gulp-if');
var stylus       = require('gulp-stylus');
var handleErrors = require('../util/handleErrors');
var browserSync  = require('browser-sync');
var nib          = require('nib');

gulp.task('styles', function () {

  return gulp.src(config.styles.main)
    .pipe(stylus({
      include: config.nodeDir,
      'include css': true,
      compress: !global.isProd,
      use: [nib()],
    }))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.styles.dest))
    .pipe(gulpif(global.isProd, gulp.dest(config.buildDir)))
    .pipe(browserSync.stream({ once: true }));

});
