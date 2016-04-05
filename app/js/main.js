'use strict';

var angular = require('angular');
var componentsModule = require('./components/index');

var appName = 'clfdt';
var appModule = angular.module(appName, [
 componentsModule.name,
])
.run(function () {
  console.log('Start Application');
});

angular.bootstrap(document, [appModule.name]);
