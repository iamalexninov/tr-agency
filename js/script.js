const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const header = document.querySelector("[data-header]");

const navElementArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = (element) => {
  element.forEach((elem) => elem.addEventListener("click", onClick));
};

function onClick(e) {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

navToggleEvent(navElementArr);
navToggleEvent(navLinks);

window.addEventListener("scroll", (e) => {
  if (window.scrollY >= 200) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
