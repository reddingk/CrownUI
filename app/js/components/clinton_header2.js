components.component('cltHeader2', {
  bindings: {},
	require: {
      parent: '^clinton'
  },
	controller: function () {
      var ctrl = this;

      ctrl.navigation = [
        {"title":"About Us", "preview":true, "subSections":[{"title":"Our History","image":"imgs/clinton/subimgs/history.jpg"}, {"title":"Our Vision","image":"imgs/clinton/subimgs/vision.jpg"},{"title":"Our Staff","image":"imgs/clinton/subimgs/staff.jpg"},{"title":"Service Times","image":"imgs/clinton/subimgs/time.jpg"},{"title":"Inside Zion","image":"imgs/clinton/subimgs/zion1.jpg"}]},
        {"title":"Get Connected", "preview":false, "subSections":[]},
        {"title":"Ministries", "preview":true, "subSections":[
          {"title":"Administration","image":"imgs/clinton/subimgs/admin1.jpg"},{"title":"Bible Study","image":"imgs/clinton/subimgs/biblestudy.jpg"}, {"title":"Children/Youth Ministries","image":"imgs/clinton/subimgs/youth1.jpg"},
          {"title":"Christian Education","image":"imgs/clinton/subimgs/christian1.jpg"},{"title":"Community Collaborations for Outreach","image":"imgs/clinton/subimgs/community.jpg"},{"title":"Health Ministry","image":"imgs/clinton/subimgs/health1.jpg"},
          {"title":"Lay Council","image":"imgs/clinton/subimgs/biblestudy.jpg"},{"title":"Men's Outreach","image":"imgs/clinton/subimgs/men1.jpg"},{"title":"Small Group Fellowship","image":"imgs/clinton/subimgs/smallGroup.jpg"}
        ]},
        {"title":"Our Pastor", "preview":false, "subSections":[]},
        {"title":"Gallery", "preview":false, "subSections":[]},
        {"title":"News & Events", "preview":false, "subSections":[]}
      ];

      ctrl.selectedNav = ctrl.navigation[2];

      ctrl.selectNav = function(nav){
        if (!nav.preview){
          ctrl.selectedNav = ctrl.navigation[2];
        }
        else {
          ctrl.selectedNav = nav;
        }
      }

      ctrl.mainImg = "imgs/clinton/pt4.jpg";
   },
   templateUrl: 'views/clinton/templates/header2.html'
});
