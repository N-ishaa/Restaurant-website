var sideMenu = document.getElementById("sidemenu");
function openmenu() {
  sideMenu.style.right = "0";
}
function closemenu() {
  sideMenu.style.right = "-180px";
}

var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
})

// let parallex = document.getElementById('parallex');
// window.addEventListener('scroll',()=>{
//   let value = window.scrollY;
//   Text.style.marginTop = value * 2.5 + 'px';
// })
const heroSection = document.querySelector("hero-section");
const parallex = document.querySelector("parallex-image-sec");
const reserve = document.querySelector("reservation-sec");
const about = document.querySelector("event-special");
const contact = document.querySelector("new_home_web");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML = '<i class="fas fa-arrow-up"></i>';
