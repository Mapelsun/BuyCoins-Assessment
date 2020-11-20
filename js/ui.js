class UI {
  toggleMobileNav() {
    const hamburger = document.querySelector("#hamburger"),
      mobileMenu = document.querySelector("#mobileMenu"),
      navLinks = document.querySelectorAll(".mobile-nav__item");

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
    const avatarImage = document.querySelector(".details__image"),
      mobileMenuImg = document.querySelectorAll(".icon-avatar"),
      userName = document.querySelector(".details__name"),
      repositoriesCount = document.querySelector(".main-nav__item .counter"),
      followersCount = document.querySelector(
        ".details__stats a:nth-of-type(1) span:nth-of-type(1)"
      ),
      followingsCount = document.querySelector(
        ".details__stats a:nth-of-type(2) span:nth-of-type(1)"
      ),
      starsCount = document.querySelector(
        ".details__stats a:nth-of-type(3) span:nth-of-type(1)"
      ),
      company = document.querySelector(
        ".details__contact a:nth-of-type(1) span"
      ),
      location = document.querySelector(
        ".details__contact a:nth-of-type(2) span"
      ),
      website = document.querySelector(
        ".details__contact a:nth-of-type(3) span"
      ),
      websiteUrl = document.querySelector(".details__contact a:nth-of-type(3)"),
      twitter = document.querySelector(
        ".details__contact a:nth-of-type(4) span"
      );

    // updating avatar image
    avatarImage.src = data.avatarUrl;
    mobileMenuImg.forEach((nav) => (nav.src = data.avatarUrl));

    // updating user name
    userName.textContent = data.login;

    // updating stats counts
    followersCount.textContent = data.followers.totalCount;
    followingsCount.textContent = data.following.totalCount;
    starsCount.textContent = data.starredRepositories.totalCount;

    // updating contact details
    company.textContent = data.company;
    location.textContent = data.location;
    website.textContent = data.websiteUrl;
    websiteUrl.href = `https://${data.websiteUrl}`;
    twitter.textContent = `@${data.twitterUsername}`;

    // updating total repositories count
    repositoriesCount.textContent = data.repositories.totalCount;
  }

  printMessage() {
    console.log(data);
  }
}
