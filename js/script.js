// variables
const hamburgerBtn = document.querySelector("#hamburger-btn");
const navigationMenu = document.querySelector("#navigationLinks");
const navigationMenuLinks = document.querySelectorAll(".nav-link");
const pageOverlay = document.querySelector("#page-overlay");
const header = document.querySelector("#header-section");
const body = document.querySelector("body");

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

//overlay
pageOverlay.addEventListener("click", () => {
  hamburgerBtn.classList.remove("rotate");
  removeOverlay();
  closeMenu();
});

// window resize(remove side animation from hamburger menu for better view on different sizes)
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    removeSlideInOutAnimation();
    navigationMenu.classList.remove("mobile-menu");
    hamburgerBtn.classList.remove("rotate");
    removeOverlay();
  } else {
    navigationMenu.classList.add("mobile-menu");
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
  if (window.innerWidth >= 768) {
    navigationMenu.classList.remove("mobile-menu");
  } else {
    navigationMenu.classList.add("mobile-menu");
  }
});
