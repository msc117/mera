import {Injectable} from 'angular2/core';

export interface Loader {
   toggle(boolean): void,
   start(): void,
   done(): void
}

@Injectable()
export class Loader {

   constructor() { }

   ngOnInit() {
      this.get();
   }

   get() {
      let promise = new Promise((resolve, reject) => {
         //   TODO (msantos) ajax call to grab user.json
         resolve({ data: { firstName: 'asdf', lastName: 'asfd', email: 'asdf@asdf.com' } });
      });

      return promise;
   }
}
