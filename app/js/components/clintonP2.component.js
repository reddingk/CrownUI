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
