import {
  hamburgerBtn,
  navigationMenu,
  navigationMenuLinks,
} from "./globalVars.js";

import { closeMenu, removeOverlay } from "./helperFunctions.js";

const navigationLinksFunctionality = () => {
  navigationMenuLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      navigationMenuLinks.forEach((link) => {
        link.classList.remove("current-link");
      });
      const currentLink = event.target;
      currentLink.classList.add("current-link");
      if (navigationMenu.classList.contains("mobile-menu")) {
        hamburgerBtn.classList.remove("rotate");
        closeMenu();
        removeOverlay();
      }
    });
  });
};

export { navigationLinksFunctionality };
