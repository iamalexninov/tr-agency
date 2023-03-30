const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const header = document.querySelector("[data-header]");
const searchBtn = document.querySelector("[data-nav-search-btn]");

const navElementArr = [navOpenBtn, navCloseBtn];

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
    navOpenBtn.style.color = "black";
    searchBtn.style.color = "black";
  } else {
    header.classList.remove("active");
    navOpenBtn.style.color = "white";
    searchBtn.style.color = "white";
  }
});
