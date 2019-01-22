AOS.init();

$(document).ready(function(){

    var mobileBtn = $('.mobile-btn');
    var mobileMenu = $('.mobile-menu');

    // Show menu on click
    
    mobileBtn.on('click', function(){

        if (mobileMenu.hasClass('open')) {
            mobileMenu.removeClass('open');
            mobileBtn.removeClass('active');
        } else {
            mobileMenu.addClass('open');
            mobileBtn.addClass('active');
        }
        
    });

});