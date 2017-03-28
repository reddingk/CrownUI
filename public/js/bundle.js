'use strict';

var routes = angular.module('routes', ['ui.router']);
var directives = angular.module('directives', []);
var services = angular.module('services', []);
var components = angular.module('components', ['ui.bootstrap', 'ngAnimate']);

var workBenchApp = angular.module('Workbench', ['ngMaterial', 'ngAnimate',	'ui.router', 'directives',	'services',	'components',	'routes']);

workBenchApp.config(['$stateProvider', '$urlRouterProvider','$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
      $stateProvider
      .state('app', {
        url: "/",
        views: {
          'content':{
            component: 'clintonP1'
          }
        }
      })
      .state('app.clinton3', {
        url: "Clinton3",
        views: {
          'content@': {
            component: 'clintonP3'
          }
        }
      })
      .state('app.clinton2', {
        url: "Clinton2",
        views: {
          'content@': {
            component: 'clintonP2'
          }
        }
      })
      .state('app.clinton2.ministries', {
        url: "/Ministries",
        views: {
          'content@': {
            component: 'clintonMinistries'
          }
        }
      })
      .state('app.underconstruction', {
        url: "/underconstruction",
        views: {
          'content@': {
            component: 'underconstruction'
          }
        }
      });

      $urlRouterProvider.otherwise('/');
      //$locationProvider.html5Mode(true);
    }]);

// root component: all other components will be under this component
// objects: view - this will store the state and other high level objects
components.component('clinton', {
   bindings: {},
	controller: function ($scope) {
      var ctrl = this;
		ctrl.view = {};
		ctrl.view.isMobile = false;
		ctrl.view.isSearching = false;

		// set mobile to true
		var configForMobile = function () {
			ctrl.view.isMobile = true;
		}

		// set mobile to false
		var configForDesktop = function () {
			ctrl.view.isMobile = false;
		}

		// logic to configure the site for mobile oe desktop
		var configView = function () {
			if (window.innerWidth < 715) {
				configForMobile();
			} else {
				configForDesktop();
			}
		}

		configView();

		window.onresize = function(){
    		setTimeout(function(){
				configView();
				$scope.$apply();
			}, 100);
		};
   },
   templateUrl: 'views/clinton/clinton.html'
});

components.component('clintonMinistries', {
  bindings: {},
	require: {
      parent: '^clinton'
  },
	controller: function () {
      var ctrl = this;

   },
   templateUrl: 'views/clinton/ministries.html'
});

components.component('clintonP1', {
  bindings: {},
	require: {
      parent: '^clinton'
  },
	controller: function () {
      var ctrl = this;

      ctrl.homeImg = "imgs/clinton/p4.jpg";


      ctrl.churchInfo = { "address":"223 Elizabeth Avenue Rockville, MD 20850", "phone":"301-340-7942", "fax":"301-825-8938", "email":"camez223@aol.com", "welcome":"Our vision is to affect a completely transformed community of faith, worthy of citizenship in the Kingdom of God, by the power of God through His Son Jesus Christ. Our mission is to produce ministries that will serve the CAUSE of Christ through the spiritual transformation of minds, bodies and spirits. Sunday morning worship services begin at 10:00 AM." };
      ctrl.churchGallery = ["imgs/clinton/p1.jpg", "imgs/clinton/p8.jpg", "imgs/clinton/p2.jpg", "imgs/clinton/p7.jpg", "imgs/clinton/p3.jpg", "imgs/clinton/p6.jpg"];
      ctrl.upcomingEvents = [{"date":new Date("2016-03-25 21:00:00"), "title":"Chorale Ensemble Choir Rehearsal"},{"date":new Date("2016-03-27 19:00:00"), "title":"TIPS Bible Study @Dorothy Day Place"},{"date":new Date("2016-03-25 19:30:00"), "title":"Children & Youth Choir Rehearsal"}  ];

      ctrl.connectedCards = [
        {"title":"Watch Live", "img":"imgs/clinton/p6.jpg", "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {"title":"Small Groups", "img":"imgs/clinton/subimgs/s2.jpg", "content":"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        {"title":"Church Services", "img":"imgs/clinton/Clinton_2012.jpg", "content":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
        {"title":"Bible Study", "img":"imgs/clinton/subimgs/biblestudy.jpg", "content":"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
      ];
   },
   templateUrl: 'views/clinton/home1.html'
});

components.component('clintonP2', {
  bindings: {},
	require: {
      parent: '^clinton'
  },
	controller: function () {
      var ctrl = this;

      ctrl.homeImg = "imgs/clinton/p4.jpg";


      ctrl.churchInfo = { "address":"223 Elizabeth Avenue Rockville, MD 20850", "phone":"301-340-7942", "fax":"301-825-8938", "email":"camez223@aol.com", "welcome":"Our vision is to affect a completely transformed community of faith, worthy of citizenship in the Kingdom of God, by the power of God through His Son Jesus Christ. Our mission is to produce ministries that will serve the CAUSE of Christ through the spiritual transformation of minds, bodies and spirits. Sunday morning worship services begin at 10:00 AM." };
      ctrl.churchGallery = ["imgs/clinton/p1.jpg", "imgs/clinton/p8.jpg", "imgs/clinton/p2.jpg", "imgs/clinton/p7.jpg", "imgs/clinton/p3.jpg", "imgs/clinton/p6.jpg"];
      ctrl.upcomingEvents = [{"date":new Date("2016-03-25 21:00:00"), "title":"Chorale Ensemble Choir Rehearsal"},{"date":new Date("2016-03-27 19:00:00"), "title":"TIPS Bible Study @Dorothy Day Place"},{"date":new Date("2016-03-25 19:30:00"), "title":"Children & Youth Choir Rehearsal"}  ];

      ctrl.connectedCards = [
        {"title":"Watch Live", "img":"imgs/clinton/p6.jpg", "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {"title":"Small Groups", "img":"imgs/clinton/subimgs/s2.jpg", "content":"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        {"title":"Church Services", "img":"imgs/clinton/Clinton_2012.jpg", "content":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
        {"title":"Bible Study", "img":"imgs/clinton/subimgs/biblestudy.jpg", "content":"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
      ];
   },
   templateUrl: 'views/clinton/home2.html'
});

components.component('clintonP3', {
  bindings: {},
	require: {
      parent: '^clinton'
  },
	controller: function () {
      var ctrl = this;

      ctrl.homeImg = "imgs/clinton/p4.jpg";

      ctrl.infoCards = [
        {
          "title":"Easter Service",
          "icon":"class",
          "content":[{"type":"text", "content":"Please Join Clinton"}, {"type":"text", "content":"Sunday, April 16, 2017 at 10:00 am for our annual"}, {"type":"text", "content":"Easter Program and Worship Service"}],
          "background":{"type":"img", "value":"imgs/clinton/easterflowers.jpg"},
          "size":{ "height":2, "width":2, "text":"lrg"}
        },
        {
          "title":"Clinton For Your Spirit, Mind, & Body",
          "icon":"favorite_border",
          "content":[{"type":"text", "content":"Uplifting and Informative Music, Wellness, Special Events and Outreach Ministries"} ],
          "background":{"type":"img", "value":"imgs/clinton/peace1.jpg"},
          "size":{ "height":1, "width":1, "text":"sml"}
        },
        {
          "title":"Welcome To Clinton",
          "icon":"change_history",
          "content":[{"type":"text", "content":"Our mission is to produce ministries that will serve the CAUSE of Christ through the spiritual transformation of minds, bodies and spirits."}, {"type":"text", "content":"Sunday morning worship services begin at 10:00 AM"} ],
          "background":{"type":"img", "value":"imgs/clinton/Clinton_2012.jpg"},
          "size":{ "height":1, "width":1, "text":"sml"}
        },
        {
          "title":"Live Stream",
          "icon":"live_tv",
          "content":[{"type":"text", "content":"Watch previous church services, and live service streams every Sunday at 10:30am."} ],
          "background":{"type":"color", "value":"rgba(90, 200, 68, 1)"},
          "size":{ "height":2, "width":1, "text":"med"}
        }
      ];

      ctrl.churchInfo = {
        "address":"223 Elizabeth Avenue Rockville, MD 20850",
        "phone":"301-340-7942",
        "fax":"301-825-8938",
        "email":"camez223@aol.com"
      };

      ctrl.churchGallery = ["imgs/clinton/p1.jpg", "imgs/clinton/p8.jpg", "imgs/clinton/p2.jpg", "imgs/clinton/p7.jpg", "imgs/clinton/p3.jpg", "imgs/clinton/p6.jpg"];
      ctrl.upcomingEvents = [{"date":new Date("2016-03-25 21:00:00"), "title":"Chorale Ensemble Choir Rehearsal"},{"date":new Date("2016-03-27 19:00:00"), "title":"TIPS Bible Study @Dorothy Day Place"},{"date":new Date("2016-03-25 19:30:00"), "title":"Children & Youth Choir Rehearsal"}  ];
   },
   templateUrl: 'views/clinton/home3.html'
});

components.component('cltHeader1', {
  bindings: {},
	require: {
      parent: '^clinton'
  },
	controller: function () {
      var ctrl = this;

      ctrl.navigation = [
        {"title":"About Us", "subSections":[{"title":"Our History","image":"imgs/clinton/subimgs/history.jpg"}, {"title":"Our Vision","image":"imgs/clinton/subimgs/vision.jpg"},{"title":"Our Staff","image":"imgs/clinton/subimgs/staff.jpg"},{"title":"Service Times","image":"imgs/clinton/subimgs/time.jpg"},{"title":"Inside Zion","image":"imgs/clinton/subimgs/zion1.jpg"}]},
        {"title":"Get Connected", "subSections":[]},
        {"title":"Ministries", "subSections":[
          {"title":"Administration","image":"imgs/clinton/subimgs/history.jpg"},{"title":"Bible Study","image":"imgs/clinton/subimgs/biblestudy.jpg"}, {"title":"Children/Youth Ministries","image":"imgs/clinton/subimgs/youth1.jpg"},
          {"title":"Christian Education","image":"imgs/clinton/subimgs/christian1.jpg"},{"title":"Community Collaborations for Outreach","image":"imgs/clinton/subimgs/community.jpg"},{"title":"Health Ministry","image":"imgs/clinton/subimgs/health1.jpg"},
          {"title":"Lay Council","image":"imgs/clinton/subimgs/biblestudy.jpg"},{"title":"Men's Outreach","image":"imgs/clinton/subimgs/men1.jpg"},{"title":"Small Group Fellowship","image":"imgs/clinton/subimgs/smallGroup.jpg"}
        ]},
        {"title":"Our Pastor", "subSections":[]},
        {"title":"Media", "subSections":[]},
        {"title":"News & Events", "subSections":[]}
      ];

      ctrl.selectedNav = ctrl.navigation[2];

      ctrl.mainImg = "imgs/clinton/p4.jpg";
   },
   templateUrl: 'views/clinton/templates/header2.html'
});

components.component('cltHeader2', {
  bindings: {},
	require: {
      parent: '^clinton'
  },
	controller: function () {
      var ctrl = this;

      ctrl.navigation = [
        {"title":"About Us", "subSections":[{"title":"Our History","image":"imgs/clinton/subimgs/history.jpg"}, {"title":"Our Vision","image":"imgs/clinton/subimgs/vision.jpg"},{"title":"Our Staff","image":"imgs/clinton/subimgs/staff.jpg"},{"title":"Service Times","image":"imgs/clinton/subimgs/time.jpg"},{"title":"Inside Zion","image":"imgs/clinton/subimgs/zion1.jpg"}]},
        {"title":"Get Connected", "subSections":[]},
        {"title":"Ministries", "subSections":[
          {"title":"Administration","image":"imgs/clinton/subimgs/history.jpg"},{"title":"Bible Study","image":"imgs/clinton/subimgs/biblestudy.jpg"}, {"title":"Children/Youth Ministries","image":"imgs/clinton/subimgs/youth1.jpg"},
          {"title":"Christian Education","image":"imgs/clinton/subimgs/christian1.jpg"},{"title":"Community Collaborations for Outreach","image":"imgs/clinton/subimgs/community.jpg"},{"title":"Health Ministry","image":"imgs/clinton/subimgs/health1.jpg"},
          {"title":"Lay Council","image":"imgs/clinton/subimgs/biblestudy.jpg"},{"title":"Men's Outreach","image":"imgs/clinton/subimgs/men1.jpg"},{"title":"Small Group Fellowship","image":"imgs/clinton/subimgs/smallGroup.jpg"}
        ]},
        {"title":"Our Pastor", "subSections":[]},
        {"title":"Media", "subSections":[]},
        {"title":"News & Events", "subSections":[]}
      ];

      ctrl.selectedNav = ctrl.navigation[2];

      ctrl.mainImg = "imgs/clinton/p4.jpg";
   },
   templateUrl: 'views/clinton/templates/header2.html'
});

components.component('cltHeader3', {
  bindings: {},
	require: {
      parent: '^clinton'
  },
	controller: function () {
      var ctrl = this;

   },
   templateUrl: 'views/clinton/templates/header3.html'
});

directives.directive('backImg', ['$window', function($window) {
  return {
    restrict: 'EA',
    link: function ($scope, element, attrs) {
      var url = attrs.backImg;
      element.css({'background-image': 'url(' + url +')'});
    }
  }
}]);
