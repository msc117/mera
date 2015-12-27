/// <reference path='../_all.ts' />

module mera {
	'use strict';
	
	// typed base ctrl
	export class BaseCtrl {
		public static $inject = [
			'$scope',
            '$storage',
            '$mdSidenav'
		];
		
		// #region initilization and destruction
		constructor(
			private $scope: IMeraScope,
            private $storage: IMeraStorage,
            private $mdSidenav: angular.material.ISidenavService
		) {
			this.init();
		}
		// #endregion
		
		// #region private helpers
		private init(): void {
            var _: BaseCtrl = this;
            // setup scope variables
            _.$scope.meraWidgets = _.$storage.getLayout();
            console.log(_.$scope.meraWidgets);
            
            // setup scope functions
            _.$scope.toggleNav = _.toggleNav_();
        }
        
        private toggleNav_(): () => void {
            return (): void => {
                this.$mdSidenav('menu').toggle();  
            };
        }
        // #endregion
	}
}
