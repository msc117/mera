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
import { MeraLoader } from './components';

@Component({
   selector: 'mera-app',
   template: `
      <main>
         <mera-loader></mera-loader>
      </main>
   `,
   directives: []
})
export class MeraApp {
    private user: IUser;
//    @LocalStorage() private user: User = false;

    constructor() {}

    ngOnInit() {
        
    }
}
