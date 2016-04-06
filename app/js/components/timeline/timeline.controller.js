'use strict';

var jq = require('jquery');
window.jQuery = jq;
require('jqueryui');

module.exports = function($window, $element) {
 var button = jq($element).find('.button');
 button.draggable({
  axis: 'x'
 });
};