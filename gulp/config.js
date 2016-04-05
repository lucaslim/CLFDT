'use strict';

module.exports = {
    browserPort: 3000,
    UIPort: 3001,

    sourceDir: './app/',
    buildDir: './build/',
    nodeDir: './node_modules/',

    styles: {
        main: 'app/styles/main.styl',
        src: 'app/styles/**/*.styl',
        dest: 'build/css',
        prodSourcemap: false,
        sassIncludePaths: [],
    },

    scripts: {
        src: 'app/js/**/*.js',
        dest: 'build/js',
    },

    images: {
        src: ['app/images/**/*', '!app/images/meta/**/*'],
        dest: 'build/images',
    },

    assetExtensions: [
        'js',
        'css',
        'png',
        'jpe?g',
        'gif',
        'svg',
        'eot',
        'otf',
        'ttc',
        'ttf',
        'woff2?',
        'json',
        'html?',
    ],


    json: {
        src: 'app/js/**/*.json',
        dest: 'build/js'
    },

    views: {
        index: 'app/index.html',
        src: 'app/js/**/*.html',
    },

    browserify: {
        bundleName: 'app.js',
        prodSourcemap: false,
    },

    test: {
        karma: 'karma.conf.js',
        protractor: 'test/protractor.conf.js',
    },

    init: function() {
        this.views.watch = [
            this.views.index,
            this.views.src,
        ];

        return this;
    },

}.init();
