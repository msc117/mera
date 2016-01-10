/// <reference path='../_all.ts' />

module mera {
    'use strict';
    
    export class MeraBg implements ng.IDirective {
        // #region angular directive properties
        public restrict = 'A';
        public scope = { meraBg: '@' }
        public link: (scope: IMeraBgScope, elem: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;
        // #endregion
        
        // #region initialization and destruction
        constructor(
            
        ) {
            MeraBg.prototype.link = (scope: IMeraBgScope, elem: ng.IAugmentedJQuery, attrs: ng.IMeraBgAttrs) => {
                this._scope = scope;
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
        private _scope: IMeraBgScope;
        private _elem: ng.IAugmentedJQuery;
        private _attrs: IMeraBgAttrs;
        private default = 'mera-wall-1.png';
        
        private init(): void {
            var $: MeraBg = this;
            // set wallpaper
            $.setWallpaper_($._attrs.meraBg ? $._attrs.meraBg : $.default);
            // watch value attr value for changes
            $._attrs.$observe('wallpaper', (image) => {
                if (image !== undefined)
                    $.setWallpaper_(image);
            });
        }
        
        private setWallpaper_(image): void {
            console.log('updating wallpaper to ', image);
            this._elem.css({
               'background-image': 'url(images/' + image + ')',
               'background-size': 'cover'
            });
        }
        // #endregion
    }
}
