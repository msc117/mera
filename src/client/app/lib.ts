import {Injectable} from 'angular2/core';
import {Router} from 'angular2/router';

@Injectable()
export class Lib {

   constructor(private router_: Router) {}

   public errorResolve(err) {
      console.log(err);
      if (err.status && err.status === 404) {
         this.router_.navigate(['NotFound']);
      } else if (err.status && err.status === 500) {
         this.router_.navigate(['ServerError']);
      } else if (err.status && err.status === 403) {
         // TODO (msantos): IUSRDASH-111
      }
   }
}
