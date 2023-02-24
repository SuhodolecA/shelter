import {
  navigationMenu,
  pageOverlay,
  body,
  header,
  ourPetsSection,
} from "./globalVars.js";

import { carouselTrack } from "./mainPageVars.js";
import { openPopup } from "./popupFunctionality.js";

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
    // console.log("pageOverlay", pageOverlay);
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
    if (ourPetsSection) {
      if (screenWidth < 768) {
        return 3;
      } else if (screenWidth > 767 && screenWidth < 1280) {
        return 6;
      } else {
        return 8;
      }
      // console.log("ourPetsSection");
    } else {
      if (screenWidth < 768) {
        return 1;
      } else if (screenWidth > 767 && screenWidth < 1280) {
        return 2;
      } else {
        return 3;
      }
    }
  },

  fixingHeader(innerWidth, scrollY) {
    if (ourPetsSection) {
      // console.log("scrollY", scrollY);
      if (scrollY >= 117) {
        header.classList.add("fixed");
      } else {
        header.classList.remove("fixed");
      }
    } else {
      if (
        (innerWidth >= 320 && innerWidth < 768 && scrollY >= 719) ||
        (innerWidth >= 768 && scrollY >= 1140) ||
        (innerWidth >= 1280 && scrollY >= 890)
      ) {
        header.classList.add("fixed");
      } else {
        header.classList.remove("fixed");
      }
    }
  },

  shuffle(dataArr) {
    const copyArr = dataArr.slice();
    for (let i = copyArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copyArr[i], copyArr[j]] = [copyArr[j], copyArr[i]];
    }

    return copyArr;
  },

  divideInChunks(chunks, dataArr) {
    const resultArr = [];
    for (let i = 0; i < dataArr.length; i += chunks) {
      const chunk = dataArr.slice(i, i + chunks);
      resultArr.push(chunk);
    }
    return resultArr;
  },
  createCard(petObj) {
    // == create card img ==
    const cardImg = document.createElement("img");
    cardImg.src = petObj.img; //imgPath
    cardImg.alt = petObj.alt; // imgAlt
    cardImg.classList.add("pet-card__img");

    // == create card content ==
    const cardContentContainer = document.createElement("div");
    cardContentContainer.classList.add("pet-card__content");

    const cardContentTitle = document.createElement("h4");
    cardContentTitle.classList.add("pet-card__content-title");
    cardContentTitle.textContent = petObj.name; // cardTitle

    const cardContentButton = document.createElement("button");
    cardContentButton.classList.add("pet-card__content-btn");
    cardContentButton.classList.add("button-secondary");
    cardContentButton.type = "button";
    cardContentButton.textContent = "Learn more";

    cardContentContainer.append(cardContentTitle);
    cardContentContainer.append(cardContentButton);

    // == create card container ==
    const card = document.createElement("div");
    // card.classList.add("our-friends-carousel__track-card");
    card.classList.add("pet-card");
    card.id = petObj.petId;

    card.append(cardImg);
    card.append(cardContentContainer);
    card.addEventListener("click", openPopup);
    return card;
  },
  createPetItem() {
    const cardItem = document.createElement("li");
    cardItem.classList.add("pets-cards__item");
    return cardItem;
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
export const fixingHeader = helper.fixingHeader;
export const shuffle = helper.shuffle;
export const divideInChunks = helper.divideInChunks;
export const createCard = helper.createCard;
export const createPetItem = helper.createPetItem;
