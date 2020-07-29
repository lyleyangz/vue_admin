//切换搜索网址
$(".navbar-searach-select").on("click", "li", function () {
  $(".navbar-searach-select").children("li").removeClass("active");
  $(this).addClass("active");
});

//点击搜索
$(".navbar-search-content").on("click", ".navbar-btn", function () {
  var input = $(".navbar-search-input").children("input");
  console.log(input.val());
});
