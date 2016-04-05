var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dev', ['clean'], function (cb) {

  global.isProd = false;

  runSequence(['images', 'json', 'styles', 'views', 'browserify'], 'watch', cb);
});
