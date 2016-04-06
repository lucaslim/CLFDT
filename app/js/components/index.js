var angular = require('angular');

var content = require('./content/');
var introduction = require('./introduction/');
var timeline = require('./timeline/');

module.exports = angular.module('components', [
 content.name,
 introduction.name,
 timeline.name,
]);
