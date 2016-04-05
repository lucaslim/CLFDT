'use strict';

var controller = require('./introduction.controller');
var template = require('./introduction.view.html');

module.exports = function () {
  return {
    template,
    controller,
    controllerAs: 'vm',
    scope: {},
    restrict: 'E',
    bindToController: true,
  };
};
