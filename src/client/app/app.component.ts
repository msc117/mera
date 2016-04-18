import {Component} from 'angular2/core';
import {
   Router,
   RouteConfig,
   ROUTER_PROVIDERS
} from 'angular2/router';
import {AppState} from './app.service';
import {
    User   
} from './services';
import {hasInitiated} from './lib/has-initiated';

import {Home} from './routes/home';
import {MeraLoader} from './components';

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
@RouteConfig([
   { path: '/', name: 'Home', component: Home, useAsDefault: true },
   
   { path: '/404',   name: 'NotFound',    loader: require('es6-promise!./routes')('NotFound') },
   { path: '/500',   name: 'ServerError', loader: require('es6-promise!./routes')('ServerError') },
   { path: '/setup', name: 'Setup',       loader: require('es6-promise!./routes')('MeraSetup') }
])
export class MeraApp {
   @LocalStorage() private user: User = false;

   constructor(public appState: AppState, private router: Router) {}

   ngOnInit() {
       if (!this.user)
           this.router.navigate(['Setup']);
       this.router.subscribe(path => {
           console.log(path);
       });
   }
}
