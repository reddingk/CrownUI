components.component('clintonP3', {
  bindings: {},
	require: {
      parent: '^clinton'
  },
	controller: function () {
      var ctrl = this;

      ctrl.homeImg = "imgs/clinton/pt6.jpg";
    //easterflowers.jpg
      ctrl.infoCards = [
        {
          "title":"Clinton Homecoming",
          "icon":"class",
          "textCover":true,
          "content":[{"type":"text", "content":"Please Join Us On"}, {"type":"text", "content":"Sunday, August 13, 2017 at 10:00am - 4pm for Clinton A.M.E. Zion Church's Homecoming"}, {"type":"text", "content":"Location: Pint Isreal Park, 357 Frederick Avenue, Rockville, MD 20850"}],
          "background":{"type":"img", "value":"imgs/clinton/Homecoming-Flyer.png"},
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
          "background":{"type":"color", "value":"rgba(148,15,166,0.5)"},
          "size":{ "height":2, "width":1, "text":"med"}
        }
      ];

      ctrl.churchInfo = {
        "address":"223 Elizabeth Avenue Rockville, MD 20850",
        "phone":"301-340-7942",
        "fax":"301-825-8938",
        "email":"camez223@aol.com"
      };
      ctrl.churchHierarchy = [
        {"name":"Mid-Atlantic Episcopal District", "title":"Philadelphia & Baltimore Conference, Baltimore District"},
        {"name":"The Reverend Alyce R. Walker Johnson", "title":"Pastor"},
        {"name":"The Reverend Lowell A. Williams", "title":"Presiding Elder, Baltimore District"},
        {"name":"Mrs. Devieta C. Moore", "title":"Missionary Supervisor, Mid-Atlantic II Episcopal District"},
        {"name":"The Right Reverend W. Darin Moore", "title":"Presiding Prelate, Mid-Atlantic II Episcopal District"}
      ];

      ctrl.churchGallery = ["imgs/clinton/p1.jpg", "imgs/clinton/p8.jpg", "imgs/clinton/p2.jpg", "imgs/clinton/p7.jpg", "imgs/clinton/p3.jpg", "imgs/clinton/p6.jpg"];
      ctrl.upcomingEvents = [{"date":new Date("2016-03-25 21:00:00"), "title":"Chorale Ensemble Choir Rehearsal"},{"date":new Date("2016-03-27 19:00:00"), "title":"TIPS Bible Study @Dorothy Day Place"},{"date":new Date("2016-03-25 19:30:00"), "title":"Children & Youth Choir Rehearsal"}  ];

      ctrl.footerLinks = ["About Us", "Ministries", "Our Pastor", "Events","Our History","Galleries", "Inside Zion"];
   },
   templateUrl: 'views/clinton/home3.html'
});
