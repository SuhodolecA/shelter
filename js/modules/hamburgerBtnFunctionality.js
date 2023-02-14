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
      removeOverlay();
      closeMenu();
    } else {
      hamburgerBtn.classList.add("rotate");
      addOverlay();
      showMenu();
    }
  });
};

export { hamburgerBtnFunctionality };
