import {Component} from 'angular2/core';
import {
   Router,
   RouteConfig,
   CanActivate,
   ROUTER_PROVIDERS
} from 'angular2/router';
import {AppState} from './app.service';
import {UserService, IUser} from './services/user.service';
import {hasInitiated} from './lib/has-initiated';
import {Lib} from './lib';

import {Home} from './routes/home';
import {NotFoundComponent} from './routes/errors/not-found.component';
import {ServerErrorComponent} from './routes/errors/server-error.component';
import {MeraLoader} from './components';

@Component({
   selector: 'mera-app',
   providers: [ROUTER_PROVIDERS, UserService, Lib],
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
])
@CanActivate(() => {
   return hasInitiated();
})
export class MeraApp {
   private user: IUser;
   private _userService: UserService;
   private _router: Router;
   private _lib: Lib

   constructor(public appState: AppState, userService: UserService, router: Router, lib: Lib) {
      let self = this;
      self._userService = userService;
      self._router = router;
      self._lib = lib;
   }

   ngOnInit() {
       
   }
}
