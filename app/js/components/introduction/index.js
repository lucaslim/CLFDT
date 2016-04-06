var angular = require('angular');
var introductionDirective = require('./introduction.directive');

module.exports = angular.module('components.introduction', [])
 .directive('introduction', introductionDirective);