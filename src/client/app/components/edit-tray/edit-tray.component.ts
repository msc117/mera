import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { EditTool } from '../edit-tool';
import { IMeraTool } from '../../services';

@Component({
    selector: 'mera-edit-tray',
    styles: [require('./edit-tray.scss')],
    template: require('./edit-tray.html'),
    directives: [NgIf, NgFor],
    providers: [EditTool]
})
export class EditTray implements OnInit {
    private open: boolean = false;
    private tools: IMeraTool[] = [];
    
    constructor() {}
    
    ngOnInit() {
        
    }
}
