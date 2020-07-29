//选中nav类改变样式
$(".fixed-nav-list").on("click", "li", function() {
  $(".fixed-nav-list")
    .children()
    .removeClass("active");
  $(this).addClass("active");
});

//常用
$($(".fixed-nav-list li")[0]).on("click", function() {
  var scrollTopVal = $(".content-commonlyweb").offset().top;
  $("html ,body").animate({scrollTop: scrollTopVal});
});
//资讯
$($(".fixed-nav-list li")[1]).on("click", function() {
  var scrollTopVal = $($(".nav-title-wrapper")[0]).offset().top;
  $("html ,body").animate({scrollTop: scrollTopVal});
});
//行业
$($(".fixed-nav-list li")[2]).on("click", function() {
  var scrollTopVal = $($(".nav-title-wrapper")[1]).offset().top;
  $("html ,body").animate({scrollTop: scrollTopVal});
});
//监管
$($(".fixed-nav-list li")[3]).on("click", function() {
  var scrollTopVal = $($(".nav-title-wrapper")[2]).offset().top;
  $("html ,body").animate({scrollTop: scrollTopVal});
});
//跟单
$($(".fixed-nav-list li")[4]).on("click", function() {
  var scrollTopVal = $($(".nav-title-wrapper")[3]).offset().top;
  $("html ,body").animate({scrollTop: scrollTopVal});
});
//数据
$($(".fixed-nav-list li")[5]).on("click", function() {
  var scrollTopVal = $($(".nav-title-wrapper")[4]).offset().top;
  $("html ,body").animate({scrollTop: scrollTopVal});
});
//平台
$($(".fixed-nav-list li")[6]).on("click", function() {
  var scrollTopVal = $($(".nav-title-wrapper")[5]).offset().top;
  $("html ,body").animate({scrollTop: scrollTopVal});
});
//推荐资讯
$($(".fixed-nav-list li")[7]).on("click", function() {
  var scrollTopVal = $(".content-recommond").offset().top;
  $("html ,body").animate({scrollTop: scrollTopVal});
});
//返回顶部
$(".to-top").on("click", function() {
  $("html ,body").animate({scrollTop: 0});
});

//监听滚动
$(window).scroll(function() {
  var oTop = document.body.scrollTop == 0 ? document.documentElement.scrollTop : document.body.scrollTop;
  if (oTop >= 210) {
    $(".fixed-nav").css("top", oTop - 210 + 300 + "px");
  }
});
