import {
    Component,
    HostBinding,
    Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'mera-loader',
    host: {
        'role': 'progressbar',
        'aria-valuemin': '0',
        'aria-valuemax': '100',
    },
    directives: [NgIf],
    // styles: [require('./loader.scss')],
    template: require('./loader.html')
})
export class Loader {
    private close: boolean = false;
    
    @HostBinding('attr.aria-valuenow')
    @Input('value')
    @Input() active: boolean;
    _value: number = 0;
    
    public set(input: boolean) {
        
    }

    public start(): void {
        
    }

    public done(): void {
        // allow time for fadeout
        this.close = true;
        setTimeout(() => {
            this.active = false;
        }, 300);
    }
}
