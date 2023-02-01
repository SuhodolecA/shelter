// variables
const hamburgerBtn = document.querySelector("#hamburger-btn");
const navigationMenu = document.querySelector("#navigationLinks");
const navigationMenuLinks = document.querySelectorAll(".nav-link");
const pageOverlay = document.querySelector("#page-overlay");
const header = document.querySelector("#header-section");
const body = document.querySelector("body");

// burger menu
hamburgerBtn.addEventListener("click", () => {
  if (hamburgerBtn.classList.contains("rotate")) {
    hamburgerBtn.classList.remove("rotate");
    pageOverlay.classList.add("hide");
    body.classList.remove("stop-scroll");
    navigationMenu.classList.remove("slide-in");
    navigationMenu.classList.add("slide-out");
  } else {
    hamburgerBtn.classList.add("rotate");
    pageOverlay.classList.remove("hide");
    body.classList.add("stop-scroll");
    navigationMenu.classList.remove("slide-out");
    navigationMenu.classList.add("slide-in");
  }
});
