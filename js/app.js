/* 'use strict';

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
]); */

(function(document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var mera = document.querySelector('#mera');

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  mera.addEventListener('dom-change', function() {
    console.log('Everything loaded');
//    console.log(chrome.topSite.get());
  });
  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    // imports are loaded and elements have been registered
    console.log("ready");
//    chrome.topSites.get(function(sites) { // returns 20 most visited sites
//      console.log(sites);
//    });
  });
})(document);
