factories.factory("Deal", function (){
    function Deal(myTitle, myBusiness, myPrice){
        this.title = myTitle;
        this.business = myBusiness;
        this.price = myPrice;
    }

    return Deal;
});