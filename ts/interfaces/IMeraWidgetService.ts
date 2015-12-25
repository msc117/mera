/// <reference path='../_all.ts' />

module mera {
    export interface IMeraWidgetService {
        getLayout(): Array<IMeraWidget>,
        saveLayout(): boolean
    }
}
