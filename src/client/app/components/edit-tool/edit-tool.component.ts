import {
    Component,
    OnInit,
    Input } from '@angular/core';
import { IMeraTool } from '../../services';

@Component({
    moduleId: module.id,
    selector: 'mera-edit-tool',
    template: require('./edit-tool.html')
    // styles: [require('./edit-tool.scss')]
})
export class EditTool implements OnInit {
    @Input() tool: IMeraTool;
    
    constructor() { }

    ngOnInit() {
        console.log(this.tool);
    }
}
