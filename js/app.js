let hamburger = document.querySelector("#hamburger");
let menu = document.querySelector(".menu");
hamburger.onclick = () => {
  menu.classList.toggle("i-r");
  hamburger.classList.toggle("fa-x");
  hamburger.classList.toggle("fa-bars");
};
