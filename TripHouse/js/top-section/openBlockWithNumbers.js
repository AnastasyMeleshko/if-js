import { numbersWrap } from "./create-form-numbers.js";
import { allInputsForNumbers  } from "../index.js";

const allFilters = document.querySelector(".filters-in-form");

const labelAdultsInSmallScreen = document.querySelector(".label-adults");
const labelChildInSmallScreen = document.querySelector(".label-children");
const labelRoomsInSmallScreen = document.querySelector(".label-rooms");
const arrOfLabels = [labelAdultsInSmallScreen, labelChildInSmallScreen, labelRoomsInSmallScreen];

function openBlockWithNumbers(event) {
  if ((event.target.closest(".filters-in-form"))
    || (event.target.closest(".form-numbers-big-screen"))) {
    allFilters.classList.add("shown");
    numbersWrap.style.setProperty("--borderNumbersColor", "#F5BD41");

    arrOfLabels.forEach((label) => (label.style.top = "0"));

    allInputsForNumbers.forEach((input) => (input.style.setProperty("--text-for-input-numbers", "#383838")));
  } else {
    allFilters.classList.remove("shown");
    numbersWrap.style.setProperty("--borderNumbersColor", "transparent");
    arrOfLabels.forEach((label) => (label.style.top = "0"));
    allInputsForNumbers.forEach((input) => (input.style.setProperty("--text-for-input-numbers", "#383838")));
  }
}

export {openBlockWithNumbers};
