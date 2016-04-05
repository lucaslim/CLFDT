var angular = require('angular');
var contentService = require('./content.service');

module.exports = angular.module('component.content', [])
    .service('contentService', contentService);
