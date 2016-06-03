import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { AppState } from './app.service';
import { 
    IUser,
    ToolService,
    UserService,
    IMeraTool } from './services';
import {
    Loader,
    Dashboard,
    Setup } from './components';

@Component({
   selector: 'mera-app',
   template: `
      <main>
         <paper-button (click)="resetUser()">reset user</paper-button>
         <p *ngIf="user">Welcome {{user.firstName}} {{user.lastName}}</p>
         <mera-loader [active]="loaderActive"></mera-loader>
         <mera-setup *ngIf="notSetup"
            (done)="finishedSetup($event)"></mera-setup>
         <mera-dashboard [tools]="tools"></mera-dashboard>
      </main>
   `,
//    styles: [require('./app.scss')],
   providers: [ToolService, UserService],
   directives: [Loader, Dashboard, Setup, NgIf]
})
export class MeraApp {
    private loaderActive: boolean = true;
    private notSetup: boolean = false;
    private tools: IMeraTool[];

    constructor(
        private toolService: ToolService,
        private userService: UserService) {}

    ngOnInit() {
        let user = this.userService.get();
        
        if (user) {
            this.toolService.get()
                .subscribe(tools => {
                    console.log(tools);
                    this.tools = tools;
                    this.loaderActive = false;});
        } else { 
            this.notSetup = true;
        }
    }
    
    private finishedSetup(user: IUser) {
        console.log(user);
        this.userService.update(user);
        this.notSetup = false;
    }
    
    private resetUser() {
        this.userService.update(null);
    }
}
