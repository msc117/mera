/// <reference path='../_all.ts' />

module mera {
    'use strict';
    
    export class MeraBg implements ng.IDirective {
        // #region angular directive properties
        public restrict = 'A';
        public link: (scope: IMeraBgScope, elem: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;
        // #endregion
        
        // #region initialization and destruction
        constructor(
            
        ) {
            MeraBg.prototype.link = (scope: IMeraBgScope, elem: ng.IAugmentedJQuery, attrs: ng.IMeraBgAttrs) => {
                this._elem = elem;
                this._attrs = attrs;
                
                this.init();
                
                scope.$on('$destroy', this.destruct);
            };
        }
        
        public static generate() {
            var directive = () => {
                return new MeraBg();
            };
            directive.$inject = [];
            return directive;
        }
        
        private destruct() {
            this._elem = this._attrs = null;
        }
        // #endregion
    
        // #region private helpers
        private _elem: ng.IAugmentedJQuery;
        private _attrs: IMeraBgAttrs;
        
        private init(): void {
            console.log(this._attrs);
            this._elem.css({
               'background-image': 'url(images/' + this._attrs.meraBg + ')',
               'background-size': 'cover' 
            });
        }
        // #endregion
    }
}
