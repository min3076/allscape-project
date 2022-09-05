$(function(){
	tab();
});

function tab(){
    $(".projectwrap .tab-nav_link").on("click", function (e) {
        var $this = $(this);
        e.preventDefault();
        var selector = $this.attr("href");
        $(".projectwrap .tab-nav_link").removeClass("active");
        $(".projectwrap .tab-body").hide();
        $this.addClass("active");
        $(selector).show();
    });	
}
