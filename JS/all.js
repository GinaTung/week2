$(".hamburger-btn").click(function () {
  $(".hamburger-btn").toggleClass("active");
  $(".hamburger-icon").toggleClass("close");
  $(".closure").toggleClass("close");
  $(".hamburger-list").toggleClass("close");
});
// $('span').addClass('orange');

$(".sidebar-auto-menu").click(function () {
    $(".menu-link").slideDown();
  });