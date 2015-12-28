
$(document).ready(function() {
    $(".btn-link").click(function(){
        var selectedLink = $(this);
        var linkstr = $(this).attr('data-url');
        window.location.href = 'goods/product.html';
        console.log('click on one link ',linkstr);

    });

});

$.templates