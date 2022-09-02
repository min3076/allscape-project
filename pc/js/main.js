
$(function(){
    visual();
})

function visual(){
 //visual
    var visualSlick = $('#visual .slide_list'),
        visualDots = $('#visual .dots');

    visualSlick.slick({
        autoplay : true,
        speed : 300,
        autoplay : true,
        autoplaySpeed:7000,
        dots:true,
        appendDots : visualDots,
        prevArrow : $('#visual .prev'),
        nextArrow : $('#visual .next'),
        pauseOnDotsHover : true,
        swipe:true,
        draggable:true,
        arrows:true,
        fade:true,
       
    });
    $('#visual .pause').on('click', function(event) {
        $('#visual .play').show().focus();
        $('#visual .pause').hide();
        visualSlick.slick('slickPause').slick('slickSetOption', 'pauseOnDotsHover', false);
    });
    $('#visual .play').on('click', function(event) {
        $('#visual .pause').show().focus();
        $('#visual .play').hide();
        visualSlick.slick('slickPlay').slick('slickSetOption', 'pauseOnDotsHover', true);
    });
    $(window).on('resize orientationchange', function() {
        visualSlick.slick('resize');
    });
}