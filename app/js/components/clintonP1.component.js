components.component('clintonP1', {
  bindings: {},
	require: {
      parent: '^clinton'
  },
	controller: function () {
      var ctrl = this;

      ctrl.mainImg = "imgs/clinton/pt2.jpg";


      ctrl.churchInfo = { "address":"223 Elizabeth Avenue Rockville, MD 20850", "phone":"301-340-7942", "fax":"301-825-8938", "email":"camez223@aol.com", "welcome":"Our vision is to affect a completely transformed community of faith, worthy of citizenship in the Kingdom of God, by the power of God through His Son Jesus Christ. Our mission is to produce ministries that will serve the CAUSE of Christ through the spiritual transformation of minds, bodies and spirits. Sunday morning worship services begin at 10:00 AM." };
      ctrl.churchGallery = ["imgs/clinton/p1.jpg", "imgs/clinton/p8.jpg", "imgs/clinton/p2.jpg", "imgs/clinton/p7.jpg", "imgs/clinton/p3.jpg", "imgs/clinton/p6.jpg"];
      ctrl.upcomingEvents = [{"date":new Date("2016-03-25 21:00:00"), "title":"Chorale Ensemble Choir Rehearsal"},{"date":new Date("2016-03-27 19:00:00"), "title":"TIPS Bible Study @Dorothy Day Place"},{"date":new Date("2016-03-25 19:30:00"), "title":"Children & Youth Choir Rehearsal"}  ];
      ctrl.ministries = [
        {"title":"Administration","image":"imgs/clinton/subimgs/history.jpg"},{"title":"Bible Study","image":"imgs/clinton/subimgs/biblestudy.jpg"}, {"title":"Children/Youth Ministries","image":"imgs/clinton/subimgs/youth1.jpg"},
        {"title":"Christian Education","image":"imgs/clinton/subimgs/christian1.jpg"},{"title":"Community Collaborations for Outreach","image":"imgs/clinton/subimgs/community.jpg"},{"title":"Health Ministry","image":"imgs/clinton/subimgs/health1.jpg"},
        {"title":"Lay Council","image":"imgs/clinton/subimgs/biblestudy.jpg"},{"title":"Men's Outreach","image":"imgs/clinton/subimgs/men1.jpg"},{"title":"Small Group Fellowship","image":"imgs/clinton/subimgs/smallGroup.jpg"}
      ];
      ctrl.spacerImage = "imgs/clinton/m9.jpg";
      ctrl.welcomeImg = "imgs/clinton/pastor2.jpeg";
      ctrl.welcomeBack = "imgs/clinton/bgNew.png";
      ctrl.connectedCards = [
        {"title":"Watch Live", "img":"imgs/clinton/p6.jpg", "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {"title":"Small Groups", "img":"imgs/clinton/subimgs/s2.jpg", "content":"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        {"title":"Church Services", "img":"imgs/clinton/Clinton_2012.jpg", "content":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},
        {"title":"Bible Study", "img":"imgs/clinton/subimgs/biblestudy.jpg", "content":"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
      ];

      ctrl.churchHierarchy = [
        {"name":"Mid-Atlantic Episcopal District", "title":"Philadelphia & Baltimore Conference, Baltimore District"},
        {"name":"The Reverend Alyce R. Walker Johnson", "title":"Pastor"},
        {"name":"The Reverend Dr., Evalina Huggins", "title":"Presiding Elder, Baltimore District"},
        {"name":"Mrs. Devieta C. Moore", "title":"Missionary Supervisor, Mid-Atlantic II Episcopal District"},
        {"name":"The Right Reverend W. Darin Moore", "title":"Presiding Prelate, Mid-Atlantic II Episcopal District"}
      ];
      ctrl.getNumber = function(num) {
          return new Array(num);
      }
   },
   templateUrl: 'views/clinton/home1.html'
});
