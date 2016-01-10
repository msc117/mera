/// <reference path='../_all.ts' />

module mera {
    'use strict';
    
    // typed widget manager
    export class StorageService {
        public static $inject = [];
        
        // #region initialization
        private openWidgets: Array<IMeraWidget>;
        
        constructor(
            
        ) {
            
        }
        // #endregion
        
        // #region public functions
        // function to get a setting
        // @return object of matching key or null
        public get(key): Object {
            var $: StorageService = this;
            if (localStorage.length === 0)
                $._initialize();
            console.log('getting ', key);
            return $._getFromStorage(key);
        }
        
        // function to save a setting
        // @param setting object to save
        public set(obj: Object): void {
            console.log('saving', obj);
            try { 
                this._saveToStorage(obj);
            } catch (e) {
                console.log('failed to save setting');
            }
        }
        
        // function to wipe localstorage
        public reset(): void {
            return this._wipe();
        }
        // #endregion
    
        // #region private helpers
        // worker function to save to localstorage
        private _saveToStorage(data: Object): boolean {
            try {
                angular.forEach(data, (v, k) => {
                    localStorage.setItem(k, JSON.stringify(v)); 
                });
                return true;
            } catch (e) {
                return false;
            }
        }
        
        // worker function to retrieve item from localstorage
        private _getFromStorage(key): Object {
            try {
                return JSON.parse(localStorage.getItem(key));
            } catch (e) {
                console.log("failed to parse from storage", e);
                return null;
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
                "mera-wallpaper": "mera-wall-1.png",
                "mera-layout": [
                    "templates/widgets/mera-clock.html"
                ]
            };
            console.log('setting default settings', defaults);
            this._saveToStorage(defaults);
            //localStorage.setItem('mera-wallpaper', JSON.stringify(defaults.wallpaper));
            //localStorage.setItem('mera-layout', JSON.stringify(defaults.layout));
        }
        
        // worker function to check if key exists in localstorage
        // @return boolean success
        private _exists(key: string): any {
            localStorage.getItem(key) ? true : false;
        }
        // #endregion
    }
}
