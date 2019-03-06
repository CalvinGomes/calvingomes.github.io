$('document').ready(function () {

    $(function() {
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
        
            if (scroll >= 1) {
                $(".navbar").addClass("notHome").removeClass("home");
            } else {
                $(".navbar").removeClass("notHome").addClass("home");
            }
            
        });
    });

    $( '.checkInput' ).keyup(function() {
        if( $(this).val() ) {
           $(this).addClass('not-empty');
        } else {
           $(this).removeClass('not-empty');
        }
      });
});
