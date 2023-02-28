import {
  navigationMenu,
  hamburgerBtn,
  header,
  windowRange,
  setWindowRange,
  setCurrentCardsIds,
  setPetsData,
  ourPetsSection,
  paginationPageNumber,
  setPaginationElementsPerPage,
  paginationDataList,
  setPaginationDataList,
} from "./globalVars.js";

import {
  removeSlideInOutAnimation,
  calculateRange,
  cardsInsideItem,
  fixingHeader,
  divideInChunks,
} from "./helperFunctions.js";

import {
  generateSetOfCardsIds,
  createCarousel,
} from "./carouselFunctionality.js";

import {
  paginationFunctionality,
  fillPaginationCardsContainer,
  updateBtnsState,
} from "./paginationFunctionality.js";

const windowResizeFunctionality = () => {
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      removeSlideInOutAnimation();
      navigationMenu.classList.remove("mobile-menu");
      hamburgerBtn.classList.remove("rotate");
      header.classList.remove("hide");
    } else {
      navigationMenu.classList.add("mobile-menu");
    }

    //update carousel items only if innerWidth outside rage(prevent card flickering)
    if (calculateRange(window.innerWidth) !== windowRange) {
      setWindowRange(calculateRange(window.innerWidth));
      if (ourPetsSection) {
        const cardsPerPage = cardsInsideItem();
        setPaginationElementsPerPage(cardsPerPage);
        const petsDataArr = paginationDataList.flat();
        const newDataList = divideInChunks(cardsPerPage, petsDataArr);
        setPaginationDataList(newDataList);
        paginationPageNumber.textContent = 1;
        fillPaginationCardsContainer(paginationPageNumber, paginationDataList);
        const pageNumber = +paginationPageNumber.textContent;
        updateBtnsState(pageNumber, paginationDataList);
      } else {
        const itemsAmount = cardsInsideItem();
        setCurrentCardsIds(generateSetOfCardsIds(itemsAmount));
        createCarousel();
      }
    }
  });
};

const windowScrollFunctionality = () => {
  window.addEventListener("scroll", () => {
    const innerWidth = window.innerWidth;
    const scrollY = window.scrollY;
    fixingHeader(innerWidth, scrollY);
  });
};

const windowLoadFunctionality = () => {
  const innerWidth = window.innerWidth;
  const scrollY = window.scrollY;
  fixingHeader(innerWidth, scrollY);
  window.addEventListener("load", () => {
    setWindowRange(calculateRange(innerWidth));
    if (innerWidth >= 768) {
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
        if (ourPetsSection) {
          paginationFunctionality();
        } else {
          const itemsAmount = cardsInsideItem();
          setCurrentCardsIds(generateSetOfCardsIds(itemsAmount));
          createCarousel();
        }
      });
  });
};

export {
  windowResizeFunctionality,
  windowScrollFunctionality,
  windowLoadFunctionality,
};
