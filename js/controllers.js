'use strict';

// controllers

var meraControllers = angular.module('meraControllers', []);

meraControllers.controller('meraHome', ['$scope',
  function($scope, settings) {
    $scope.maxWidth = calcMaxWidth();
    $scope.edit = false;

    // all angular ready functions go here
    angular.element(document).ready(function() {
      console.log("homepage locked and loaded");
      $("#splash").addClass("hidden");
      hideSplash(); //TODO: make spinning animation, centered, fade out slowly
    });

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
      // gridster callback functions
      var hideBackground = function() {
        $("#mc-tiles").css({"background" : "none"});
      }
      var showBackground = function() {
        $("#mc-tiles").css({"background-color" : "white"});
      }
      //initialize grid
      $scope.$parent.gridster = $(".gridster ul").gridster({
        widget_margins : [$scope.settings.marginX, $scope.settings.marginY],
        widget_base_dimensions : [100, 100],
        autogrow_cols : true,
        autogrow_rows : true,
        resize : {
          enabled : $scope.$parent.edit,
          max_size : [$scope.settings.maxSizeX, $scope.settings.maxSizeY],
          start : showBackground,
          stop : hideBackground
        },
        draggable : {
          start : showBackground,
          stop : hideBackground
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

meraControllers.controller('meraEdit', ['$scope', '$location', '$http',
  function($scope, $location, $http) {
    $scope.edit = true;

    //
    // functions
    //
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
      initializeStorage(false);
      $location.path("/home");
    }
    $scope.hardReset = function() {
      console.log("hard clearing localStorage");
      localStorage.clear();
      if (!localStorage.getItem('mera-settings'))
        console.log("localStorage successfully cleared");
      else
        console.log("failed to clear localStorage");

      // rebase settings from defaults
      initializeStorage(true);
      $location.path("/home");
    }
    $scope.openFab = function() {
      var tray = $("#mc-pick-tiles");
      var trayContent = $("#mc-available-tiles");
      console.log("expanding FAB");
      $(".fab").addClass("opened");
      tray.addClass("opened");
      tray.css({"height" : "200px"});
      tray.removeClass("hidden");
      tray.animate({"bottom" : "40px", "opacity" : 1}, 300, function() {
        tray.css({"height" : "auto"});
        trayContent.removeClass("hidden");
        trayContent.animate({"opacity" : 1}, 100);
      });
      tray.removeClass("hidden");
    }
    $scope.closeFab = function() {
      var tray = $("#mc-pick-tiles");
      var trayContent = $("#mc-available-tiles");
      console.log("closing FAB");
      $(".fab").removeClass("opened");
      tray.animate({"bottom" : "-200", "opacity" : 0}, 300, function() {
        tray.addClass("hidden");
        trayContent.css({"opacity" : 0});
      });
      tray.addClass("hidden");
      trayContent.addClass("hidden");
    }
    $scope.previewTile = function() {
      console.log("previewing tile");

    }
    $scope.showTile = function() {
      // on hover over li in add tile, overlay content with hovered element's tile and make configurable
      console.log(this);
      console.log("displaying preview for: ");
      console.log($(".overlay"));
      $(".overlay").removeClass("hidden");
    };
    $scope.hideTile = function() {
      console.log("hiding tile: ");
      $(".overlay").addClass("hidden");
    };

    $("li").on("hover",function() {
      console.log("her");
      showTile(this);
    });

    // actions when edit page is loaded
    angular.element(document).ready(function() {
      // don't allow click when editing
      $('#mc-tiles a').removeAttr("href");
      // add edit class to tiles
      $(".tile").addClass("edit-mode");
      //
    });

  }
]);

meraControllers.controller('meraSettingsTray', ['$scope',
  function($scope) {

  }
]);

//
// functions
//

// tile container width calculator
var saveState = function(grid) {
  console.log("entering saveState()");
  // save tile location, size (future: tile information edits)
  // TODO: add save changes to tiles

  var serialized = grid.serialize();
  console.log("Serialized data" + JSON.stringify(serialized));
  localStorage.setItem('mera-tiles-layout', JSON.stringify(serialized));
  if (serialized == localStorage.getItem('mera-tiles-layout'))
    console.log("layout save successful")
  else
    console.log("layout save failed");
}

var hideSplash = function() {

  var o = 1;
  $("#spash").addClass("hidden");
  /* something here is broken
  while (o > 0) {
    setTimeout(function() {
      $("#splash").css({'opacity' : o});
      o = o - .1;
    }, 1)
  } */
}

var calcMaxWidth = function() {
  return 400;
}

// TODO: use html import and set that to var to set each link / widget / etc
// TODO: generate CSS from user defined CSS rules in ;d
var generateTile = function(tile) {
  console.log("generating html for " + JSON.stringify(tile));

  return "<li id='" + tile.id + "' class='tile' mera-class='" + tile.class + "'><a href='" + tile.href + "'><div class='tile-main'><h1>" + tile.name + "</h1></div><div class='tile-descr'><p>" + tile.descr + "</p></div></a></li>";
}

var initializeStorage = function(hard) {
  console.log("entering initializeStorage()");
  // set default settings
  // TODO: add layouts json default
  var defaults = {
    "settings" : {
      "numTiles" : 6,
      "marginX" : 10,
      "marginY" : 10,
      "maxSizeX" : 5,
      "maxSizeY" : 3
    },
    "tiles" : {
      "csgolounge" : {
        "id" : "csgl",
        "href" : "http://www.csgolounge.com",
        "name" : "CSGO Lounge",
        "descr" : "EZ Skins",
        "class" : "link"
      },
      "reddit" : {
        "id" : "reddit",
        "href" : "http://www.reddit.com",
        "name" : "Reddit",
        "descr" : "Internet point collection sim",
        "class" : "link"
      },
      "facebook" : {
        "id" : "fb",
        "href" : "http://www.facebook.com",
        "name" : "Facebook",
        "descr" : "Stalking service",
        "class" : "link"
      },
      "site1" : {
        "id" : "s1",
        "href" : "http://www.s2.com",
        "name" : "Site 1",
        "descr" : "Fake",
        "class" : "link"
      },
      "site2" : {
        "id" : "s2",
        "href" : "http://www.s1.com",
        "name" : "Site 2",
        "descr" : "Definitely fake",
        "class" : "link"
      },
      "twitter" : {
        "id" : "tw",
        "href" : "http://www.twitter.com",
        "name" : "Twitter",
        "descr" : "Birds?",
        "class" : "link"
      }
    },
    "layout" : [
      {
        "col" : 1,
        "row" : 1,
        "size_x" : 3,
        "size_y" : 2
      },
      {
        "col" : 1,
        "row" : 1,
        "size_x" : 3,
        "size_y" : 2
      },
      {
        "col" : 1,
        "row" : 1,
        "size_x" : 3,
        "size_y" : 2
      },
      {
        "col" : 4,
        "row" : 1,
        "size_x" : 3,
        "size_y" : 2
      },
      {
        "col" : 4,
        "row" : 1,
        "size_x" : 3,
        "size_y" : 2
      },
      {
        "col" : 4,
        "row" : 1,
        "size_x" : 3,
        "size_y" : 2
      }
    ]
  };
  // remove user inputed tiles as well
  if (hard) {
  }
  console.log(defaults.layout);
  localStorage.setItem('mera-tiles-layout', JSON.stringify(defaults.layout));
  localStorage.setItem('mera-settings', JSON.stringify(defaults.settings));
  localStorage.setItem('mera-tiles', JSON.stringify(defaults.tiles));
}
