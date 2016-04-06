var angular = require('angular');
var introductionDirective = require('./timeline.directive');

module.exports = angular.module('components.timeline', [])
 .directive('timeline', introductionDirective);