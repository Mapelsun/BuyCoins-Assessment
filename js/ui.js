class UI {

  toggleMobileNav() {
    const hamburger = document.querySelector("#hamburger");
    const mobileMenu = document.querySelector("#mobileMenu");
    const navLinks = document.querySelectorAll(".mobile-nav__item");

    hamburger.addEventListener("click", () => {
      mobileMenu.classList.toggle("show-mobile");
    });

    navLinks.forEach((nav) => {
      nav.addEventListener("click", () => {
        mobileMenu.classList.remove("show-mobile");
      });
    });
  }

  updateUserDetails(data) {
    console.log(data);
    const avatarImage = document.querySelector('.details__image')
    const mobileMenuImg = document.querySelectorAll('.icon-avatar')

    avatarImage.src = data.avatarUrl;
    mobileMenuImg.forEach(nav => nav.src = data.avatarUrl)
  }
}
