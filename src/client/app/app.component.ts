import {Component} from 'angular2/core';
import {
   Router,
   RouteConfig,
   ROUTER_PROVIDERS
} from 'angular2/router';
import {LocalStorage} from 'angular2-localstorage/WebStorage';
import {AppState} from './app.service';
import {
    User,
    LoaderService    
} from './services';
import {hasInitiated} from './lib/has-initiated';

import {Home} from './routes/home';
import {NotFoundComponent} from './routes/errors/not-found.component';
import {ServerErrorComponent} from './routes/errors/server-error.component';
import {MeraLoader} from './components';

@Component({
   selector: 'mera-app',
   providers: [ROUTER_PROVIDERS],
   template: `
      <main>
         <mera-loader></mera-loader>
         <router-outlet></router-outlet>
      </main>
   `,
   directives: []
})
@RouteConfig([
   { path: '/', name: 'Home', component: Home, useAsDefault: true },
   { path: '/404', name: 'NotFound', component: NotFoundComponent },
   { path: '/500', name: 'ServerError', component: ServerErrorComponent },
   
   { path: '/setup', name: 'Setup', loader: require('es6-promise!./routes')('') }
])
export class MeraApp {
   @LocalStorage() private user: User = false;

   constructor(public appState: AppState, private router: Router) {}

   ngOnInit() {
       if (!user)
           this.router.navigateTo(['Setup']);
       this.router.subscribe(path => {
           console.log(path);
       });
   }
}
