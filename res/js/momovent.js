$(document).ready(function() {
	$(".nav li").click(function() {
		var selectedLink = $(this);
		// navigation bar selected
		// $(".nav li ").each(function(){
		var idx = $(this).children("a").attr('dasta-idx');
		//console.log("click href = ", idx);

		var url = "ManDispatch?idx="+idx;
		switch (idx) {
			case "1": {
				url = "products.html";
				break;
			}
			case "2": {
				url = "aboutus.html";
				break;
			}
			case "3": {
				url = "contactus.html";
				break;
			}
			default:{
				url = "index.html";
				break;
			}

		}
		location.href = url;
		// $.get(url, function(data, status) {
		// 	location.href = data;
		// });
		// $(this).removeClass("active");
		// selectedLink.addClass("active");
		// });
	});



});
