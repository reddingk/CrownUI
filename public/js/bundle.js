'use strict';

var routes = angular.module('routes', ['ui.router']);
var directives = angular.module('directives', []);
var services = angular.module('services', []);
var components = angular.module('components', ['ui.bootstrap', 'ngAnimate']);

var crownApp = angular.module('CrownApp', ['ngMaterial', 'ngAnimate','ui.router', 'directives',	'services',	'components','routes']);

crownApp.config(['$stateProvider', '$urlRouterProvider','$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
      $stateProvider
      .state('app', {
        url: "/",
        views: {
          'content':{
            component: 'home'
          }
        }
      });

      $urlRouterProvider.otherwise('/');
    }]);

// root component: all other components will be under this component
// objects: view - this will store the state and other high level objects
components.component('all', {
    bindings: {},
     controller: function ($scope) {
       var ctrl = this;    
       
       ctrl.data = { selectedIndex: 2 };
    },
    templateUrl: 'views/all.html'
 });
 
components.component('explore', {
    bindings: {},
      require: {},
      controller: function () {
        var ctrl = this;
     },
     templateUrl: 'views/explore.html'
  });
  
components.component('home', {
  bindings: {},
	require: {},
	controller: function () {
      var ctrl = this;
   },
   templateUrl: 'views/home.html'
});
