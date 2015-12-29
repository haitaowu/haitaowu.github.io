/**
 *
 */
$(document).ready(function(){
	var productTmpl = $.templates("#productTmpl");


	var productData = GetProductsData();
	var html = $("#productTmpl").render(productData);
	$("#productsDiv").html(html);

	$(".btn-click").click(function () {
			var productid = $(this).attr('data-url');
			var url = "ProductServlet";
			var productUrl = "detail.html?productid="+productid;
			window.location = productUrl;
	});







});

function GetProductsData() {
	var productData =  [
				 [ {
	            "name":"当归",
	            "price":"33",
	            "img":"res/img/danggui.jpg",
	            "productid":"1",
	           "productaffect":"活血补血",
	            "productcode":"1045473"
	        },
	        {
	            "name":"黄芪片",
	            "price":"15",
	            "img":"res/img/huanshi.jpg",
	            "productid":"2",
	          "productaffect":"补气",
	          "productcode":"1045474"
	        },
					{
							"name":"党参",
							"price":"25",
							"img":"res/img/dangshen.jpg",
							"productid":"3",
						"productaffect":"补中益气",
						"productcode":"1045475"
					},
					{
							"name":"三七",
							"price":"350",
							"img":"res/img/sanqi.jpg",
							"productid":"4",
						"productaffect":"止血补血、活血化瘀",
						"productcode":"1045476"
					},
					{
							"name":"决明子",
							"price":"5",
							"img":"res/img/juemingzi.jpg",
							"productid":"5",
						"productaffect":"祛风清热，解毒利湿",
						"productcode":"1045477"
					}],
					[ {
							"name":"甘草",
							"price":"9",
							"img":"res/img/gancao.jpg",
							"productid":"6",
						"productaffect":"用于心气虚，心悸怔忡，脉结代",
						"productcode":"1045478"
					},
					{
							"name":"玛卡",
							"price":"480",
							"img":"res/img/chaihu.jpg",
							"productid":"7",
						"productaffect":"用于感冒发热、月经不调",
						"productcode":"1045479"
					},
					{
							"name":"铁皮石斛",
							"price":"1300",
							"img":"res/img/tiepishihu.jpg",
							"productid":"8",
						"productaffect":"增强体质、滋阴养血",
						"productcode":"1045413"
					},
					{
							"name":"海马",
							"price":"5000",
							"img":"res/img/haima.jpg",
							"productid":"9",
						"productaffect":"消痛、强心、散结、消肿",
						"productcode":"1045423"
					},
					{
							"name":"阿胶",
							"price":"700",
							"img":"res/img/ejiao.jpg",
							"productid":"10",
						"productaffect":"补血止血",
						"productcode":"1045433"
					}],
					[ {
							"name":"灵芝",
							"price":"1500",
							"img":"res/img/lingzhi.jpg",
							"productid":"11",
						"productaffect":"增强机体免疫力",
						"productcode":"1045443"
					},
					{
							"name":"高丽参",
							"price":"700",
							"img":"res/img/gaolishen.jpg",
							"productid":"12",
						"productaffect":"补元气、滋补强壮、生津止渴、宁神益智",
						"productcode":"1045453"
					},
					{
							"name":"红景天",
							"price":"19",
							"img":"res/img/hongjingtian.jpg",
							"productid":"13",
						"productaffect":"益气活血，通脉平喘",
						"productcode":"1045463"
					},
					{
							"name":"海燕",
							"price":"800",
							"img":"res/img/haiyan.jpg",
							"productid":"14",
						"productaffect":"补肾,祛风湿,制酸,止痛之功效",
						"productcode":"1045483"
					},
					{
							"name":"黑枸杞",
							"price":"150",
							"img":"res/img/heigouqi.jpg",
							"productid":"15",
						"productaffect":"滋补肝肾、益精明目",
						"productcode":"1045493"
					}]
			];

			return productData;
}





// $.getJSON("GetAllProductsServlet",{index:"all"},function(jsonData){
// 		productData = jsonData;
// 		var html = $("#productTmpl").render(productData);
// 		$("#productsDiv").html(html);
//
//
// 		// product div btn-click
// 		$(".btn-click").click(function () {
// 				var productid = $(this).attr('data-url');
// 				var url = "ProductServlet";
// 				var productUrl = "detail.html?productid="+productid;
// 				window.location = productUrl;
// 		});
// });
