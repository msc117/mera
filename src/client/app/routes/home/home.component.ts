import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'home',
   template: require('./home.html')
   // styles: [ require('./home.scss') ],
})
export class Home implements OnInit {

   constructor() {}

   ngOnInit() {
      console.log('in home component');
   }
}
