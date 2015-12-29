/// <reference path='../_all.ts' />

module mera {
    'use strict';
    
    // typed mera widget directive
    export class MeraLoading implements ng.IDirective {
        // #region angular directive properties
        public restrict = 'C';
        public link: (scope: IMeraWidgetScope, elem: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;
        // #endregion
        
        // #region initialization and destruction
        constructor(
            private $animate: ng.IAnimateProvider
        ) {
            MeraLoading.prototype.link = (scope: ng.IScope, elem: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {
                // this.$animate.leave( elem.children() ).then(() => {
                //     elem.remove();
                    
                //     scope = elem = attrs = null;
                // })
            };
        }
        
        public static generate() {
            var directive = ($animate: ng.IAnimateProvider) => {
                return new MeraLoading($animate);
            };
            directive.$inject = ['$animate'];
            return directive;
        }
        // #endregion
    }
}
