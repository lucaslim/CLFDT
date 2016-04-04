'use strict';

var config = require('../config');
var gulp   = require('gulp');
var gulpif = require('gulp-if');
var browserSync = require('browser-sync');

// Views task
gulp.task('views', function () {
  // Put our index.html in the dist folder
  gulp.src(config.views.index)
      .pipe(gulp.dest(config.buildDir))
      .pipe(browserSync.stream({ once: true }));
});
