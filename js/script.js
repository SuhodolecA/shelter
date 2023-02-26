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

// window resize(remove side animation from hamburger menu for better view on different sizes)
windowResizeFunctionality();

// window scroll (add header position fixed depend of width)
windowScrollFunctionality();

// add|remove mobile-menu class for proper mobile menu links work
windowLoadFunctionality();

// ======================== bugs
/*
2) fix bug with carousel cards height
3) fix bug after update page, mobile menu isn't showing
4) bug with popup border radius
5) bug with popup scroll bar
5) reboot menu links active state after clicking logo
*/
