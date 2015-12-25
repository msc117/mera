/// <reference path='../_all.ts' />

module mera {
	'use strict';
	
	// typed base ctrl
	export class BaseCtrl {
		public static $inject = [
			'$scope'
		];
		
		// #region initilization and destruction
		constructor(
			private $scope: IMeraScope
		) {
			
		}
		// #endregion
		
		// #region private helpers
		// #endregion
	}
}
