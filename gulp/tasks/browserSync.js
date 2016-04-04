var config      = require('../config');
var browserSync = require('browser-sync');
var gulp        = require('gulp');

gulp.task('browserSync', function () {
  browserSync.init('./build/', {
    server: {
      baseDir: config.buildDir,
    },
    port: config.browserPort,
    ui: {
      port: config.UIPort,
    },
    browser: 'google chrome',
    ghostMode: {
      links: false,
    },
  });

});

