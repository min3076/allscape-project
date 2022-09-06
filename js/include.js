


$(function(){
    $("#header").load("./include/header.html"); 
    });
$(function(){
    $("#footer").load("./include/footer.html"); 
    });
$(function(){
    $("#lnb").load("./include/lnb.html"); 
    });

$(function(){
    $("#pagenate").load("./include/pagenate.html"); 
    });

$(function(){
    $("#calendar").load("./include/calendar.html"); 
    });
$(function(){
    $("#calendar_txt").load("./include/calendar_txt.html"); 
    });
 $(function(){
    $("#calendar_commute").load("./include/calendar_commute.html"); 
    });


$(document).ready( function() 
{
    var filter_Offset = $('.container').offset();

    $(window).scroll(function() 
    {
        if ( $(document).scrollTop() > filter_Offset.top ) 
        {
            $('.container').addClass('container-fixed');
        } 
        else 
        {
            $('.container').removeClass('container-fixed');
        }
    });
});
