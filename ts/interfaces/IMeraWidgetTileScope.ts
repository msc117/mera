/// <reference path='../_all.ts' />

module dsp {
    export interface IMeraWidgetTileScope extends ng.IScope {
        active: boolean,
        openSettings(): void,
        closeTile(): void
    }
}
