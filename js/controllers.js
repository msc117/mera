'use strict';

// controllers

var meraControllers = angular.module('meraControllers', []);

meraControllers.controller('meraHome', ['$scope',
  function($scope, settings) {
    $scope.maxWidth = calcMaxWidth();
    $scope.edit = false;
  }
]);

meraControllers.controller('meraTiles', ['$scope',
  function($scope) {
      // initial
      if ($scope.$parent.edit)
        console.log('-- in edit mode --');
      if (!localStorage.getItem('mera-tiles')) {
        // localStorage uninitialized... initializing
        console.log("initializing localStorage");
        initializeStorage();
      }
      else
        console.log("returning user");
      // load grid settings
      $scope.settings = JSON.parse(localStorage.getItem('mera-settings'));
      console.log($scope.settings);
      //initialize grid
      $scope.$parent.gridster = $(".gridster ul").gridster({
        widget_margins : [$scope.settings.marginX, $scope.settings.marginY],
        widget_base_dimensions : [100, 100],
        autogrow_cols : true,
        resize : {
          enabled : $scope.$parent.edit,
          max_size : [$scope.settings.maxCols, $scope.settings.maxRows]
        }
      }).data('gridster');
      // disable resize unless in edit mode
      if (!$scope.$parent.edit) $scope.$parent.gridster.disable();

      // load user tiles and layout
      $scope.tiles = JSON.parse(localStorage.getItem('mera-tiles'));
      var layout = JSON.parse(localStorage.getItem('mera-tiles-layout'));
      console.log($scope.tiles);
      console.log("layout: " + JSON.stringify(layout));
      var i = 0;
      $.each($scope.tiles, function(k, tile) {
        console.log(tile);
        console.log("layout for : " + k + JSON.stringify(layout[i]));

        $scope.$parent.gridster.add_widget(generateTile(tile), layout[i].size_x, layout[i].size_y, layout[i].col, layout[i].row);
        i++;
      });
  }
]);

meraControllers.controller('meraTile', ['$scope', 'tiles',
  function($scope, tiles) {

  }
]);

meraControllers.controller('meraEdit', ['$scope', '$location',
  function($scope, $location) {
    $scope.edit = true;

    $scope.save = function() {
      console.log("saving to localStorage");
      saveState($scope.gridster);

      // send home when done
      $location.path("/home");
    }
    $scope.reset = function() {
      console.log("clearing localStorage");
      localStorage.clear();
      if (!localStorage.getItem('mera-settings'))
        console.log("localStorage successfully cleared");
      else
        console.log("failed to clear localStorage");

      // rebase settings from defaults
      initializeStorage();
      $location.path("/home");

      // remove links from tiles so no accidental clicks
      angular.element(document).ready(function() {
        $('#mc-tiles a').removeAttr("href");
      });
    }
  }
]);

//
// functions
//

// tile container width calculator
var saveState = function(grid) {
  console.log("entering saveState()");
  // save tile location, size (future: tile information edits)

  var serialized = grid.serialize();
  console.log("Serialized data" + JSON.stringify(serialized));
  localStorage.setItem('mera-tiles-layout', JSON.stringify(serialized));
  if (serialized == localStorage.getItem('mera-tiles-layout'))
    console.log("layout save successful")
  else
    console.log("layout save failed");
}

var calcMaxWidth = function() {
  return 400;
}

// TODO: generate CSS from user defined CSS rules in ;d
var generateTile = function(tile) {
  console.log("generating html for " + JSON.stringify(tile));
  return "<li id='" + tile.id + "' class='tile'><a href='" + tile.href + "'><div class='tile-main'><h1>" + tile.name + "</h1></div><div class='tile-descr'><p>" + tile.descr + "</p></div></a></li>";
}

var initializeStorage = function() {
  console.log("entering initializeStorage()");
  // set default settings
  // TODO: add layouts json default
  var defaults = {
    "settings" : {
      "numTiles" : 6,
      "marginX" : 10,
      "marginY" : 10,
      "maxCols" : 10,
      "maxRows" : 5
    },
    "tiles" : {
      "csgolounge" : {
        "id" : "csgl",
        "href" : "http://www.csgolounge.com",
        "name" : "CSGO Lounge",
        "descr" : "EZ Skins"
      },
      "reddit" : {
        "id" : "reddit",
        "href" : "http://www.reddit.com",
        "name" : "Reddit",
        "descr" : "Internet point collection sim"
      },
      "facebook" : {
        "id" : "fb",
        "href" : "http://www.facebook.com",
        "name" : "Facebook",
        "descr" : "Stalking service"
      },
      "site1" : {
        "id" : "s1",
        "href" : "http://www.s2.com",
        "name" : "Site 1",
        "descr" : "Fake"
      },
      "site2" : {
        "id" : "s2",
        "href" : "http://www.s1.com",
        "name" : "Site 2",
        "descr" : "Definitely fake"
      },
      "twitter" : {
        "id" : "tw",
        "href" : "http://www.twitter.com",
        "name" : "Twitter",
        "descr" : "Birds?"
      }
    },
    "layout" : [
      {
        "col" : 1,
        "row" : 1,
        "size_x" : 2,
        "size_y" : 2
      },
      {
        "col" : 3,
        "row" : 1,
        "size_x" : 2,
        "size_y" : 2
      },
      {
        "col" : 5,
        "row" : 1,
        "size_x" : 1,
        "size_y" : 1
      },
      {
        "col" : 1,
        "row" : 3,
        "size_x" : 4,
        "size_y" : 2
      },
      {
        "col" : 1,
        "row" : 5,
        "size_x" : 1,
        "size_y" : 1
      },
      {
        "col" : 2,
        "row" : 5,
        "size_x" : 2,
        "size_y" : 1
      }
    ]
  };
  console.log(defaults.layout);
  localStorage.setItem('mera-tiles-layout', JSON.stringify(defaults.layout));
  localStorage.setItem('mera-settings', JSON.stringify(defaults.settings));
  localStorage.setItem('mera-tiles', JSON.stringify(defaults.tiles));
}
