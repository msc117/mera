import {Injectable} from 'angular2/core';
import {Router} from 'angular2/router';

@Injectable()
export class Lib {
   private _router: Router;

   constructor(router: Router) {
      let self = this;
      self._router = router;
   }

   public errorResolve(err) {
      console.log(err);
      if (err.status && err.status === 404) {
         this._router.navigate(['NotFound']);
      } else if (err.status && err.status === 500) {
         this._router.navigate(['ServerError']);
      } else if (err.status && err.status === 403) {
         // TODO (msantos): IUSRDASH-111
      }
   }
}
