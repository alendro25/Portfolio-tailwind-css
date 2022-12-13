// Navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
// Navbar Menu
const navMenu = document.querySelector("nav");
// Layer
const layer = document.querySelector("#layer");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
  layer.classList.toggle("hidden");
});

// Klik diluar Hamburger
layer.addEventListener("click", function () {
  hamburger.classList.remove("hamburger-active");
  navMenu.classList.add("hidden");
  layer.classList.add("hidden");
});
