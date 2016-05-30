import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'mera-edit-tool',
    template: require('./edit-tool.html'),
    styles: [require('./edit-tool.scss')]
})
export class EditTool implements OnInit {
    constructor() { }

    ngOnInit() { }
}
