/// <reference path='../_all.ts' />

module mera {
    'use strict';
    
    export class MeraWidgetTile implements ng.IDirective {
        // #region angular directive define
        public restrict = 'E';
        public replace = true;
        public scope = { tile: '=data' };
        public templateUrl = 'templates/components/mera-widget-tile.html';
        public link: (scope: IMeraWidgetTileScope, elem: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;
        // #endregion
        
        // #region initialization and destruction
        constructor(
            
        ) {
            MeraWidgetTile.prototype.link = (scope: IMeraWidgetTileScope, elem: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {
              this._scope = scope;
              this._elem = elem;
              
              this.init();
              
              scope.$on('$destroy', this.destruct);  
            };
        }
        public static generate(): () => MeraWidgetTile {
            var directive = () => {
                return new MeraWidgetTile();  
            };
            directive.$inject = [];
            return directive;
        }
        
        private destruct(): void {
            this._scope = this._elem = null;
        }
        // #endregion

        // #region private helpers
        private _scope: IMeraWidgetTileScope;
        private _elem: ng.IAugmentedJQuery;
        
        private init(): void {
           var $: MeraWidgetTile = this;
           // setup scope variables
           $._scope.icon = 'alarm';
           
           // setup scope functions
           $._scope.openSettings = $._openSettings;
           $._scope.closeTile = $._closeTile;  
        }
        
        private _openSettings(): () => void {
            return () => {
                console.log('opening settings');  
            };
        }
        
        private _closeTile(): () => void {
            return () => {
                console.log('closing tile');  
            };
        }
        // #endregion
    }
}
