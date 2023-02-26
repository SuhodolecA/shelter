import { hamburgerBtnFunctionality } from "./modules/hamburgerBtnFunctionality.js";
import {
  navigationLinksFunctionality,
  hamburgerLogoFunctionality,
} from "./modules/navLinksFunctionality.js";
import { pageOverlayFunctionality } from "./modules/overlayFunctionality.js";
import { closePopupBtnFunctionality } from "./modules/popupFunctionality.js";
import {
  windowLoadFunctionality,
  windowResizeFunctionality,
  windowScrollFunctionality,
} from "./modules/windowFunctionality.js";

// burger menu
hamburgerBtnFunctionality();

// navigation links behavior
navigationLinksFunctionality();
hamburgerLogoFunctionality();

// popup ============================
closePopupBtnFunctionality();

// overlay
pageOverlayFunctionality();

//  window functionality
windowLoadFunctionality();
windowResizeFunctionality();
windowScrollFunctionality();
