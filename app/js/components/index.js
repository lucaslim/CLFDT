var angular = require('angular');

var content = require('./content/');
var introduction = require('./introduction/');

module.exports = angular.module('components', [
  content.name,
  introduction.name,
]);
