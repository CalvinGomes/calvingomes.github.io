$('document').ready(function () {

    $(function() {
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
        
            if (scroll >= 10) {
                $(".navbar").addClass("notHome").removeClass("home");
            } else {
                $(".navbar").removeClass("notHome").addClass("home");
            }
            
        });
    });
});
