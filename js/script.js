// variables
const hamburgerBtn = document.querySelector("#hamburger-btn");
const navigationMenu = document.querySelector("#navigationLinks");
const navigationMenuLinks = document.querySelectorAll(".nav-link");
const pageOverlay = document.querySelector("#page-overlay");
const header = document.querySelector("#header-section");
const body = document.querySelector("body");

// helper functions
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

//overlay
pageOverlay.addEventListener("click", () => {
  hamburgerBtn.classList.remove("rotate");
  removeOverlay();
  closeMenu();
});
