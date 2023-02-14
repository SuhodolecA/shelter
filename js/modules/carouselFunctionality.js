import {
  petsData,
  startCurrentCardsIds,
  setCurrentCardsIds,
  windowRange,
} from "./globalVars.js";
import {
  carouselItems,
  carouselTrack,
  currentItem,
  prevItem,
  nextItem,
  carouselBtnPrev,
  carouselBtnNext,
} from "./mainPageVars.js";
import { openPopup } from "./popupFunctionality.js";
import {
  getRandomId,
  cardsInsideItem,
  clearCarouselTrackTransition,
} from "./helperFunctions.js";

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
};

const carouselFunctionality = () => {
  carouselTrack.addEventListener("animationend", (animationEvent) => {
    clearCarouselTrackTransition();
    // carouselBtnPrev.addEventListener("click", movePrev);
    // carouselBtnNext.addEventListener("click", moveNext);
    fillCardItem(startCurrentCardsIds, currentItem);
    carouselBtnPrev.disabled = false;
    carouselBtnNext.disabled = false;
  });
};

const movePrev = () => {
  carouselTrack.classList.add(`transition-left-${windowRange}`);
  carouselBtnPrev.disabled = true;
  carouselBtnNext.disabled = true;
  const itemsAmount = cardsInsideItem();
  const newSetOfIds = generateSetOfCardsIds(itemsAmount);
  clearCarouselItem(prevItem);
  fillCardItem(newSetOfIds, prevItem);
  setCurrentCardsIds(newSetOfIds);
  // fillCardItem(startCurrentCardsIds, currentItem);
};

const moveNext = () => {
  carouselTrack.classList.add(`transition-right-${windowRange}`);
  carouselBtnNext.disabled = true;
  carouselBtnPrev.disabled = true;
  const itemsAmount = cardsInsideItem();
  const newSetOfIds = generateSetOfCardsIds(itemsAmount);
  clearCarouselItem(nextItem);
  fillCardItem(newSetOfIds, nextItem);
  setCurrentCardsIds(newSetOfIds);
};

const prevBtnFunctionality = () => {
  carouselBtnPrev.addEventListener("click", movePrev);
};
const nextBtnFunctionality = () => {
  carouselBtnNext.addEventListener("click", moveNext);
};

export {
  createCard,
  generateSetOfCardsIds,
  clearCarouselItem,
  clearCarouselItems,
  fillCardItem,
  clearCarouselTrackClass,
  createCarousel,
  carouselFunctionality,
  movePrev,
  moveNext,
  prevBtnFunctionality,
  nextBtnFunctionality,
};
