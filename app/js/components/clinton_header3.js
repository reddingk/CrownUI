components.component('cltHeader3', {
  bindings: {},
	require: {
      parent: '^clinton'
  },
	controller: function () {
      var ctrl = this;

      ctrl.navigation = ["About Us", "Get Connected", "Ministries", "Our Pastor", "Gallery", "News & Events"];

   },
   templateUrl: 'views/clinton/templates/header3.html'
});
