'use strict';
var angular = require('angular');

module.exports = function ($http, $q) {
  var self = this;
  self.deferred = $q.defer();

  $http({
    method: 'GET',
    url: './js/data/content.json',
  }).then(function (result) {
    if (result.status === 200) {
      self.deferred.resolve(result.data);
    }
  });

  self.getAll = function () {
    return self.deferred.promise;
  };

  self.get = function () {
    return this.getAll()
            .then(function (result) {
              const data = {};

              angular.forEach(arguments, function (value, idx) {
                var key = Object.keys(result)[idx];
                data[key] = result[key];
              });

              return data;
            });

  };
};
