import { Component } from '@angular/core';
import { AppState } from './app.service';
import { IUser } from './services';
// import { hasInitiated } from './lib/has-initiated';
// import { LocalStorage } from 'angular2-localstorage';

import {
    Home,
    NotFound,
    ServerError,
    MeraSetup } from './routes';
import { Loader, Dashboard } from './components';

@Component({
   selector: 'mera-app',
   template: `
      <main>
         <mera-loader active="{{loaderActive}}"></mera-loader>
         <mera-dashboard></mera-dashboard>
      </main>
   `,
   directives: []
})
export class MeraApp {
    private user: IUser;
    private loaderActive: boolean;
//    @LocalStorage() private user: User = false;

    constructor() {}

    ngOnInit() {
        
    }
}
