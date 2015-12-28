/**
 *
 */


$(document).ready(function() {
    $.urlParam = function(name){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        return results[1] || 0;
    }
    var productid = $.urlParam('productid');
    // $.get("GetOneProduct",{productid:$.urlParam('productid')},function(jsonData){
    //     var renderTmpl = $("#detailTmpl").render(jsonData);
    //     $("#productdetail").html(renderTmpl);
    // });

    console.log("productid="+ $.urlParam('productid'));

    var selectedProduct = getProductById(productid);
    if (selectedProduct != null ) {
      var renderTmpl = $("#detailTmpl").render(selectedProduct);
      $("#productdetail").html(renderTmpl);
    }
});



function getProductById(productid) {
  var productsArray =  [
         [ {
              "productid":"1",
              "name":"高丽参",
              "price":"10",
              "img":"res/img/gaolishen.jpg",
             "productlicense":"定西食药监械生产备20150048号",
              "productcode":"1045473"
          },
          {
              "productid":"2",
              "name":"海马",
              "price":"20",
              "img":"res/img/haima.jpg",
            "productlicense":"定西食药监械生产备20150048号",
            "productcode":"1045474"
          },
          {
              "productid":"3",
              "name":"海燕",
              "price":"30",
              "img":"res/img/haiyan.jpg",
            "productlicense":"定西食药监械生产备20150048号",
            "productcode":"1045475"
          },
          {
              "productid":"4",
              "name":"黑枸杞",
              "price":"40",
              "img":"res/img/heigouqi.jpg",
            "productlicense":"定西食药监械生产备20150048号",
            "productcode":"1045476"
          },
          {
              "productid":"5",
              "name":"红景天",
              "price":"50",
              "img":"res/img/hongjingtian.jpg",
            "productlicense":"定西食药监械生产备20150048号",
            "productcode":"1045477"
          }],
          [ {
              "productid":"6",
              "name":"sfdsf灵芝",
              "price":"10",
              "img":"res/img/lingzhi.jpg",
            "productlicense":"定西食药监械生产备20150048号",
            "productcode":"1045478"
          },
          {
              "productid":"7",
              "name":"玛卡",
              "price":"20",
              "img":"res/img/maka.jpg",
            "productlicense":"定西食药监械生产备20150048号",
            "productcode":"1045479"
          },
          {
              "productid":"8",
              "name":"铁皮石",
              "price":"30",
              "img":"res/img/tiepishihu.jpg",
            "productlicense":"定西食药监械生产备20150048号",
            "productcode":"1045413"
          },
          {
              "productid":"9",
              "name":"当归adfg",
              "price":"40",
              "img":"res/img/danggui.jpg",
            "productlicense":"定西食药监械生产备20150048号",
            "productcode":"1045423"
          },
          {
              "productid":"10",
              "name":"阿胶df",
              "price":"50",
              "img":"res/img/ejiao.jpg",
            "productlicense":"定西食药监械生产备20150048号",
            "productcode":"1045433"
          }],
          [ {
              "productid":"11",
              "name":"f灵芝",
              "price":"10",
              "img":"res/img/lingzhi.jpg",
            "productlicense":"定西食药监械生产备20150048号",
            "productcode":"1045443"
          },
          {
              "productid":"12",
              "name":"玛卡333",
              "price":"20",
              "img":"res/img/maka.jpg",
            "productlicense":"定西食药监械生产备20150048号",
            "productcode":"1045453"
          },
          {
              "productid":"13",
              "name":"铁皮石3333",
              "price":"30",
              "img":"res/img/tiepishihu.jpg",
            "productlicense":"定西食药监械生产备20150048号",
            "productcode":"1045463"
          },
          {
              "productid":"14",
              "name":"当归333",
              "price":"40",
              "img":"res/img/danggui.jpg",
            "productlicense":"定西食药监械生产备20150048号",
            "productcode":"1045483"
          },
          {
              "productid":"15",
              "name":"阿胶333",
              "price":"50",
              "img":"res/img/ejiao.jpg",
            "productlicense":"定西食药监械生产备20150048号",
            "productcode":"1045493"
          }]
      ];
      var selectedProduct ;
      for (var i = 0; i < productsArray.length; i++) {
        var subArray = productsArray[i];
        for (var j = 0; j < subArray.length; j++) {
          var productDict = subArray[j];
          if (productid === productDict["productid"]) {
            console.log("product= "+productDict["name"]);
            selectedProduct = productDict;
          }
        }
      }

      return selectedProduct;

}