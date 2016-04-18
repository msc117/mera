import {
    Component,
    HostBinding,
    Input,
    ChangeDetectionStrategy
} from 'angular2/core';
import {NgIf} from 'angular2/common';

@Component({
    selector: 'mera-loader',
    host: {
        'role': 'progressbar',
        'aria-valuemin': '0',
        'aria-valuemax': '100',
    },
    directives: [NgIf],
    template: require('./loader.html')
})
export class MeraLoader {
    private close: boolean = false;
    private active: boolean = false;
    
    @HostBinding('attr.aria-valuenow')
    @Input('value')
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
