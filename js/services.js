'use strict';

// services

var meraServices = angular.module('meraServices', []);

meraServices.factory('tiles', ['$http', '$q',
  function($http, $q) {

    return {
      query : function() {
        var defer = $q.defer();
        $http.get("data/tiles.json")
          .then(function(response) {
            defer.resolve(response.data);
          }
        );
        return defer.promise;
      }
    }
  }
]);

meraServices.factory('settings', ['$http', '$q',
  function($http, $q) {

    return {
      query : function() {
        var defer = $q.defer();
        $http.get("data/settings.json")
          .then(function(response) {
            defer.resolve(response.data);
          }
        );
        return defer.promise;
      }
    }
  }
]);
