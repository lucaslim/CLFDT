'use strict';

var config = require('../config');
var gulp   = require('gulp');

gulp.task('watch', ['browserSync'], function () {
  gulp.watch(config.scripts.src, ['lint']);
  gulp.watch(config.styles.src, ['styles']);
  gulp.watch(config.views.watch, ['views']);

});
