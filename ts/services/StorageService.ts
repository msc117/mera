/// <reference path='../_all.ts' />

module mera {
    'use strict';
    
    // typed widget manager
    export class StorageService implements IMeraStorage {
        public static $inject = [];
        
        // #region initialization
        private openWidgets: Array<IMeraWidget>;
        
        constructor(
            
        ) {
            
        }
        // #endregion
        
        // #region public functions
        // function to get current layout saved to localstorage
        // @return sorted array of widgets
        public getLayout(): JSON {
            var $: StorageService = this;
            if (!$._exists('mera-layout'))
                $._initialize();
            return $._getFromStorage('mera-layout');
        }
        
        // function to save current layout to localstorage
        public saveLayout(): boolean {
            return false;
        }
        
        // function to wipe localstorage
        public reset(): void {
            return this._wipe();
        }
        // #endregion
    
        // #region private helpers
        // worker function to save to localstorage
        private _saveToStorage(data: Array<any>): boolean {
            try {
                angular.forEach(data, (obj) => {
                    console.log(obj);
                    localStorage.setItem(obj.key, obj.content); 
                });
                return true;
            } catch (e) {
                return false;
            }
        }
        
        // worker function to retrieve item from localstorage
        private _getFromStorage(key): JSON {
            try {
                return JSON.parse(localStorage.getItem(key))
            } catch (e) {
                console.log("failed to parse from storage", e);
            }
        }
        
        // worker function to wipe localstorage
        private _wipe(): void {
            try {
                localStorage.clear();
                // reset layout to default
                this._initialize();
                console.log("localstorage wiped");
            } catch (e) {
                console.log("failed to wipe localstorage");
            }
        }
        
        // worker function to set default settings
        private _initialize(): void {
            // TODO
            var defaults = {
                "settings": {
                    
                },
                "layout": [
                    "templates/widgets/mera-clock.html"
                ]
            };
            console.log("setting default settings");
            return;
        }
        
        // worker function to check if key exists in localstorage
        private _exists(key: string): any {
            localStorage.getItem(key) ? true : false;
        }
        // #endregion
    }
}
