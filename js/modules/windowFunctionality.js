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
  petsData,
  paginationDataList,
  setPaginationDataList,
} from "./globalVars.js";

import {
  removeSlideInOutAnimation,
  removeOverlay,
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
  generateRandomPetsList,
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
      //removeOverlay(); // am I need this function here?!!!!!! it breaks overlay in popup active state
      // closePopup();
    } else {
      navigationMenu.classList.add("mobile-menu");
    }

    //update carousel items only if innerWidth outside rage(prevent card flickering)
    if (calculateRange(window.innerWidth) !== windowRange) {
      setWindowRange(calculateRange(window.innerWidth));

      // console.log("paginationDataList", paginationDataList);
      if (ourPetsSection) {
        console.log("ourPetsSection");
        // console.log("paginationDataList", paginationDataList.flat());
        const cardsPerPage = cardsInsideItem();
        setPaginationElementsPerPage(cardsPerPage);
        const petsDataArr = paginationDataList.flat();
        const newDataList = divideInChunks(cardsPerPage, petsDataArr);
        console.log("newDataList", newDataList);
        setPaginationDataList(newDataList);
        console.log("paginationPageNumber", paginationPageNumber);
        paginationPageNumber.textContent = 1;
        fillPaginationCardsContainer(paginationPageNumber, paginationDataList);
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
    // if (
    //   (window.innerWidth >= 320 &&
    //     window.innerWidth < 768 &&
    //     window.scrollY >= 719) ||
    //   (window.innerWidth >= 768 && window.scrollY >= 1140) ||
    //   (window.innerWidth >= 1280 && window.scrollY >= 890)
    // ) {
    //   header.classList.add("fixed");
    // } else {
    //   header.classList.remove("fixed");
    // }
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
