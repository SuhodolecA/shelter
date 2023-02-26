import {
  hamburgerBtn,
  navigationMenu,
  pageOverlay,
  header,
  popup,
  popupCloseBtn,
} from "./globalVars.js";

import { closeMenu, removeOverlay } from "./helperFunctions.js";
import { closePopup } from "./popupFunctionality.js";

//overlay
const pageOverlayFunctionality = () => {
  pageOverlay.addEventListener("click", () => {
    if (navigationMenu.classList.contains("mobile-menu")) {
      if (hamburgerBtn.classList.contains("rotate")) {
        hamburgerBtn.classList.remove("rotate");
        header.classList.remove("hide");
        closeMenu();
        removeOverlay();
      } else {
        closePopup();
      }
    } else {
      removeOverlay();
      header.classList.remove("hide");
      popup.classList.add("hide");
    }
  });

  // hovering overlay trigger popup close btn styles
  pageOverlay.addEventListener("mouseover", () => {
    popupCloseBtn.classList.add("hover-close-btn");
  });

  pageOverlay.addEventListener("mouseout", () => {
    popupCloseBtn.classList.remove("hover-close-btn");
  });
};

export { pageOverlayFunctionality };
