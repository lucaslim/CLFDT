'use strict';

var jq = require('jquery');
var Chart = require('chart.js');

module.exports = function($window, $element, contentService) {
 var self = this;
 contentService
  .get('dataset')
  .then(function(result) {
   var dataset = result.dataset;
   var graph = jq($element).find('canvas.graph').get(0).getContext('2d');

   new Chart(graph).Line(dataset, {
    scaleShowGridLines: false,
    bezierCurve: false,
    responsive: true,
    scaleFontFamily: 'Roboto, sans-serif',
    scaleFontSize: 14,
    scaleFontStyle: 400,
    scaleLineColor: '#fff',
    scaleFontColor: '#86939e',
    pointDotRadius: 10,
    pointDotStrokeWidth: 5,
    datasetStrokeWidth: 4,
    scaleLabel: function() {
     return '';
    },
    customTooltips: function(tooltip) {
     var tooltipEl = jq('.graph-container > .tooltip');

     if (!tooltip) {
      tooltipEl.css({
       opacity:0
      });
      return;
     }

     var innerHtml = '';
     innerHtml += [
      ' <span class="value">€' + parseFloat(tooltip.text.split(': ')[1]).toFixed(2) + '</span>',
      ' <span class="month">Earned for ' + tooltip.text.split(': ')[0] + '</span>',
     ].join('');

     tooltipEl.html(innerHtml);
     tooltipEl.css({
      opacity: 1,
      top: tooltip.y - 160,
      left: tooltip.x - 110,
     });
    }
   });
  });
};