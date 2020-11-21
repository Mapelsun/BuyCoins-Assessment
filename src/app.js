import GitHub from './github'
import UI from './ui'

const gitHub = new GitHub();
const ui = new UI();

const documentReady = () => {
  ui.toggleMobileNav();

  gitHub
    .getUserDetails()
    .then((response) => ui.updateUserDetails(response.data.user))
    .catch((error) => ui.printMessage(error));
};

const eventListeners = () => {
  document.addEventListener("DOMContentLoaded", documentReady);
};

eventListeners();
window.onscroll = ui.stickyProfile;
