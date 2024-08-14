const burger = document.querySelector(".burger i");
const nav = document.querySelector(".nav");
console.log(nav);

function showHamburger() {
  burger.classList.toggle("fa-times");
  nav.classList.toggle("nav-active");
}
