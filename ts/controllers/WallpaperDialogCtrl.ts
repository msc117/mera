/// <reference path='../_all.ts' />

module mera {
    'use strict';
    
    // typed wallpaper controller for changing background
    export class WallpaperDialogCtrl {
        public static $inject = [
            '$scope',
            '$mdDialog'
        ];
        
        // #region initialization
        constructor(
            private $scope: IMeraWallpaperDialogScope,
            private $mdDialog: angular.material.IDialogService
        ) {
            this.init();
        }
        // #endregion
        
        // #region private helpers
        private init(): void {
            // setup scope variables
            this.$scope.images = [
                'mera-wall-1.png',
                'mera-wall-2.jpg'
            ];
            this.$scope.wallpaper = null;
            // setup scope functions
            this.$scope.confirm = () => {
                this.$mdDialog.hide(this.$scope.wallpaper);
            };
            this.$scope.closeDialog = () => {
                this.$mdDialog.cancel();  
            };
        }
        // #endregion
    }
}
