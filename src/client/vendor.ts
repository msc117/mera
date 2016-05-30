// For vendors for example jQuery, Lodash, angular2-jwt just import them here unless you plan on
// chunking vendors files for async loading. You would need to import the async loaded vendors
// at the entry point of the async loaded file. Also see custom-typings.d.ts as you also need to
// run `typings install x` where `x` is your module

// Angular 2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic'
import '@angular/core';
import '@angular/common';
import '@angular/http';

// Polymer
// See: webpack.common.js alias
// import 'webcomponents-lite';
// import 'polymer/paper-button';
// import 'polymer/paper-dialog';

// RxJS
// import 'rxjs/Rx';
import 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/throw';

// Reflect-metadata
// see: https://www.npmjs.com/package/reflect-metadata
// uncomment if using class decorators
// see: https://github.com/angular/angular/issues/5306
// import 'reflect-metadata';

// Angular 2 Material 2
import '@angular2-material/checkbox';

if ('production' === ENV) {
  // Production

} else {
  // Development

}
