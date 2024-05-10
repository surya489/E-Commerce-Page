$(function () {

    browser.setup(1);

    $(window).resize(function () {
        browser.setup(0);
    });

    $('body').on('click', '.burger_menu', function() {
        var headerHeight = $('#header').outerHeight();
        $('#mobile_menu').toggleClass('show-menu');
        $('body').toggleClass('stop-scrolling'); 
        if($('html').hasClass('show_menu')) {
            $('html').removeClass('show_menu');
            $('.mobile_menu_new .navbar_wrap #navbar').removeClass('show');
        } else {
            $('html').addClass('show_menu');
            $('.mobile_menu_new .navbar_wrap #navbar').addClass('show');
        }
        $('.show_menu .mobile_menu_new .navbar_wrap #navbar').css('top', headerHeight);
    });
});
