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
  var productsArray =   [
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
          }],
      [ {
          "name":"灵芝",
          "price":"10",
          "img":"res/img/lingzhi.jpg",
          "productid":"11",
          "productlicense":"定西食药监械生产备20150048号",
          "productcode":"1045443"
      },
          {
              "name":"玛卡",
              "price":"20",
              "img":"res/img/maka.jpg",
              "productid":"12",
              "productlicense":"定西食药监械生产备20150048号",
              "productcode":"1045453"
          },
          {
              "name":"铁皮石",
              "price":"30",
              "img":"res/img/tiepishihu.jpg",
              "productid":"13",
              "productlicense":"定西食药监械生产备20150048号",
              "productcode":"1045463"
          },
          {
              "name":"当归",
              "price":"40",
              "img":"res/img/danggui.jpg",
              "productid":"14",
              "productlicense":"定西食药监械生产备20150048号",
              "productcode":"1045483"
          },
          {
              "name":"阿胶",
              "price":"50",
              "img":"res/img/ejiao.jpg",
              "productid":"15",
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
