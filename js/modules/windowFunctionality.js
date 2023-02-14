import {
  navigationMenu,
  hamburgerBtn,
  header,
  windowRange,
  setWindowRange,
  setCurrentCardsIds,
  setPetsData,
} from "./globalVars.js";

import {
  removeSlideInOutAnimation,
  removeOverlay,
  calculateRange,
  cardsInsideItem,
} from "./helperFunctions.js";

import {
  generateSetOfCardsIds,
  createCarousel,
} from "./carouselFunctionality.js";

const windowResizeFunctionality = () => {
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      removeSlideInOutAnimation();
      navigationMenu.classList.remove("mobile-menu");
      hamburgerBtn.classList.remove("rotate");
      header.classList.remove("hide");
      removeOverlay(); // am I need this function here?!!!!!! it breaks overlay in popup active state
      // closePopup();
    } else {
      navigationMenu.classList.add("mobile-menu");
    }
    // update carousel items only if innerWidth outside rage(prevent card flickering)
    if (calculateRange(window.innerWidth) !== windowRange) {
      setWindowRange(calculateRange(window.innerWidth));
      const itemsAmount = cardsInsideItem();
      setCurrentCardsIds(generateSetOfCardsIds(itemsAmount));
      createCarousel();
    }
  });
};

const windowScrollFunctionality = () => {
  window.addEventListener("scroll", () => {
    if (
      (window.innerWidth >= 320 &&
        window.innerWidth < 768 &&
        window.scrollY >= 719) ||
      (window.innerWidth >= 768 && window.scrollY >= 1140) ||
      (window.innerWidth >= 1280 && window.scrollY >= 890)
    ) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  });
};

const windowLoadFunctionality = () => {
  window.addEventListener("load", () => {
    setWindowRange(calculateRange(window.innerWidth));
    if (window.innerWidth >= 768) {
      navigationMenu.classList.remove("mobile-menu");
    } else {
      navigationMenu.classList.add("mobile-menu");
    }
    fetch("../../assets/data/pets.json")
      .then((response) => {
        return response.json();
      })
      .then((response) => setPetsData(response))
      .then(() => {
        const itemsAmount = cardsInsideItem();
        setCurrentCardsIds(generateSetOfCardsIds(itemsAmount));
        createCarousel();
      });
  });
};

export {
  windowResizeFunctionality,
  windowScrollFunctionality,
  windowLoadFunctionality,
};
