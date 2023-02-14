import { header, popup, popupCloseBtn, petsData } from "./globalVars.js";

import {
  addOverlay,
  removeSlideInOutAnimation,
  removeOverlay,
} from "./helperFunctions.js";

// popup ============================
const setPopupData = (petObj) => {
  const popupPictureSource = popup.querySelector("source"); //sourceImg
  popupPictureSource.srcset = petObj.sourceImg;
  const popupImg = popup.querySelector(".popup-pic__img");
  popupImg.src = petObj.popupImg;
  popupImg.alt = petObj.alt;
  const popupName = popup.querySelector(".popup-description__name");
  popupName.textContent = petObj.name;
  const popupTitle = popup.querySelector(".popup-description__title");
  popupTitle.textContent = `${petObj.type} - ${petObj.breed}`;
  const popupSpecification = popup.querySelector(
    ".popup-description__specification"
  );
  popupSpecification.textContent = petObj.description;
  const descriptionCharacteristicsList = popup.querySelectorAll(
    ".popup-description__characteristics-item__text-value"
  );
  const petAge = descriptionCharacteristicsList[0];
  petAge.textContent = petObj.age;
  const petInoculations = descriptionCharacteristicsList[1];
  petInoculations.textContent = petObj.inoculations.join(", ");
  const petDiseases = descriptionCharacteristicsList[2];
  petDiseases.textContent = petObj.diseases.join(", ");
  const petParasites = descriptionCharacteristicsList[3];
  petParasites.textContent = petObj.parasites.join(", ");
};

const openPopup = (event) => {
  const petId = +event.target.closest(".our-friends-carousel__track-card").id;
  const currentPet = petsData[petId];
  setPopupData(currentPet);
  header.classList.add("hide");
  addOverlay();
  popup.classList.remove("hide");
};

const closePopup = () => {
  removeSlideInOutAnimation();
  header.classList.remove("hide");
  removeOverlay();
  popup.classList.add("hide");
};

const closePopupBtnFunctionality = () => {
  popupCloseBtn.addEventListener("click", closePopup);
};

export { setPopupData, openPopup, closePopup, closePopupBtnFunctionality };
