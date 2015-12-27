/// <reference path='../../_all.ts' />

module mera {
    'use strict';
    
    // typed clock widget controller
    export class MeraClock {
        public static $inject = [
            '$scope',
            '$interval'
        ];
        // #region initialization
        constructor(
            private $scope: IMeraClock,
            private $interval: ng.IIntervalService
        ) {
            this.init();
        }
        
        private init(): void {
            var _: MeraClock = this;
            // setup scope variables
            _.$scope.date = _.getDate_();
            // update scope date every 1s
            _.$interval(() => {
                _.$scope.date = _.getDate_();
            }, 1000);
        }
        // #endregion
        
        // #region private helpers
        private getDate_(): Object {
            var now = new Date();
            return {
                hours: now.getHours(),
                mins: now.getMinutes(),
                secs: now.getSeconds(),
                date: now
            };
        }
        // #endregion
    }
}
