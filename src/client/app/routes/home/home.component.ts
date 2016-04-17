import {Component} from 'angular2/core';

@Component({
   selector: 'home',
   template: require('./home.html')
   // styles: [ require('./home.scss') ],
})
export class Home {

   constructor() {}

   ngOnInit() {
      console.log('in home component');
   }
}
