'use strict';

// app

var mera = angular.module('mera', [
  'ngRoute',

  'meraControllers',
  'meraServices'
]);

// angular url mapping
mera.config(['$routeProvider',
  function($routeProvider) {
      $routeProvider.
        when('/home', {
          templateUrl: 'partials/home.html',
          controller: 'meraHome'
        }).
        when('/edit', {
          templateUrl: 'partials/home.html',
          controller: 'meraEdit'
        }).
        otherwise({
          redirectTo: '/home'
        })
  }
]);
