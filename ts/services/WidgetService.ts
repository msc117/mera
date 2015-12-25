/// <reference path='../_all.ts' />

module mera {
    'use strict';
    
    // typed widget manager
    export class WidgetService implements IMeraWidgetService {
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
        public getLayout(): Array<IMeraWidget> {
            return [];
        }
        
        // function to save current layout to localstorage
        public saveLayout(): boolean {
            return false;
        }
        // #endregion
    }
}
