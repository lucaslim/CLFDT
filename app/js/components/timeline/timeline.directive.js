'use strict';

var controller = require('./timeline.controller');
var template = require('./timeline.view.html');

module.exports = function() {
 return {
  template,
  controller,
  controllerAs: 'vm',
   scope: {},
   restrict: 'E',
   bindToController: true,
 };
};