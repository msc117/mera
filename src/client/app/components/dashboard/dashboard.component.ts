import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'mera-dashboard',
    template: require('./dashboard.html'),
    styles: [require('./dashboard.scss')]
})
export class Dashboard implements OnInit {
    constructor() { }

    ngOnInit() { }

}
