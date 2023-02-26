import { hamburgerBtnFunctionality } from "./modules/hamburgerBtnFunctionality.js";
import {
  navigationLinksFunctionality,
  hamburgerLogoFunctionality,
} from "./modules/navLinksFunctionality.js";
import { pageOverlayFunctionality } from "./modules/overlayFunctionality.js";
import { closePopupBtnFunctionality } from "./modules/popupFunctionality.js";

import {
  carouselFunctionality,
  prevBtnFunctionality,
  nextBtnFunctionality,
} from "./modules/carouselFunctionality.js";

import {
  windowResizeFunctionality,
  windowScrollFunctionality,
  windowLoadFunctionality,
} from "./modules/windowFunctionality.js";

// burger menu
hamburgerBtnFunctionality();

// navigation links behavior
navigationLinksFunctionality();
hamburgerLogoFunctionality();

// popup ============================
closePopupBtnFunctionality();

//overlay
pageOverlayFunctionality();

//carousel =====================================
carouselFunctionality();

// add carousel controls functionality ======
prevBtnFunctionality();
nextBtnFunctionality();

// window resize
windowResizeFunctionality();

// window scroll
windowScrollFunctionality();

// add|remove mobile-menu class for proper mobile menu links work
windowLoadFunctionality();
