import {
  petsData,
  paginationDataList,
  paginationElementsPerPage,
  setPaginationElementsPerPage,
  setPaginationDataList,
  paginationCardsContainer,
  paginationFirstPageBtn,
  paginationPrevPageBtn,
  paginationNextPageBtn,
  paginationLastPageBtn,
  paginationPageNumber,
} from "./globalVars.js";
import {
  cardsInsideItem,
  shuffle,
  divideInChunks,
  createCard,
  createPetItem,
} from "./helperFunctions.js";

const updateBtnsState = (pageNumber, paginationDataList) => {
  const paginationLength = paginationDataList.length;
  if (pageNumber === 1) {
    paginationFirstPageBtn.classList.add("inactive");
    paginationFirstPageBtn.disabled = true;
    paginationPrevPageBtn.classList.add("inactive");
    paginationPrevPageBtn.disabled = true;

    paginationNextPageBtn.classList.remove("inactive");
    paginationNextPageBtn.disabled = false;
    paginationLastPageBtn.classList.remove("inactive");
    paginationLastPageBtn.disabled = false;
  } else if (pageNumber === paginationLength) {
    paginationNextPageBtn.classList.add("inactive");
    paginationNextPageBtn.disabled = true;
    paginationLastPageBtn.classList.add("inactive");
    paginationLastPageBtn.disabled = true;

    paginationFirstPageBtn.classList.remove("inactive");
    paginationFirstPageBtn.disabled = false;
    paginationPrevPageBtn.classList.remove("inactive");
    paginationPrevPageBtn.disabled = false;
  } else {
    paginationFirstPageBtn.classList.remove("inactive");
    paginationFirstPageBtn.disabled = false;
    paginationPrevPageBtn.classList.remove("inactive");
    paginationPrevPageBtn.disabled = false;
    paginationNextPageBtn.classList.remove("inactive");
    paginationNextPageBtn.disabled = false;
    paginationLastPageBtn.classList.remove("inactive");
    paginationLastPageBtn.disabled = false;
  }
};

const generateRandomPetsList = (petsData) => {
  do {
    if (paginationDataList.length === 0) {
      const listOfData = shuffle(petsData);
      paginationDataList.push(listOfData);
    } else {
      const listOfData = shuffle(petsData);
      if (paginationElementsPerPage === 3) {
        const firstTwoElements = listOfData.slice(0, 2);
        const lastTwoElement =
          paginationDataList[paginationDataList.length - 1].slice(-2);
        const condition = !lastTwoElement.some((element) =>
          firstTwoElements.includes(element)
        );
        if (condition) {
          paginationDataList.push(listOfData);
        }
      } else if (paginationElementsPerPage === 6) {
        const firstFourElements = listOfData.slice(0, 4);
        const lastTwoPrevElements =
          paginationDataList[paginationDataList.length - 1].slice(-4);
        const condition = !lastTwoPrevElements.some((element) =>
          firstFourElements.includes(element)
        );
        if (condition) {
          paginationDataList.push(listOfData);
        }
      } else {
        paginationDataList.push(listOfData);
      }
    }
  } while (paginationDataList.length < 6);
};

const fillPaginationCardsContainer = (pageNumber, petsData) => {
  paginationCardsContainer.innerHTML = "";
  const number = +pageNumber.textContent - 1;
  for (let i = 0; i < petsData[number].length; i++) {
    const card = createCard(petsData[[number]][i]);
    const createItem = createPetItem();
    createItem.append(card);
    paginationCardsContainer.append(createItem);
  }
};

const paginationFunctionality = () => {
  const cardsPerPage = cardsInsideItem();
  setPaginationElementsPerPage(cardsPerPage);
  generateRandomPetsList(petsData);
  const petsDataArr = paginationDataList.flat();
  const newDataList = divideInChunks(cardsPerPage, petsDataArr);
  setPaginationDataList(newDataList);
  fillPaginationCardsContainer(paginationPageNumber, paginationDataList);
  const pageNumber = +paginationPageNumber.textContent;
  updateBtnsState(pageNumber, paginationDataList);

  paginationNextPageBtn.addEventListener("click", () => {
    let pageNumber = +paginationPageNumber.textContent;
    console.log("pageNumber", pageNumber);
    if (pageNumber === paginationDataList.length) {
      return;
    } else {
      pageNumber++;
      paginationPageNumber.textContent = pageNumber;
      updateBtnsState(pageNumber, paginationDataList);
      fillPaginationCardsContainer(paginationPageNumber, paginationDataList);
    }
  });

  paginationLastPageBtn.addEventListener("click", () => {
    paginationPageNumber.textContent = paginationDataList.length;
    updateBtnsState(paginationDataList.length, paginationDataList);
    fillPaginationCardsContainer(paginationPageNumber, paginationDataList);
  });

  paginationFirstPageBtn.addEventListener("click", () => {
    paginationPageNumber.textContent = 1;
    const pageNumber = +paginationPageNumber.textContent;
    updateBtnsState(pageNumber, paginationDataList);
    fillPaginationCardsContainer(paginationPageNumber, paginationDataList);
  });

  paginationPrevPageBtn.addEventListener("click", () => {
    let pageNumber = +paginationPageNumber.textContent;
    if (pageNumber === 1) {
      return;
    } else {
      pageNumber--;
      paginationPageNumber.textContent = pageNumber;
      updateBtnsState(pageNumber, paginationDataList);
      fillPaginationCardsContainer(paginationPageNumber, paginationDataList);
    }
  });
};

export {
  paginationFunctionality,
  generateRandomPetsList,
  fillPaginationCardsContainer,
  updateBtnsState,
};
