import {
    Component,
    OnInit,
    Input } from '@angular/core';
import { IMeraTool } from '../../services';

@Component({
    selector: 'mera-dashboard',
    template: require('./dashboard.html'),
    styles: [require('./dashboard.scss')]
})
export class Dashboard implements OnInit {
    @Input('tools') tools: IMeraTool[];
    
    constructor() { }

    ngOnInit() {
        console.log(this.tools);   
    }
}
