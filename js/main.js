//
// functions on page load
//
/*
$(document).ready(function() {
  // ensure html5 localStorage support
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    alert("<h1>Unsupported</h1>" + e);
  }


}); */

//
// functions
//

function addWebTile(link) {

}

//TODO: custom tile css
var generateTile = function(tile) {
  console.log("generating html for " + JSON.stringify(tile));
  return "<li id='" + tile.id + "' class='tile'><a href='" + tile.href + "'><div class='tile-main'><h1>" + tile.name + "</h1></div><div class='tile-descr'><p>" + tile.descr + "</p></div></a></li>";
}

// save layout state after user moves tiles
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

var initializeStorage = function() {
  console.log("entering initializeStorage()");
  // set default settings
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
