/// <reference path='../_all.ts' />

module mera {
    'use strict';
    
    // typed mera widget directive
    export class MeraWidget implements ng.IDirective {
        // #region angular directive properties
        public restrict = 'E';
        public replace = true;
        public scope = { mw: '=data' };
        public templateUrl = 'templates/components/mera-widget.html';
        public link: (scope: IMeraWidgetScope, elem: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;
        // #endregion
        
        // #region initialization and destruction
        constructor(
            
        ) {
            MeraWidget.prototype.link = (scope: IMeraWidgetScope, elem: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {
                this._scope = scope;
                this._elem = elem;
                
                this.init();
                
                scope.$on('$destroy', this.destruct);
            };
        }
        
        public static generate() {
            var directive = () => {
                return new MeraWidget();
            };
            directive.$inject = [];
            return directive;
        }
        
        private destruct() {
            this._scope = this._elem = null;
        }
        // #endregion
    
        // #region private helpers
        private _scope: IMeraWidgetScope;
        private _elem: ng.IAugmentedJQuery;
        
        private init(): void {
            // setup scope variables
            
            // setup scope functions
        }
        // #endregion
    }
}
