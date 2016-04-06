(function() {
 'use strict';

 var angular = require('angular');
 var componentsModule = require('./components/index');

 require('angular-chartist.js');

 var appName = 'clfdt';
 var appModule = angular.module(appName, [
   'angular-chartist',
   componentsModule.name,
  ])
  .run(function() {
   console.log('Start Application');
  });

 angular.bootstrap(document, [appModule.name]);
}());