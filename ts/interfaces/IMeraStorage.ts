/// <reference path='../_all.ts' />

module mera {
    export interface IMeraStorage {
        get(key: string): Object,
        set(o: Object): void
    }
}
