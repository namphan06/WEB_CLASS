document.querySelector(".menu a").addEventListener("click", function (event) {
  event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
  document.querySelector(".overlay").style.display = "block";
  document.querySelector(".sidebar").style.left = "0";
});

document.querySelector(".overlay").addEventListener("click", function () {
  this.style.display = "none";
  document.querySelector(".sidebar").style.left = "-25%";
});
