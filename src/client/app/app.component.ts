import { Component } from '@angular/core';
import { AppState } from './app.service';
import { 
    IUser,
    ToolService,
    IMeraTool } from './services';
// import { hasInitiated } from './lib/has-initiated';
// import { LocalStorage } from 'angular2-localstorage';

import { Loader, Dashboard } from './components';

@Component({
   selector: 'mera-app',
   template: `
      <main>
         <mera-loader [active]="loaderActive"></mera-loader>
         <mera-dashboard [tools]="tools"></mera-dashboard>
      </main>
   `,
   providers: [ToolService],
   directives: [Loader, Dashboard]
})
export class MeraApp {
    private user: IUser;
    private loaderActive: boolean = true;
    private tools: IMeraTool[];
//    @LocalStorage() private user: User = false;

    constructor(private toolService: ToolService) {}

    ngOnInit() {
        this.toolService.get()
            .subscribe(tools => {
                console.log(tools);
                this.tools = tools;
                this.loaderActive = false;});
    }
}
