/// <reference path='../_all.ts' />

module mera {
    export interface IMeraScope extends ng.IScope {
        meraWidgets: JSON,
        availableWidgets: Array<any>,
        changeWallpaper(e: Event): void
    }
}
