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
    });
    // See https://github.com/Polymer/polymer/issues/1381
    window.addEventListener('WebComponentsReady', function() {
        // imports are loaded and elements have been registered
        console.log("ready");
    });
})(document);
