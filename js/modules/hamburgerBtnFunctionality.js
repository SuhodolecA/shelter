import { hamburgerBtn } from "./globalVars.js";
import {
  showMenu,
  closeMenu,
  addOverlay,
  removeOverlay,
} from "./helperFunctions.js";

const hamburgerBtnFunctionality = () => {
  hamburgerBtn.addEventListener("click", () => {
    if (hamburgerBtn.classList.contains("rotate")) {
      hamburgerBtn.classList.remove("rotate");
      hamburgerBtn.setAttribute("aria-expanded", "false");
      removeOverlay();
      closeMenu();
    } else {
      hamburgerBtn.classList.add("rotate");
      addOverlay();
      showMenu();
      hamburgerBtn.setAttribute("aria-expanded", "true");
    }
  });
};

export { hamburgerBtnFunctionality };
