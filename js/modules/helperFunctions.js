import { navigationMenu, pageOverlay, body } from "./globalVars.js";

import { carouselTrack } from "./mainPageVars.js";

const helper = {
  showMenu() {
    navigationMenu.classList.remove("slide-out");
    navigationMenu.classList.add("slide-in");
  },
  closeMenu() {
    navigationMenu.classList.remove("slide-in");
    navigationMenu.classList.add("slide-out");
  },
  addOverlay() {
    pageOverlay.classList.remove("hide");
    body.classList.add("stop-scroll");
  },
  removeOverlay() {
    pageOverlay.classList.add("hide");
    body.classList.remove("stop-scroll");
  },
  removeSlideInOutAnimation() {
    navigationMenu.classList.remove("slide-in");
    navigationMenu.classList.remove("slide-out");
  },
  clearCarouselTrackTransition() {
    carouselTrack.classList.remove("transition-right-320");
    carouselTrack.classList.remove("transition-right-768");
    carouselTrack.classList.remove("transition-right-1280");
    carouselTrack.classList.remove("transition-left-320");
    carouselTrack.classList.remove("transition-left-768");
    carouselTrack.classList.remove("transition-left-1280");
  },

  calculateRange(windowWidth) {
    let range = 1280;
    if (windowWidth < 768) {
      range = 320;
    } else if (windowWidth > 767 && windowWidth < 1280) {
      range = 768;
    }
    return range;
  },

  getRandomId(maxVal) {
    return Math.floor(Math.random() * maxVal);
  },
  cardsInsideItem() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      return 1;
    } else if (screenWidth > 767 && screenWidth < 1280) {
      return 2;
    }
    return 3;
  },
};

export const showMenu = helper.showMenu;
export const closeMenu = helper.closeMenu;
export const addOverlay = helper.addOverlay;
export const removeOverlay = helper.removeOverlay;
export const removeSlideInOutAnimation = helper.removeSlideInOutAnimation;
export const clearCarouselTrackTransition = helper.clearCarouselTrackTransition;
export const calculateRange = helper.calculateRange;
export const getRandomId = helper.getRandomId;
export const cardsInsideItem = helper.cardsInsideItem;
