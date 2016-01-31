/// <reference path='../_all.ts' />

module mera {
	'use strict';
	
	// typed base ctrl
	export class BaseCtrl {
		public static $inject = [
			'$scope',
            '$rootScope',
            '$storage',
            '$mdDialog'
		];
		
		// #region initilization and destruction
		constructor(
			private $scope: IMeraScope,
            private $rootScope: IMeraRootscope,
            private $storage: IMeraStorage,
            private $mdDialog: angular.material.IDialogService
		) {
			this.init();
		}
		// #endregion
		
		// #region private helpers
		private init(): void {
            var _: BaseCtrl = this;
            // setup scope variables
            _.$scope.meraWidgets = _.$storage.get('mera-layout');
            _.$rootScope.settings = {};
            _.$rootScope.settings.wallpaper = _.$storage.get('mera-wallpaper');
            console.log(_.$scope.meraWidgets, _.$rootScope.settings);
            _.$scope.availableWidgets = [
                {
                    active: true,
                    name: 'Clock'      
                },
                {
                    active: true,
                    name: 'Todo'      
                },
                {
                    active: true,
                    name: 'Top Sites'      
                },
                {
                    active: false,
                    name: 'News'      
                }
            ];
            
            // setup scope functions
            _.$scope.changeWallpaper = _.changeWallpaper_();
        }
        // #endregion
        
        private changeWallpaper_(): (e: Event) => void {
            return (e): void => {
                this.$mdDialog.show({
                   controller: WallpaperDialogCtrl,
                   templateUrl: 'templates/components/wallpaper-dialog.html',
                   parent: angular.element(document.body),
                   targetEvent: e,
                   clickOutsideToClose: true
                }).then((ret) => {
                    // completed
                    // save wallpaper choice to localstorage
                    this.$storage.set({'mera-wallpaper': ret});
                    this.$rootScope.settings.wallpaper = ret;
                }, () => {
                    // cancelled
                    console.log('wallpaper change cancelled');
                });
            };
        }
	}
}
