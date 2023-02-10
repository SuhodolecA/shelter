// variables
const hamburgerBtn = document.querySelector("#hamburger-btn");
const navigationMenu = document.querySelector("#navigationLinks");
const navigationMenuLinks = document.querySelectorAll(".nav-link");
const pageOverlay = document.querySelector("#page-overlay");
const header = document.querySelector("#header-section");
const body = document.querySelector("body");
// const carouselCardsList = document.querySelectorAll(
//   ".our-friends-carousel__track-card"
// );
const carouselTrack = document.querySelector(".our-friends-carousel__track");
const carouselItems = document.querySelectorAll(
  ".our-friends-carousel__track-item"
);
const popup = document.querySelector("#popup-section");
const popupCloseBtn = document.querySelector("#close-btn");
const carouselBtnPrev = document.querySelector("#carousel-btn-prev");
const carouselBtnNext = document.querySelector("#carousel-btn-next");
const prevItem = document.querySelector("#prev-item");
const currentItem = document.querySelector("#current-item");
const nextItem = document.querySelector("#next-item");

let startCurrentCardsIds = [];
let windowRange;
let petsData;

// helper functions
// ==========================================
const showMenu = () => {
  navigationMenu.classList.remove("slide-out");
  navigationMenu.classList.add("slide-in");
};

const closeMenu = () => {
  navigationMenu.classList.remove("slide-in");
  navigationMenu.classList.add("slide-out");
};

const addOverlay = () => {
  pageOverlay.classList.remove("hide");
  body.classList.add("stop-scroll");
};

const removeOverlay = () => {
  pageOverlay.classList.add("hide");
  body.classList.remove("stop-scroll");
};
const removeSlideInOutAnimation = () => {
  navigationMenu.classList.remove("slide-in");
  navigationMenu.classList.remove("slide-out");
};
// ==================//==============================

// burger menu
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

// navigation links behavior
navigationMenuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    navigationMenuLinks.forEach((link) => {
      link.classList.remove("current-link");
    });
    const currentLink = event.target;
    currentLink.classList.add("current-link");
    if (navigationMenu.classList.contains("mobile-menu")) {
      hamburgerBtn.classList.remove("rotate");
      closeMenu();
      removeOverlay();
    }
  });
});

// popup ============================
const setPopupData = (petObj) => {
  const popupPictureSource = popup.querySelector("source"); //sourceImg
  popupPictureSource.srcset = petObj.sourceImg;
  const popupImg = popup.querySelector(".popup-pic__img");
  popupImg.src = petObj.popupImg;
  popupImg.alt = petObj.alt;
  const popupName = popup.querySelector(".popup-description__name");
  popupName.textContent = petObj.name;
  const popupTitle = popup.querySelector(".popup-description__title");
  popupTitle.textContent = `${petObj.type} - ${petObj.breed}`;
  const popupSpecification = popup.querySelector(
    ".popup-description__specification"
  );
  popupSpecification.textContent = petObj.description;
  const descriptionCharacteristicsList = popup.querySelectorAll(
    ".popup-description__characteristics-item__text-value"
  );
  const petAge = descriptionCharacteristicsList[0];
  petAge.textContent = petObj.age;
  const petInoculations = descriptionCharacteristicsList[1];
  petInoculations.textContent = petObj.inoculations.join(", ");
  const petDiseases = descriptionCharacteristicsList[2];
  petDiseases.textContent = petObj.diseases.join(", ");
  const petParasites = descriptionCharacteristicsList[3];
  petParasites.textContent = petObj.parasites.join(", ");
  // console.log(petObj.popupImg);

  /*
  popup-description__characteristics-item__text-value
  popup-pic__img
  popup-description__name
  popup-description__title
  popup-description__specification
   */
  // popupPictureSource.;
  // console.log("popupPictureSource", popupPictureSource);
  // console.log("popup", popup);
  // console.log("popupPictureSource", popupPictureSource);
  // console.log("popupImg", popupImg);
  // console.log("popupName", popupName);
  // console.log("popupTitle", popupTitle);
  // console.log("popupSpecification", popupSpecification);
};

// setPopupData();
const openPopup = (event) => {
  const petId = +event.target.closest(".our-friends-carousel__track-card").id;
  const currentPet = petsData[petId];
  setPopupData(currentPet);
  // console.log("currentPet", currentPet);
  header.classList.add("hide");
  addOverlay();
  popup.classList.remove("hide");
  // setPopupData();
};

const closePopup = () => {
  removeSlideInOutAnimation();
  header.classList.remove("hide");
  removeOverlay();
  popup.classList.add("hide");
};

// carouselCardsList.forEach((card) => {
//   card.addEventListener("click", () => {
//     header.classList.add("hide");
//     addOverlay();
//     popup.classList.remove("hide");
//   });
// });

// popupCloseBtn.addEventListener("click", () => {
//   removeSlideInOutAnimation();
//   header.classList.remove("hide");
//   removeOverlay();
//   popup.classList.add("hide");
// });

popupCloseBtn.addEventListener("click", closePopup);

// ============================

//overlay
pageOverlay.addEventListener("click", () => {
  if (navigationMenu.classList.contains("mobile-menu")) {
    if (hamburgerBtn.classList.contains("rotate")) {
      hamburgerBtn.classList.remove("rotate");
      header.classList.remove("hide");
      closeMenu();
      removeOverlay();
    } else {
      closePopup();
      // removeSlideInOutAnimation();
      // header.classList.remove("hide");
      // removeOverlay();
      // popup.classList.add("hide");
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

//carousel =====================================
//  create pet card
const createCard = (petObj) => {
  // == create card img ==
  const cardImg = document.createElement("img");
  cardImg.src = petObj.img; //imgPath
  cardImg.alt = petObj.alt; // imgAlt
  cardImg.classList.add("our-friends-carousel__track-card__img");

  // == create card content ==
  const cardContentContainer = document.createElement("div");
  cardContentContainer.classList.add(
    "our-friends-carousel__track-card__content"
  );

  const cardContentTitle = document.createElement("h4");
  cardContentTitle.classList.add(
    "our-friends-carousel__track-card__content-title"
  );
  cardContentTitle.textContent = petObj.name; // cardTitle

  const cardContentButton = document.createElement("button");
  cardContentButton.classList.add(
    "our-friends-carousel__track-card__content-btn"
  );
  cardContentButton.classList.add("button-secondary");
  cardContentButton.type = "button";
  cardContentButton.textContent = "Learn more";

  cardContentContainer.append(cardContentTitle);
  cardContentContainer.append(cardContentButton);

  // == create card container ==
  const card = document.createElement("div");
  card.classList.add("our-friends-carousel__track-card");
  card.id = petObj.petId;

  card.append(cardImg);
  card.append(cardContentContainer);
  card.addEventListener("click", openPopup);
  return card;
};

// set event listener to generated cards for proper popup work

// const setCarouselCardsEvents = () => {
//   const carouselCardsList = currentItem.querySelectorAll(
//     ".our-friends-carousel__track-card"
//   );
//   carouselCardsList.forEach((card) => {
//     card.addEventListener("click", () => {
//       header.classList.add("hide");
//       addOverlay();
//       popup.classList.remove("hide");
//     });
//   });
// };

const clearCarouselTrackTransition = () => {
  carouselTrack.classList.remove("transition-right-320");
  carouselTrack.classList.remove("transition-right-768");
  carouselTrack.classList.remove("transition-right-1280");
  carouselTrack.classList.remove("transition-left-320");
  carouselTrack.classList.remove("transition-left-768");
  carouselTrack.classList.remove("transition-left-1280");
};

const calculateRange = (windowWidth) => {
  let range = 1280;
  if (windowWidth < 768) {
    range = 320;
  } else if (windowWidth > 767 && windowWidth < 1280) {
    range = 768;
  }
  return range;
};

const cardsInsideItem = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth < 768) {
    return 1;
  } else if (screenWidth > 767 && screenWidth < 1280) {
    return 2;
  }
  return 3;
};

const getRandomId = (maxVal) => {
  return Math.floor(Math.random() * maxVal);
};

const generateSetOfCardsIds = (numberOfCards) => {
  const setOfCardsId = [];
  while (setOfCardsId.length < numberOfCards) {
    const idsLength = petsData.length;
    const id = getRandomId(idsLength);
    if (!setOfCardsId.includes(id) && !startCurrentCardsIds.includes(id)) {
      setOfCardsId.push(id);
    }
  }
  return setOfCardsId;
};

const clearCarouselItem = (item) => {
  item.innerHTML = "";
};

const clearCarouselItems = () => {
  carouselItems.forEach((item) => clearCarouselItem(item));
};

const fillCardItem = (setIds, item) => {
  clearCarouselItem(item);
  const length = setIds.length;
  for (let i = 0; i < length; i++) {
    const pet = petsData[setIds[i]];
    const card = createCard(pet);
    item.append(card);
  }
};

const clearCarouselTrackClass = () => {
  carouselTrack.classList.remove("carousel-320");
  carouselTrack.classList.remove("carousel-768");
  carouselTrack.classList.remove("carousel-1280");
};

const createCarousel = () => {
  clearCarouselTrackClass();
  clearCarouselItems();

  const cardsAmount = cardsInsideItem();
  if (cardsAmount === 1) {
    carouselTrack.classList.add("carousel-320");
  } else if (cardsAmount === 2) {
    carouselTrack.classList.add("carousel-768");
  } else {
    carouselTrack.classList.add("carousel-1280");
  }

  fillCardItem(startCurrentCardsIds, currentItem);
  fillCardItem(startCurrentCardsIds, prevItem);
  fillCardItem(startCurrentCardsIds, nextItem);
  // setCarouselCardsEvents();
};

carouselTrack.addEventListener("animationend", (animationEvent) => {
  clearCarouselTrackTransition();
  // carouselBtnPrev.addEventListener("click", movePrev);
  // carouselBtnNext.addEventListener("click", moveNext);
  fillCardItem(startCurrentCardsIds, currentItem);
  carouselBtnPrev.disabled = false;
  carouselBtnNext.disabled = false;
});

// add carousel controls functionality ======
const movePrev = () => {
  console.log("click prev");
  carouselTrack.classList.add(`transition-left-${windowRange}`);
  carouselBtnPrev.disabled = true;
  carouselBtnNext.disabled = true;
  const itemsAmount = cardsInsideItem();
  const newSetOfIds = generateSetOfCardsIds(itemsAmount);
  clearCarouselItem(prevItem);
  fillCardItem(newSetOfIds, prevItem);
  startCurrentCardsIds = newSetOfIds;
  // fillCardItem(startCurrentCardsIds, currentItem);
};

const moveNext = () => {
  console.log("click Next");
  carouselTrack.classList.add(`transition-right-${windowRange}`);
  carouselBtnNext.disabled = true;
  carouselBtnPrev.disabled = true;
  const itemsAmount = cardsInsideItem();
  const newSetOfIds = generateSetOfCardsIds(itemsAmount);
  clearCarouselItem(nextItem);
  fillCardItem(newSetOfIds, nextItem);
  startCurrentCardsIds = newSetOfIds;
};
carouselBtnPrev.addEventListener("click", movePrev);

carouselBtnNext.addEventListener("click", moveNext);

// ===============//======================

// window resize(remove side animation from hamburger menu for better view on different sizes)
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
    windowRange = calculateRange(window.innerWidth);
    const itemsAmount = cardsInsideItem();
    startCurrentCardsIds = generateSetOfCardsIds(itemsAmount);
    createCarousel();
  }
});

// window scroll (add header position fixed depend of width)
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

// add|remove mobile-menu class for proper mobile menu links work
window.addEventListener("load", () => {
  windowRange = calculateRange(window.innerWidth);
  if (window.innerWidth >= 768) {
    navigationMenu.classList.remove("mobile-menu");
  } else {
    navigationMenu.classList.add("mobile-menu");
  }
  fetch("../../assets/data/pets.json")
    .then((response) => {
      return response.json();
    })
    .then((response) => (petsData = response))
    .then(() => {
      const itemsAmount = cardsInsideItem();
      startCurrentCardsIds = generateSetOfCardsIds(itemsAmount);
      createCarousel();
    });
});

// ====================
// carouselTrack.addEventListener("animationend", (animationEvent) => {
//   const animationName = animationEvent.animationName;
//   if (animationName.startsWith("move-left")) {
//     const currentItemCards = currentItem.querySelectorAll(
//       ".our-friends-carousel__track-card"
//     );
//     const prevItemCards = prevItem.querySelectorAll(
//       ".our-friends-carousel__track-card"
//     );

//     const invalidIds = [];
//     let validIds;

//     currentItemCards.forEach((item, index) => {
//       const currentCard = item;
//       const newCard = prevItemCards[index];
//       const currentImg = currentCard.querySelector(
//         ".our-friends-carousel__track-card__img"
//       );
//       const newImg = newCard.querySelector(
//         ".our-friends-carousel__track-card__img"
//       );
//       const currentName = currentCard.querySelector(
//         ".our-friends-carousel__track-card__content-title"
//       );
//       const newName = newCard.querySelector(
//         ".our-friends-carousel__track-card__content-title"
//       );
//       currentImg.src = newImg.src;
//       currentImg.alt = newImg.alt;
//       currentName.textContent = newName.textContent;
//       invalidIds.push(+currentCard.id);
//       currentCard.id = newCard.id;
//     });
//     console.log("invalidIds", invalidIds);
//     validIds = generateRandomCardsSet(invalidIds);
//     console.log("validIds", validIds);
//     prevItemCards.forEach((item, index) => {
//       item.id = validIds[index];
//       item.querySelector(".our-friends-carousel__track-card__img").src =
//         petsData[item.id].img;
//       item.querySelector(".our-friends-carousel__track-card__img").alt =
//         petsData[item.id].alt;
//       item.querySelector(
//         ".our-friends-carousel__track-card__content-title"
//       ).textContent = petsData[item.id].name;
//     });
//     console.log("prevItemCards", prevItemCards);
//   } else {
//     const currentItemCards = currentItem.querySelectorAll(
//       ".our-friends-carousel__track-card"
//     );
//     const nextItemCards = nextItem.querySelectorAll(
//       ".our-friends-carousel__track-card"
//     );

//     const invalidIds = [];
//     let validIds;

//     currentItemCards.forEach((item, index) => {
//       const currentCard = item;
//       const newCard = nextItemCards[index];
//       const currentImg = currentCard.querySelector(
//         ".our-friends-carousel__track-card__img"
//       );
//       const newImg = newCard.querySelector(
//         ".our-friends-carousel__track-card__img"
//       );
//       const currentName = currentCard.querySelector(
//         ".our-friends-carousel__track-card__content-title"
//       );
//       const newName = newCard.querySelector(
//         ".our-friends-carousel__track-card__content-title"
//       );
//       currentImg.src = newImg.src;
//       currentImg.alt = newImg.alt;
//       currentName.textContent = newName.textContent;
//       invalidIds.push(+currentCard.id);
//       currentCard.id = newCard.id;
//     });
//     console.log("invalidIds", invalidIds);
//     validIds = generateRandomCardsSet(invalidIds);
//     console.log("validIds", validIds);
//     nextItemCards.forEach((item, index) => {
//       item.id = validIds[index];
//       item.querySelector(".our-friends-carousel__track-card__img").src =
//         petsData[item.id].img;
//       item.querySelector(".our-friends-carousel__track-card__img").alt =
//         petsData[item.id].alt;
//       item.querySelector(
//         ".our-friends-carousel__track-card__content-title"
//       ).textContent = petsData[item.id].name;
//     });
//   }
//   // clearCarouselTrackTransition();
//   // carouselBtnPrev.addEventListener("click", movePrev);
//   // carouselBtnNext.addEventListener("click", moveNext);
//   carouselBtnPrev.disabled = false;
//   carouselBtnNext.disabled = false;
// });

// const fillCarouselItems = (cardAmount) => {
//   clearCarouselItems();
//   carouselItems.forEach((item, index) => {
//     for (let i = 0; i < cardAmount; i++) {
//       const pet = petsData[startCardsId[index][i]];
//       const card = createCarouselCard(pet);
//       item.append(card);
//     }
//   });
// };

// const setCarouselCardsEvents = () => {
//   const carouselCardsList = document.querySelectorAll(
//     ".our-friends-carousel__track-card"
//   );
//   carouselCardsList.forEach((card) => {
//     card.addEventListener("click", () => {
//       header.classList.add("hide");
//       addOverlay();
//       popup.classList.remove("hide");
//     });
//   });
// };

// const generateValidCardId = () => {
//   const cardData = [];
//   const cardItems = cardsInsideItem();
//   const dataLength = petsData.length;
//   while (cardData.length !== cardItems) {
//     let cardId = getRandomId(dataLength);
//     if (!cardData.includes(cardId)) cardData.push(cardId);
//   }
//   return cardData;
// };

// const generateStartsCardsId = () => {
//   startCardsId = [];
//   let previousCardsId = [];
//   while (startCardsId.length !== 3) {
//     let itemCardsId = generateValidCardId();
//     if (!previousCardsId.some((item) => itemCardsId.includes(item))) {
//       previousCardsId = itemCardsId;
//       startCardsId.push(itemCardsId);
//     }
//   }
// };

// const generateRandomCardsSet = (invalidId) => {
//   const newIds = [];
//   const cardsAmount = cardsInsideItem();
//   while (newIds.length !== cardsAmount) {
//     let itemCardId = getRandomId(petsData.length);
//     if (!invalidId.includes(itemCardId) && !newIds.includes(itemCardId))
//       newIds.push(itemCardId);
//   }
//   return newIds;
// };
