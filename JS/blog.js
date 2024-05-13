// .border-bottom

$(".menu-link a").click(function () {
    $(".menu-link a").removeClass('border-bottom'); // 移除其他链接上的 border-bottom 类
    $(this).addClass('border-bottom'); // 给被点击的链接添加 border-bottom 类
  });