/**
 *
 */
$(document).ready(function(){
    // var productTmpl = $.templates("#productTmpl");
    var productData = GetProductsData();
    var html = $("#productTmpl").render(productData);
    $("#productsDiv").html(html);

    //add click event  after load element
    $(".btn-click").click(function () {
        var productid = $(this).attr('data-url');
        var url = "ProductServlet";
        //console.log('click on product btn-click event ', dataurl);
        var productUrl = "detail.html?productid="+productid;
        window.location = productUrl;

    });

});


function GetProductsData() {
  var productData =   [
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
     }]
    ];

      return productData;
}









//var html =  productTmpl.render(productData);
// $.getJSON("GetAllProductsServlet",{index:"index"},function(jsonData){
//     var html = $("#productTmpl").render(jsonData);
//     $("#productsDiv").html(html);
//
//     //add click event  after load element
//     $(".btn-click").click(function () {
//         var productid = $(this).attr('data-url');
//         var url = "ProductServlet";
//         //console.log('click on product btn-click event ', dataurl);
//         var productUrl = "detail.html?productid="+productid;
//         window.location = productUrl;
//     });
// });
//
