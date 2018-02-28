services.service("demoService", ['$http', 'Deal', 'Business', function DemoService($http, Deal, Business) {
    
    return {
        getLocalDeals: function(){
            var tmpDeals = [
                new Deal("Window Tinting", "Panther Tinting & Paint", 30),
                new Deal("Synthetic Oil Change", "Jason's Car Service", 45),
                new Deal("Tax Cosultation", "Orion's Financial Services", 99),
                new Deal("Car Detailing", "Good Brothers, LLC", 125),
                new Deal("Facial Care Package", "Stripped Ego", 59)
            ];

            return tmpDeals;
        },  
        getLocalCrowns: function(){
            var tmpBusiness = [
                new Business("DWJ Production"),
                new Business("Joe's Grocery"),
                new Business("Panther Tinting & Paint"),
                new Business("Jason's Car Service"),
                new Business("Orion's Financial Services"),
                new Business("Stripped Ego"),
                new Business("Good Brothers, LLC")                
            ];

            return tmpBusiness;
        } 
    }
}]);