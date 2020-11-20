const gitHub = new GitHub();
const ui = new UI();

const documentReady = () => {

  ui.toggleMobileNav();

  gitHub
    .getUserDetails()
    .then((response) => ui.updateUserDetails(response.data.user))
    .catch((error) => console.log(error));
};

const eventListeners = () => {
  document.addEventListener("DOMContentLoaded", documentReady);
};

eventListeners();
