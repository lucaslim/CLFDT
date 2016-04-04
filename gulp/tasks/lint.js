var config = require('../config');
var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

gulp.task('lint', function () {
  return gulp.src([config.scripts.src, '!app/js/templates.js'])
      .pipe(jshint())
      .pipe(jshint.reporter(stylish));
});
