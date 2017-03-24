components.component('clintonP2', {
  bindings: {},
	require: {
      parent: '^clinton'
  },
	controller: function () {
      var ctrl = this;

      ctrl.homeImg = "imgs/clinton/p4.jpg";


      ctrl.churchInfo = { "address":"223 Elizabeth Avenue Rockville, MD 20850", "phone":"301-340-7942", "fax":"301-825-8938", "email":"camez223@aol.com" };
      ctrl.churchGallery = ["imgs/clinton/p1.jpg", "imgs/clinton/p8.jpg", "imgs/clinton/p2.jpg", "imgs/clinton/p7.jpg", "imgs/clinton/p3.jpg", "imgs/clinton/p6.jpg"];
      ctrl.upcomingEvents = [{"date":new Date("2016-03-25 21:00:00"), "title":"Chorale Ensemble Choir Rehearsal"},{"date":new Date("2016-03-27 19:00:00"), "title":"TIPS Bible Study @Dorothy Day Place"},{"date":new Date("2016-03-25 19:30:00"), "title":"Children & Youth Choir Rehearsal"}  ];
   },
   templateUrl: 'views/clinton/home2.html'
});
