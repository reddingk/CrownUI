components.component('clintonMinistries', {
  bindings: {},
	require: {
      parent: '^clinton'
  },
	controller: function () {
      var ctrl = this;
      ctrl.churchHierarchy = [
        {"name":"Mid-Atlantic Episcopal District", "title":"Philadelphia & Baltimore Conference, Baltimore District"},
        {"name":"The Reverend Alyce R. Walker Johnson", "title":"Pastor"},
        {"name":"The Reverend Lowell A. Williams", "title":"Presiding Elder, Baltimore District"},
        {"name":"Mrs. Devieta C. Moore", "title":"Missionary Supervisor, Mid-Atlantic II Episcopal District"},
        {"name":"The Right Reverend W. Darin Moore", "title":"Presiding Prelate, Mid-Atlantic II Episcopal District"}
      ];
   },
   templateUrl: 'views/clinton/ministries.html'
});
