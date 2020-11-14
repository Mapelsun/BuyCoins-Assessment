// Mobile menu toggle
const hamburger = document.querySelector("#hamburger");
const mobileMenu = document.querySelector("#mobileMenu");
const navLinks = document.querySelectorAll(".nav__item");

const eventListeners = () => {
  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("show-mobile");
  });

  navLinks.forEach((nav) => {
    nav.addEventListener("click", () => {
      mobileMenu.classList.remove("show-mobile");
    });
  });
};

eventListeners();
