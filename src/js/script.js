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

// DarkMode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark"; //Men-Set dark ke local storage agar ketika halaman di refresh tetap pd kondisi terakhir
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light"; //Men-Set light ke local storage agar ketika halaman di refresh tetap pd kondisi terakhir
  }
});

// Pindahkan DarkMode toggle sesuai mode nya, kalau lagi di light ya di kiri kalau lagi di dark ya di kanan
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
