'use strict';

var routes = angular.module('routes', ['ui.router']);
var directives = angular.module('directives', []);
var services = angular.module('services', []);
var factories = angular.module('factories', []);
var components = angular.module('components', ['ui.bootstrap', 'ngAnimate']);

var crownApp = angular.module('CrownApp', ['ngMaterial', 'ngAnimate','ui.router', 'directives',	'services',	'factories', 'components','routes']);

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

factories.factory("Business", function (){
    function Business(myTitle){
        this.title = myTitle;
    }

    return Business;
});
factories.factory("Deal", function (){
    function Deal(myTitle, myBusiness, myPrice){
        this.title = myTitle;
        this.business = myBusiness;
        this.price = myPrice;
    }

    return Deal;
});
services.service("demoService", ['$http', 'Deal', 'Business', function DemoService($http, Deal, Business) {
    
    return {
        getLocalDeals: function(){
            var tmpDeals = [
                new Deal("Window Tinting", "Panther Tinting & Paint", 30),
                new Deal("Synthetic Oil Change", "Jason's Car Service", 45),
                new Deal("Tax Cosultation", "Orion's Financial Services", 99),
                new Deal("Car Detailing", "Good Brothers, LLC", 125),
                new Deal("Facial Care Package", "Stripped Ego", 59)
            ];

            return tmpDeals;
        },  
        getLocalCrowns: function(){
            var tmpBusiness = [
                new Business("DWJ Production"),
                new Business("Joe's Grocery"),
                new Business("Panther Tinting & Paint"),
                new Business("Jason's Car Service"),
                new Business("Orion's Financial Services"),
                new Business("Stripped Ego"),
                new Business("Good Brothers, LLC")                
            ];

            return tmpBusiness;
        } 
    }
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
    controller: function (Deal, demoService) {
      var ctrl = this;

      ctrl.localDeals = demoService.getLocalDeals();
      ctrl.localCrowns = demoService.getLocalCrowns();

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

components.component('searchbar', {
    bindings: {},
      require: {},
      controller: function () {
        var ctrl = this;
     },
     templateUrl: 'views/templates/_search.html'
  });
  
components.component('uc', {
    bindings: {},
      require: {},
      controller: function () {
        var ctrl = this;
     },
     templateUrl: 'views/uc.html'
  });
  