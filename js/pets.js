import {
  setWindowRange,
  navigationMenu,
  windowRange,
  petsData,
  setPetsData,
  ourPetsSection,
} from "./modules/globalVars.js";
import { calculateRange } from "./modules/helperFunctions.js";
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
import { paginationFunctionality } from "./modules/paginationFunctionality.js";
// paginationFunctionality,
// getPaginationCardsAmount,
// generatePaginationListOfCards,

// burger menu
hamburgerBtnFunctionality();

// navigation links behavior
navigationLinksFunctionality();
hamburgerLogoFunctionality();

// popup ============================
closePopupBtnFunctionality();

// overlay
pageOverlayFunctionality();

// pagination
// paginationFunctionality();

//  window functionality
windowLoadFunctionality();
windowResizeFunctionality();
windowScrollFunctionality();
