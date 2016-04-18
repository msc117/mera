import {
    Component,
    HostBinding,
    ChangeDetectionStrategy
} from 'angular2/core';

@Component({
    selector: 'mera-loader',
    template: require('./loader.html') 
})
export class MeraLoader {
    @HostBinding('attr.status')
    
    public set(input: boolean) {
        
    }
    
    public start(): void {
        
    }
    
    public done(): void {
        
    }
}
