
$(function(){
	tab();
	tab2();
});

function tab(){
    $("#tab1 .tab-nav_link").on("click", function (e) {
        var $this = $(this);
        e.preventDefault();
        var selector = $this.attr("href");
        $("#tab1 .tab-nav_link").removeClass("active");
        $("#tab1 .tab-body").hide();
        $this.addClass("active");
        $(selector).show();
    });	
}
function tab2(){
    $("#tab2 .tab-nav_link").on("click", function (e) {
        var $this = $(this);
        e.preventDefault();
        var selector = $this.attr("href");
        $("#tab2 .tab-nav_link").removeClass("active");
        $("#tab2 .tab-body").hide();
        $this.addClass("active");
        $(selector).show();
    });	
}