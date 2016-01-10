/// <reference path='../_all.ts' />

module mera {
    export interface IMeraScope extends ng.IScope {
        meraWidgets: JSON,
        changeWallpaper(e: Event): void
    }
}
