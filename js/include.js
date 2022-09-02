


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
