import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'mera-dashboard-settings',
    // styles: [require('./dashboard-settings.scss')],
    template: require('./dashboard-settings.html')
})
export class DashboardSettings {

    constructor() { }

    private openSettings() {
        (<any>document.getElementById('settings-dialog')).open()
    }

    private closeSettings() {
        (<any>document.getElementById('settings-dialog')).close()
    }
    
    private save() {
        console.log('saving');
    }
}
