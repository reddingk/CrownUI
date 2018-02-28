components.component('searchbar', {
  bindings: {},
  require: {},
    controller: function () {
      var ctrl = this;

      /*
        Search Codes
        0 = Default
        1 = Search Page
       */
      ctrl.pageView = 0;

      ctrl.pageChange = function(type){
        if(ctrl.pageView != type){
          ctrl.pageView = type;
        }
      }
  },
  templateUrl: 'views/templates/_search.html'
});
  