import { createHomesItem } from "../homes/createHomesItem.js";

const adultsInputBigScreen = document.querySelector(".counter-number-Adults");
const childrenInputBigScreen = document.querySelector(".counter-number-Children");
const roomsInputBigScreen = document.querySelector(".counter-number-Rooms");

const leftArrowHomes = document.querySelector(".arrow-homes-left");
const rightArrowHomes = document.querySelector(".arrow-homes");

const searchButton = document.querySelector(".search-button");

searchButton.addEventListener("click", () => {
  const mainSectionsWrap = document.querySelector(".main-sections-wrapper");
  const availableHotelsWrap = document.querySelector(".available-hotels");
  const destInputBigScreen = document.getElementById("user-destination");
  const destInputSmallScreen = document.getElementById("user-destination-hidden");

  if (mainSectionsWrap.firstElementChild.classList.contains("available-hotels")) {
    mainSectionsWrap.removeChild(availableHotelsWrap);
  }

  const searchRequest = destInputBigScreen.value;
  const searchAdults = adultsInputBigScreen.innerHTML;
  const searchRooms = roomsInputBigScreen.innerHTML;
  const searchChildrenInitial = childrenInputBigScreen.innerHTML;
  let searchChildren = "";

  const allActiveSelects = document.querySelectorAll(".select-age-wrap");
  allActiveSelects.forEach((elem) => {
    const regExp = /\d+/;
    const searchString = elem.childNodes[0].value;
    const result = (searchString.match(regExp));
    searchChildren += `${result[0]},`;
  });

  const resultChildrenSearch = searchChildren.slice(0, -1);

  const shadowBlock = document.createElement("div");
  shadowBlock.classList.add("shadow-block");
  const informBlock = document.createElement("div");
  informBlock.classList.add("inform-block");

  const agreedButton = document.createElement("button");
  agreedButton.classList.add("confirm-btn");
  agreedButton.innerHTML = "OK";
  shadowBlock.append(informBlock);

  agreedButton.onclick = function () {
    document.body.removeChild(shadowBlock);
    document.body.style.overflow = "auto";
    destInputBigScreen.value = "";
    destInputSmallScreen.value = "";
  };

  fetch(`https://fe-student-api.herokuapp.com/api/hotels?search=${searchRequest}&adults=${searchAdults}&children=${resultChildrenSearch}&rooms=${searchRooms}`)
    .then((response) => response.json())
    .then((data) => {
      const finalData = data;
      if (finalData.length === 0) {
        const informBlockText = document.createTextNode("There are no suitable results matching your request. Please search again.");
        informBlock.append(informBlockText);
        informBlock.append(agreedButton);
        document.body.append(shadowBlock);
        document.body.style.overflow = "hidden";
      }
      if (searchRequest === "") {
        const informBlockText = document.createTextNode("Please enter your request before searching.");
        informBlock.append(informBlockText);
        informBlock.append(agreedButton);
        document.body.append(shadowBlock);
        document.body.style.overflow = "hidden";
      }
      if ((searchAdults === "0") && (searchChildrenInitial >= 0)) {
        const informBlockText = document.createTextNode("Quantaty of adults can't be equal 0 or less than children.");
        const informBlockText2 = document.createTextNode("Please double check your request.");
        informBlock.append(informBlockText);
        informBlock.append(informBlockText2);
        informBlock.append(agreedButton);
        document.body.append(shadowBlock);
        document.body.style.overflow = "hidden";
      }

      if ((finalData.length > 0) && (searchRequest !== "")) {
        const availableHotelsWrap = document.createElement("section");
        availableHotelsWrap.classList.add("available-hotels");
        const availableHotels = document.createElement("div");
        availableHotels.classList.add("container");
        availableHotels.classList.add("col-lg-12");
        availableHotels.classList.add("available-container");
        const availableTitle = document.createElement("h2");
        availableTitle.classList.add("col-lg-12");
        availableTitle.classList.add("available-title");
        availableTitle.innerHTML = "Available hotels";
        availableHotels.append(availableTitle);
        const availableItems = document.createElement("div");
        availableItems.classList.add("available-items", "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12");
        const availableItemsSlider = document.createElement("div");
        availableItemsSlider.classList.add("available-items-slider", "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12");
        availableItems.append(availableItemsSlider);
        const leftArrowAvailable = leftArrowHomes.cloneNode(true);
        availableItems.append(leftArrowAvailable);
        const rightArrowAvailable = rightArrowHomes.cloneNode(true);
        availableItems.append(rightArrowAvailable);
        availableHotels.append(availableItems);
        availableHotelsWrap.append(availableHotels);

        const offersSection = document.querySelector(".offers");
        if (mainSectionsWrap.firstElementChild.classList.contains("available-hotels")) {
          mainSectionsWrap.removeChild(availableHotelsWrap);
        }
        mainSectionsWrap.insertBefore(availableHotelsWrap, offersSection);
        availableHotelsWrap.scrollIntoView();

        for (let i = 0; i < finalData.length; i++) {
          const homesItemCreated = createHomesItem(finalData, i);
          homesItemCreated.classList.add("available-elem");
          availableItemsSlider.append(homesItemCreated);
        }

        if ((finalData.length === 1) || (finalData.length === 2)) {
          leftArrowAvailable.style.display = "none";
          rightArrowAvailable.style.display = "none";
        }

        if (finalData.length > 1) {
          let count = 0;
          const screenWidth = innerWidth;
          rightArrowAvailable.addEventListener("click", () => {
            const sliderElements = document.querySelectorAll(".available-elem");
            for (let i = 0; i < sliderElements.length; i++) {
              sliderElements[i].classList.remove("hidden-item");
            }
            count++;

            if (((sliderElements.length - 4) < count) && (sliderElements.length > 4)) {
              count = 0;
            }

            if (sliderElements.length <= 4) {
              if (screenWidth >= 1200) {
                count = 0;
              }

              if ((screenWidth < 1200) && (screenWidth > 990)) {
                if (count === 2) {
                  count = 0;
                }
              }

              if ((screenWidth <= 990) && (screenWidth > 670)) {
                if (count === 3) {
                  count = 0;
                }
              }
            }

            rollSlider();
          });

          leftArrowAvailable.addEventListener("click", () => {
            const sliderElements = document.querySelectorAll(".available-elem");
            for (let i = 0; i < sliderElements.length; i++) {
              sliderElements[i].classList.remove("hidden-item");
            }
            count--;

            if (sliderElements.length > 4) {
              if (count < 0) {
                count = sliderElements.length - 4;
              }
            }

            if (sliderElements.length <= 4) {
              if (screenWidth >= 1200) {
                count = 0;
              }

              if ((screenWidth < 1200) && (screenWidth > 990)) {
                if (count === -1) {
                  count = 1;
                }
              }

              if ((screenWidth <= 990) && (screenWidth > 670)) {
                if (count === -1) {
                  count = 2;
                }
              }
            }

            rollSlider();
          });

          const slider2 = document.querySelector(".available-items-slider");

          function rollSlider() {
            slider2.style.transform = `translate(-${count * (300 + 16)}px )`;
          }
        }
      }
    }).catch((error) => {
    console.log(`Error${error}`);
  });
});
