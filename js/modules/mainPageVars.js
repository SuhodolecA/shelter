const carouselTrack = document.querySelector(".our-friends-carousel__track");
const carouselItems = document.querySelectorAll(
  ".our-friends-carousel__track-item"
);
const carouselBtnPrev = document.querySelector("#carousel-btn-prev");
const carouselBtnNext = document.querySelector("#carousel-btn-next");
const prevItem = document.querySelector("#prev-item");
const currentItem = document.querySelector("#current-item");
const nextItem = document.querySelector("#next-item");

export {
  carouselTrack,
  carouselItems,
  carouselBtnPrev,
  carouselBtnNext,
  prevItem,
  currentItem,
  nextItem,
};
