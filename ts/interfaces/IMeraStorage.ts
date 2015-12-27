/// <reference path='../_all.ts' />

module mera {
    export interface IMeraStorage {
        getLayout(): JSON,
        saveLayout(): boolean
    }
}
