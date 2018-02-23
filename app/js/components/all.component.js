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
 