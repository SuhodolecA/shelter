import {
  hamburgerBtn,
  navigationMenu,
  navigationMenuLinks,
  hamburgerLogo,
  header,
  headerLogo,
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

const hamburgerLogoFunctionality = () => {
  hamburgerLogo.addEventListener("click", () => {
    hamburgerBtn.classList.remove("rotate");
    header.classList.remove("hide");
    closeMenu();
    removeOverlay();
    navigationMenuLinks.forEach((link) =>
      link.classList.remove("current-link")
    );
  });
};

headerLogo.addEventListener("click", () => {
  navigationMenuLinks.forEach((link) => link.classList.remove("current-link"));
});

export { navigationLinksFunctionality, hamburgerLogoFunctionality };
