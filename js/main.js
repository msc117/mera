
// functions on page load

$(document).ready(function() {
  // ensure html5 localStorage support
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    alert("<h1>Unsupported</h1>" + e);
  }
});

// functions

function addWebTile(link) {

}
