import { Component } from '@angular/core';
import {
   Router,
   Routes,
   ROUTER_PROVIDERS } from '@angular/router';
import { AppState } from './app.service';
import { User } from './services';
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
   providers: [ROUTER_PROVIDERS],
   template: `
      <main>
         <mera-loader></mera-loader>
         <router-outlet id="page-content"></router-outlet>
      </main>
   `,
   directives: []
})
@Routes([
   { path: '/',      component: Home },
   { path: '/404',   component: NotFound },
   { path: '/500',   component: ServerError },
   { path: '/setup', component: MeraSetup }
])
export class MeraApp {
    private user: User;
//    @LocalStorage() private user: User = false;

    constructor(public appState: AppState, private router: Router, private location: Location) {
    // setup 404 linking
    }

    ngOnInit() {
        if (!this.user) {
            this.router.navigate(['/setup']);
        }
        
    //    this.router.subscribe(path => {
    //        console.log(path);
    //    });
    }
}
