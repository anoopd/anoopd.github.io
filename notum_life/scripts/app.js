jQuery(function ($) {
"use strict";
// TOP Menu Sticky
$(window).on('scroll', function () {

    var scroll = $(window).scrollTop();
    if (scroll < 400) {
    $("#top-header").removeClass("sticky");
    //$('#back-top').fadeIn(500);
    } else {
    $("#top-header").addClass("sticky");
    //$('#back-top').fadeIn(500);
    }
});

});


new WOW().init();




