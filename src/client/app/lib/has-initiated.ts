import {StorageService} from '../services';
import {Injector} from 'angular2/core';

export const hasInitiated: () => Promise<boolean> | boolean = (injector: Injector) => {
   let storageService = injector.get(StorageService);
//    let loader: Loader = injector.get(Loader);
   return new Promise((resolve, reject) => {
      // loader.start();

      !storageService.isNewUser()
         .then((ret) => {
            // loader.done();
            console.log(ret);
            if (ret.data)
               resolve(true);
            else
               reject();
         }, () => {
            // loader.done();

         });
   });
};
