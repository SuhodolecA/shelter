const hamburgerBtn = document.querySelector("#hamburger-btn");
const navigationMenu = document.querySelector("#navigationLinks");
const hamburgerLogo = navigationMenu.querySelector(".header-logo__title-text");
const headerLogo = document.querySelector(".header-logo__title-text");
const navigationMenuLinks = document.querySelectorAll(".nav-link");
const pageOverlay = document.querySelector("#page-overlay");
const header = document.querySelector("#header-section");
const body = document.querySelector("body");
const popup = document.querySelector("#popup-section");
const popupCloseBtn = document.querySelector("#close-btn");
const ourPetsSection = document.querySelector("#our-pets");
const paginationCardsContainer = document.querySelector(".pets-cards");
const paginationFirstPageBtn = document.querySelector("#first-page");
const paginationPrevPageBtn = document.querySelector("#prev-page");
const paginationNextPageBtn = document.querySelector("#next-page");
const paginationLastPageBtn = document.querySelector("#last-page");
const setPetsData = (value) => (petsData = value);
const setCurrentCardsIds = (value) => (startCurrentCardsIds = value);
const setWindowRange = (value) => (windowRange = value);
const setPaginationCardsList = (value) => (paginationCardsList = value);
const setPaginationElementsPerPage = (value) =>
  (paginationElementsPerPage = value);
const setPaginationDataList = (value) => (paginationDataList = value);
const setPaginationPageNumber = (value) =>
  (paginationPageNumber.textContent = value);

let petsData;
let startCurrentCardsIds = [];
let paginationDataList = [];
let paginationElementsPerPage;
let windowRange;
let paginationCardsList;
let paginationPageNumber = document.querySelector("#page-number");

export {
  hamburgerBtn,
  navigationMenu,
  navigationMenuLinks,
  pageOverlay,
  header,
  body,
  popup,
  popupCloseBtn,
  setPetsData,
  petsData,
  startCurrentCardsIds,
  setCurrentCardsIds,
  windowRange,
  setWindowRange,
  paginationCardsList,
  setPaginationCardsList,
  hamburgerLogo,
  ourPetsSection,
  paginationDataList,
  paginationElementsPerPage,
  setPaginationElementsPerPage,
  setPaginationDataList,
  headerLogo,
  paginationCardsContainer,
  paginationFirstPageBtn,
  paginationPrevPageBtn,
  paginationNextPageBtn,
  paginationLastPageBtn,
  paginationPageNumber,
  setPaginationPageNumber,
};
