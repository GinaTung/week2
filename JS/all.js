$(".hamburger-btn").click(function () {
  $(".hamburger-btn").toggleClass("active");
  $(".hamburger-icon").toggleClass("close");
  $(".closure").toggleClass("close");
  $(".hamburger-list").toggleClass("close");
});


// $(".sidebar-auto-menu").click(function () {
//     $(".menu-link").slideDown(3000);
//   });