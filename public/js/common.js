const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("menu-close");
const ul = document.querySelector("nav .navigation ul");

menuBtn.addEventListener("click", function () {
  ul.classList.add("active");
});
closeBtn.addEventListener("click", function () {
  ul.classList.remove("active");
});
