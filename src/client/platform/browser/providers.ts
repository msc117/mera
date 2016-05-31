/*
 * These are globally available services in any component or any other service
 */

// Angular 2
import { FORM_PROVIDERS } from '@angular/common';

// Angular 2 Http
import { HTTP_PROVIDERS } from '@angular/http';

// localstorage
import { LOCALSTORAGE_PROVIDERS } from './angular2-localstorage';

/*
* Application Providers/Directives/Pipes
* providers/directives/pipes that only live in our browser environment
*/
export const APPLICATION_PROVIDERS = [
  ...FORM_PROVIDERS,
  ...HTTP_PROVIDERS,
  ...LOCALSTORAGE_PROVIDERS
];

export const PROVIDERS = [
  ...APPLICATION_PROVIDERS
];
