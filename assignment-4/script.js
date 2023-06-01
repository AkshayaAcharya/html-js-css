const headerEl = document.querySelector(".header");
const menuBtns = document.querySelector(".menu-btns");

menuBtns.addEventListener("click", function (e) {
  e.preventDefault();
  headerEl.classList.toggle("nav-open");
});
