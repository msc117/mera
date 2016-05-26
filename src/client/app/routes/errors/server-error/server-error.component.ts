import { Component } from '@angular/core';

@Component({
   template: `
      <h2>Server Error</h2>
      <p>The server encountered an error while processing your request.</p>
   `
})
export class ServerError {
   constructor() {}
}
