/// <reference path='../_all.ts' />

module mera {
	'use strict';
	
	// angular app setup
	var app = angular.module('mera', ['ngAria', 'ngAnimate', 'ngMaterial'])
		.config(Config.init())
        .directive('meraWidget', MeraWidget.generate())
		.controller('baseCtrl', BaseCtrl);
}
