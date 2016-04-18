// App
export * from './app.component';
export * from './app.service';

import {AppState} from './app.service';
import {LocalStorageSubscriber} from 'angular2-localstorage/LocalStorageEmitter';

// Application wide providers
export const APP_PROVIDERS = [
   AppState,
   LocalStorageSubscriber
];
