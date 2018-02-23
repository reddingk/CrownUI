'use strict';

var routes = angular.module('routes', ['ui.router']);
var directives = angular.module('directives', []);
var services = angular.module('services', []);
var components = angular.module('components', ['ui.bootstrap', 'ngAnimate']);

var crownApp = angular.module('CrownApp', ['ngMaterial', 'ngAnimate','ui.router', 'directives',	'services',	'components','routes']);
