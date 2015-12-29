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
            "name":"高丽参",
            "price":"10",
            "img":"res/img/gaolishen.jpg",
            "productid":"1",
           "productlicense":"定西食药监械生产备20150048号",
            "productcode":"1045473"
        },
        {
            "name":"海马",
            "price":"20",
            "img":"res/img/haima.jpg",
            "productid":"2",
          "productlicense":"定西食药监械生产备20150048号",
          "productcode":"1045474"
        },
        {
            "name":"海燕",
            "price":"30",
            "img":"res/img/haiyan.jpg",
            "productid":"3",
          "productlicense":"定西食药监械生产备20150048号",
          "productcode":"1045475"
        },
        {
            "name":"黑枸杞",
            "price":"40",
            "img":"res/img/heigouqi.jpg",
            "productid":"4",
          "productlicense":"定西食药监械生产备20150048号",
          "productcode":"1045476"
        },
        {
            "name":"红景天",
            "price":"50",
            "img":"res/img/hongjingtian.jpg",
            "productid":"5",
          "productlicense":"定西食药监械生产备20150048号",
          "productcode":"1045477"
        }],
        [ {
            "name":"灵芝",
            "price":"10",
            "img":"res/img/lingzhi.jpg",
            "productid":"6",
          "productlicense":"定西食药监械生产备20150048号",
          "productcode":"1045478"
        },
        {
            "name":"玛卡",
            "price":"20",
            "img":"res/img/maka.jpg",
            "productid":"7",
          "productlicense":"定西食药监械生产备20150048号",
          "productcode":"1045479"
        },
        {
            "name":"铁皮石",
            "price":"30",
            "img":"res/img/tiepishihu.jpg",
            "productid":"8",
          "productlicense":"定西食药监械生产备20150048号",
          "productcode":"1045413"
        },
        {
            "name":"当归",
            "price":"40",
            "img":"res/img/danggui.jpg",
            "productid":"9",
          "productlicense":"定西食药监械生产备20150048号",
          "productcode":"1045423"
        },
        {
            "name":"阿胶",
            "price":"50",
            "img":"res/img/ejiao.jpg",
            "productid":"10",
          "productlicense":"定西食药监械生产备20150048号",
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
