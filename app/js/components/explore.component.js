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
  