// Create cross browser requestAnimationFrame method:
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (f) {
    setTimeout(f, 1000 / 60)
};

//Page functions
var browser = {
    _csrf: null,
    _width: 0,
    _height: 0,
    _header_height: 0,
    _filter_position: 0,
    _position: 0,
    _isotope: null,
    _coords: [],
    setup: function (init) {
        this._width = $(window).width();
        this._height = $(window).height();
        
        if (init === 1) {
            
            if($(window).width() <= 900) {
                var nav = $('.navbar_wrap').clone();
                $('body').prepend("<div class='mobile_menu_new'></div>");
                nav.appendTo('.mobile_menu_new');
            }

        }

        //Code that should execute on window resize goes here

    },
}