import {
    Component,
    OnInit,
    Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { EditTray } from '../edit-tray';
import { IMeraTool } from '../../services';

@Component({
    selector: 'mera-dashboard',
    template: require('./dashboard.html'),
    // styles: [require('./dashboard.scss')],
    directives: [NgFor, EditTray]
})
export class Dashboard implements OnInit {
    @Input() tools: IMeraTool[];
    
    constructor() { }

    ngOnInit() {
        console.log(this.tools);   
    }
}
