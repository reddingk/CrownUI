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
