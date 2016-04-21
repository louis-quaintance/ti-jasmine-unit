_.extend($, {

    construct: function(){

        var view = Ti.UI.createView({
            width: 100,
            height: 100,
            backgroundColor: 'red'
        });

        $.window.add(view);

        $.window.addEventListener("click", function(){
            console.log("hello, the time is " + require("alloy/moment").utc().format("YYYY[-]MM[-]DD"));
        });

        view = null;
    },

    /**
    * Noddy function to illustrate how to handle timeouts in code
    */
    showAlertAfterASetTimeout: function(){
        setTimeout(function(){
            console.log("hello");
        }, 3000);
    }

});
