const hamburgerBtn = document.querySelector("#hamburger-btn");
const navigationMenu = document.querySelector("#navigationLinks");
const navigationMenuLinks = document.querySelectorAll(".nav-link");
const pageOverlay = document.querySelector("#page-overlay");
const header = document.querySelector("#header-section");
const body = document.querySelector("body");
const popup = document.querySelector("#popup-section");
const popupCloseBtn = document.querySelector("#close-btn");
const setPetsData = (value) => (petsData = value);
const setCurrentCardsIds = (value) => (startCurrentCardsIds = value);
const setWindowRange = (value) => (windowRange = value);

let petsData;
let startCurrentCardsIds = [];
let windowRange;

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
};
