import * from '../services/loader.service';
import {StorageService} from '../services/storage.service';
import {Injector} from 'angular2/core';

export const hasInitiated = (injector: Injector) => {
   let storageService = injector.get(StorageService);
   let loader: Loader = injector.get(Loader);
   return new Promise((resolve, reject) => {
      loader.start();

      !storageService.isNewUser()
         .then((ret) => {
            loader.done();
            console.log(ret);
            if (ret.data)
               resolve(true);
            else
               reject();
         }, () => {
            loader.done();

         });
   });
};
