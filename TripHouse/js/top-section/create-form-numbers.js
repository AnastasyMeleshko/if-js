import { createFilter } from "./createFilter.js";
import { createSelect } from "./createSelect.js";

export const formNumbers = document.querySelector(".form-numbers");
formNumbers.classList.add("hidden");

const formNumbersWrap = document.querySelector(".form-numbers-wrap");

export const numbersWrap = document.createElement("div");
numbersWrap.classList.add("form-numbers-big-screen");

const inputAdults = document.createElement("div");
inputAdults.classList.add("form-input-bg");
inputAdults.classList.add("form-input-adults");
const labelAdults = document.createElement("span");
labelAdults.innerHTML = "0 Adults";
labelAdults.classList.add("form-label-bg");
labelAdults.classList.add("form-label-adults");
numbersWrap.append(inputAdults);
inputAdults.append(labelAdults);

const inputChildren = document.createElement("div");
inputChildren.classList.add("form-input-bg");
inputChildren.classList.add("form-input-children");
const labelChildren = document.createElement("span");
labelChildren.innerHTML = "0 Children";
labelChildren.classList.add("form-label-bg");
labelChildren.classList.add("form-label-children");
numbersWrap.append(inputChildren);
inputChildren.append(labelChildren);

const firstLine = document.createElement("div");
firstLine.classList.add("first-line");
numbersWrap.insertBefore(firstLine, inputChildren);

const inputRooms = document.createElement("div");
inputRooms.classList.add("form-input-bg");
inputRooms.classList.add("form-input-rooms");
const labelRooms = document.createElement("span");
labelRooms.innerHTML = "0 Rooms";
labelRooms.classList.add("form-label-bg");
labelRooms.classList.add("form-label-rooms");
numbersWrap.append(inputRooms);
inputRooms.append(labelRooms);

const secondLine = document.createElement("div");
secondLine.classList.add("second-line");
numbersWrap.insertBefore(secondLine, inputRooms);

formNumbersWrap.append(numbersWrap);

export const filtersBlock = document.createElement("div");
filtersBlock.classList.add("filters-in-form");
const form = document.querySelector(".form-main");
form.append(filtersBlock);

const dataForFilters = ["Adults", "Children", "Rooms"];

for (let i = 0; i < dataForFilters.length; i++) {
  const createdFilter = createFilter(dataForFilters[i], i);
  filtersBlock.append(createdFilter);
}

export const textAboutChildren = document.createElement("p");
textAboutChildren.classList.add("text-about-children");
const questionText = document.createTextNode("What is the age of the child you’re travelling with?");
textAboutChildren.appendChild(questionText);
filtersBlock.append(textAboutChildren);

const selectFirst = createSelect();
filtersBlock.append(selectFirst);

