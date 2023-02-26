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
import {
  getRandomId,
  cardsInsideItem,
  clearCarouselTrackTransition,
  createCard,
} from "./helperFunctions.js";

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
  carouselTrack.addEventListener("animationend", () => {
    clearCarouselTrackTransition();
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
