import {Component} from 'angular2/core';

@Component({
   template: `
      <h2>Server Error</h2>
      <p>The server encountered an error while processing your request.</p>
   `
})
export class ServerErrorComponent {
   constructor() {}
}
