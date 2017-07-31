components.component('cltHeader1', {
  bindings: {},
	require: {
      parent: '^clinton'
  },
	controller: function () {
      var ctrl = this;

      ctrl.navigation = [
        {"title":"About Us", "subSections":[{"title":"Our History","image":"imgs/clinton/subimgs/history.jpg"}, {"title":"Our Vision","image":"imgs/clinton/subimgs/vision.jpg"},{"title":"Our Staff","image":"imgs/clinton/subimgs/staff.jpg"},{"title":"Service Times","image":"imgs/clinton/subimgs/time.jpg"},{"title":"Inside Zion","image":"imgs/clinton/subimgs/zion1.jpg"}]},
        {"title":"Get Connected", "subSections":[]},
        {"title":"Ministries", "subSections":[
          {"title":"Administration","image":"imgs/clinton/subimgs/history.jpg"},{"title":"Bible Study","image":"imgs/clinton/subimgs/biblestudy.jpg"}, {"title":"Children/Youth Ministries","image":"imgs/clinton/subimgs/youth1.jpg"},
          {"title":"Christian Education","image":"imgs/clinton/subimgs/christian1.jpg"},{"title":"Community Collaborations for Outreach","image":"imgs/clinton/subimgs/community.jpg"},{"title":"Health Ministry","image":"imgs/clinton/subimgs/health1.jpg"},
          {"title":"Lay Council","image":"imgs/clinton/subimgs/biblestudy.jpg"},{"title":"Men's Outreach","image":"imgs/clinton/subimgs/men1.jpg"},{"title":"Small Group Fellowship","image":"imgs/clinton/subimgs/smallGroup.jpg"}
        ]},
        {"title":"Our Pastor", "subSections":[]},
        {"title":"Gallery", "subSections":[]},
        {"title":"News & Events", "subSections":[]}
      ];

      ctrl.headerLogo = "imgs/clinton/Clinton_logo4.png";
   },
   templateUrl: 'views/clinton/templates/header1.html'
});
