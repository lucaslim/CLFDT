'use strict';

var $ = require('jquery');
var angular = require('angular');

var appName = 'clfdt';
var appModule = angular.module(appName, [
])
.run(function () {
  console.log(angular);
  console.log(appName);
});

angular.bootstrap(document, [appModule.name]);