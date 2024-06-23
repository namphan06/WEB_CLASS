var list_img = document.querySelector(".bx1");
var imgs = document.querySelectorAll(".bx1 img");
var length = imgs.length;
var current = 0;
setInterval(() => {
  current = (current + 1) % length;
  var width = imgs[0].offsetWidth;
  list_img.style.transform = `translateX(${width * -1 * current}px)`;
}, 4000);

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $(".goto").fadeIn();
    } else {
      $(".goto").fadeOut();
    }
  });

  $(".goto").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 5000);
  });
});
