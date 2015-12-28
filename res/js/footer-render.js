
$(document).ready(function() {
    $(".nav li").click(function(){
        console.log("clic first child...");
        var selectedLink = $(this);
        $(".nav li ").each(function(){
            $(this).removeClass("active");
            selectedLink.addClass("active");
        });
    });

});