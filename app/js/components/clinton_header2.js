components.component('cltHeader2', {
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
          {"title":"Administration","image":"imgs/clinton/subimgs/history.jpg"},{"title":"Bible Study","image":"imgs/clinton/subimgs/biblestudy.jpg"}, {"title":"Children/Youth Ministries","image":""},
          {"title":"Christian Education","image":"imgs/clinton/subimgs/christian1.jpg"},{"title":"Community Collaborations for Outreach","image":"imgs/clinton/subimgs/community.jpg"},{"title":"Health Ministry","image":"imgs/clinton/subimgs/health1.jpg"},
          {"title":"Lay Council","image":""},{"title":"Men's Outreach","image":"imgs/clinton/subimgs/men1.jpg"},{"title":"Small Group Fellowship","image":"imgs/clinton/subimgs/smallGroup1.jpg"}
        ]},
        {"title":"Our Pastor", "subSections":[]},
        {"title":"Media", "subSections":[]},
        {"title":"News & Events", "subSections":[]}
      ];

   },
   templateUrl: 'views/clinton/templates/header2.html'
});
