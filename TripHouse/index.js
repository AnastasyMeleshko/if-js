// lesson-10 + corrected from lesson-12

// "Homes guests loves"

// const data = [
//   {
//     name: "Hotel Leopold",
//     city: "Saint Petersburg",
//     country: "Russia",
//     imageUrl: "https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg",
//   },
//   {
//     name: "Apartment Sunshine",
//     city: "Santa  Cruz de Tenerife",
//     country: "Spain",
//     imageUrl: "https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg",
//   },
//   {
//     name: "Villa Kunerad",
//     city: "Vysokie Tatry",
//     country: "Slowakia",
//     imageUrl: "https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg",
//   },
//   {
//     name: "Hostel Friendship",
//     city: "Berlin",
//     country: "Germany",
//     imageUrl: "https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg",
//   },
//   {
//     name: "Radisson Blu Hotel",
//     city: "Kyiv",
//     country: "Ukraine",
//     imageUrl: "https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg",
//   },
//   {
//     name: "Paradise Hotel",
//     city: "Guadalupe",
//     country: "Mexico",
//     imageUrl: "https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg",
//   },
//   {
//     name: "Hotel Grindewald",
//     city: "Interlaken",
//     country: "Switzerland",
//     imageUrl: "https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg",
//   },
//   {
//     name: "The Andaman Resort",
//     city: "Port Dickson",
//     country: "Malaysia",
//     imageUrl: "https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg",
//   },
// ];

const homesGroupItems = document.getElementsByClassName("homes-group-items");
const homesGroupItemsSlider = document.createElement("div");
homesGroupItemsSlider.classList.add("homes-group-items-slider", "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12");
homesGroupItems[0].insertBefore(homesGroupItemsSlider, homesGroupItems[0].children[0]);

function createHomesItem(data, index) {
  const homesItem = document.createElement("div");
  homesItem.classList.add("homes-item", "col-lg-3", "col-md-4", "col-sm-6", "col-xs-6");
  const homesItemImg = document.createElement("img");
  homesItemImg.setAttribute("src", data[index].imageUrl);
  homesItemImg.setAttribute("alt", data[index].name);
  homesItemImg.classList.add("homes-item-img");
  homesItem.append(homesItemImg);
  const homesItemTitle = document.createElement("p");
  homesItemTitle.classList.add("homes-item-title");
  const homesItemTitleText = document.createTextNode(data[index].name);
  homesItemTitle.appendChild(homesItemTitleText);
  homesItem.append(homesItemTitle);
  const homesItemLocation = document.createElement("p");
  homesItemLocation.classList.add("homes-item-location");
  const homesItemLocationText = document.createTextNode(`${data[index].city}, ${data[index].country}`);
  homesItemLocation.appendChild(homesItemLocationText);
  homesItem.append(homesItemLocation);
  return homesItem;
}

function insertHomesItem(homesItemCreated) {
  homesGroupItemsSlider.append(homesItemCreated);
}

function createInitialItems() {
  let initialHomesObj;
  if (((sessionStorage.getItem("homesInitialData")) === "undefined") || (sessionStorage.length === 0)) {
    fetch("https://fe-student-api.herokuapp.com/api/hotels/popular")
      .then((response) => response.json())
      .then((data) => {
        const dataFinal = data;
        initialHomesObj = JSON.stringify(dataFinal);
        sessionStorage.setItem("homesInitialData", initialHomesObj);
        for (let i = 0; i < dataFinal.length; i++) {
          const homesItemCreated = createHomesItem(dataFinal, i);
          insertHomesItem(homesItemCreated);
        }
      }).catch((err) => {
        console.log("Fetch Error :", err);
      });
  } else if (sessionStorage.getItem("homesInitialData").length !== 0) {
    const initialHomesObjForUsage = JSON.parse(sessionStorage.getItem("homesInitialData"));
    for (let i = 0; i < initialHomesObjForUsage.length; i++) {
      const homesItemCreated = createHomesItem(initialHomesObjForUsage, i);
      insertHomesItem(homesItemCreated);
    }
  }
}

createInitialItems();

const arrowHomes = document.querySelector(".arrow-homes");

let count = 0;
arrowHomes.addEventListener("click", () => {
  const sliderElements = document.querySelectorAll(".homes-item");
  for (let i = 0; i < sliderElements.length; i++) {
    sliderElements[i].classList.remove("hidden-item");
  }
  count++;
  if ((sliderElements.length - 4) < count) {
    count = 0;
  }

  rollSlider();
});

const arrowHomesLeft = document.querySelector(".arrow-homes-left");

arrowHomesLeft.addEventListener("click", () => {
  const sliderElements = document.querySelectorAll(".homes-item");
  for (let i = 0; i < sliderElements.length; i++) {
    sliderElements[i].classList.remove("hidden-item");
  }
  count--;
  if (count < 0) {
    count = 4;
  }
  rollSlider();
});

const slider = document.querySelector(".homes-group-items-slider");

function rollSlider() {
  slider.style.transform = `translate(-${count * (300 + 14)}px )`;
}

window.addEventListener("resize", () => {
  function getCoords(element) {
    const rect = element.getBoundingClientRect();
    return rect.x;
  }

  const screenWidth = innerWidth;

  const sliderElements = document.querySelectorAll(".homes-item");

  for (let i = 0; i < sliderElements.length; i++) {
    const coords = getCoords(sliderElements[i]);

    if (screenWidth >= 1200) {
      sliderElements[i].classList.remove("hidden-item");
    }

    if ((screenWidth < 1210) && (screenWidth > 768) && (coords > 700) && (coords < 1135)) {
      sliderElements[i].classList.add("hidden-item");
    }

    if ((screenWidth < 768) && (coords > 520) && (coords < 700)) {
      sliderElements[i].classList.add("hidden-item");
    }

    if ((screenWidth > 768) && sliderElements[i].classList.contains("hidden-item") && (coords > 600) && (coords < 650)) {
      sliderElements[i].classList.remove("hidden-item");
    }
  }
}, false);

// lesson 11

const formNumbers = document.querySelector(".form-numbers");
formNumbers.classList.add("hidden");

const formNumbersWrap = document.querySelector(".form-numbers-wrap");

const numbersWrap = document.createElement("div");
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

const filtersBlock = document.createElement("div");
filtersBlock.classList.add("filters-in-form");
const form = document.querySelector(".form-main");
form.append(filtersBlock);

function createFilter(dataForFilters) {
  const filtersBlockElement = document.createElement("div");
  filtersBlockElement.classList.add("filters-block-element");
  const labelAdults2 = document.createElement("span");
  labelAdults2.innerHTML = `${dataForFilters}`;
  labelAdults2.classList.add("filter-text");
  const classTextName = `filter-text-${dataForFilters}`;
  labelAdults2.classList.add(classTextName);
  filtersBlockElement.append(labelAdults2);
  const squareButtonMinus = document.createElement("div");
  squareButtonMinus.classList.add("square-button");
  squareButtonMinus.classList.add("square-button-minus");
  squareButtonMinus.classList.add(`button-minus-${dataForFilters}`);
  squareButtonMinus.classList.add(`minus-btn-${dataForFilters}`);
  const minusInBtn = document.createElement("div");
  minusInBtn.classList.add("minus-in-btn");
  minusInBtn.classList.add("minus-minus-in-btn");
  squareButtonMinus.append(minusInBtn);
  filtersBlockElement.append(squareButtonMinus);
  const counter = document.createElement("div");
  counter.classList.add("counter-number");
  counter.classList.add(`counter-number-${dataForFilters}`);
  counter.innerHTML = "0";
  filtersBlockElement.append(counter);

  const squareButtonPlus = document.createElement("div");
  squareButtonPlus.classList.add("square-button");
  squareButtonPlus.classList.add("square-button-plus");
  squareButtonPlus.classList.add(`button-plus-${dataForFilters}`);
  squareButtonPlus.classList.add(`plus-btn-${dataForFilters}`);
  const minusInBtn2 = document.createElement("div");
  minusInBtn2.classList.add("minus-in-btn");
  minusInBtn2.classList.add("minus-in-btn-plus");
  squareButtonPlus.append(minusInBtn2);
  const minusInBtnVertical = document.createElement("div");
  minusInBtnVertical.classList.add("minus-in-btn-vertical");
  minusInBtnVertical.classList.add("minus-in-btn-plus");
  squareButtonPlus.append(minusInBtnVertical);
  filtersBlockElement.append(squareButtonPlus);
  return filtersBlockElement;
}

const dataForFilters = ["Adults", "Children", "Rooms"];

for (let i = 0; i < dataForFilters.length; i++) {
  const createdFilter = createFilter(dataForFilters[i], i);
  filtersBlock.append(createdFilter);
}

const textAboutChildren = document.createElement("p");
textAboutChildren.classList.add("text-about-children");
const questionText = document.createTextNode("What is the age of the child you’re travelling with?");
textAboutChildren.appendChild(questionText);
filtersBlock.append(textAboutChildren);

function createSelect() {
  const selectAgeWrapper = document.createElement("div");
  selectAgeWrapper.classList.add("select-age-wrap");
  const selectAge = document.createElement("select");
  selectAge.setAttribute("name", "children-age");
  selectAge.classList.add("selector-age");

  for (let i = 0; i < 18; i++) {
    const valueOfAge = document.createElement("option");
    valueOfAge.setAttribute("value", `value${i} years old`);
    valueOfAge.innerHTML = `${i} years old`;
    if (i === 8) {
      valueOfAge.setAttribute("selected", "selected");
    }
    selectAge.append(valueOfAge);
  }
  selectAgeWrapper.append(selectAge);
  return selectAgeWrapper;
}

const selectFirst = createSelect();
filtersBlock.append(selectFirst);

function createArrow() {
  const arrow = document.createElement("p");
  const arrowInside = document.createElement("i");
  arrowInside.classList.add("arrow-down");
  arrow.classList.add("arrow-hidden");
  arrow.classList.add("arrow");
  arrow.append(arrowInside);
  return arrow;
}

const allFilters = document.querySelector(".filters-in-form");

const labelAdultsInSmallScreen = document.querySelector(".label-adults");
const labelChildInSmallScreen = document.querySelector(".label-children");
const labelRoomsInSmallScreen = document.querySelector(".label-rooms");
const arrOfLabels = [labelAdultsInSmallScreen, labelChildInSmallScreen, labelRoomsInSmallScreen];

const formAdults = document.querySelector(".form-adults");
const formChildren = document.querySelector(".form-children");
const formRooms = document.querySelector(".form-rooms");

const arrOfInputs = [formAdults, formChildren, formRooms];
arrOfInputs.forEach((inputNumbers) => {
  const textForInput = document.createElement("p");
  textForInput.classList.add("text-for-input");
  inputNumbers.append(textForInput);
});

const allInputsForNumbers = document.querySelectorAll(".text-for-input");

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

document.body.addEventListener("click", openBlockWithNumbers);

const allBtns = document.querySelectorAll(".square-button");

const formLabelAdults = document.querySelector(".form-label-adults");
const formLabelChildren = document.querySelector(".form-label-children");
const formLabelRooms = document.querySelector(".form-label-rooms");

const buttonMinusAdults = document.querySelector(".button-minus-Adults");
const buttonMinusChildren = document.querySelector(".button-minus-Children");
const buttonMinusRooms = document.querySelector(".button-minus-Rooms");
const buttonPlusAdults = document.querySelector(".button-plus-Adults");
const buttonPlusChildren = document.querySelector(".button-plus-Children");
const buttonPlusRooms = document.querySelector(".button-plus-Rooms");

const inputHiddenAdults = document.querySelector(".input-adults");
const inputHiddenChildren = document.querySelector(".input-children");
const inputHiddenRooms = document.querySelector(".input-rooms");

let counter1 = 0;
let counter2 = 0;
let counter3 = 0;

function changeCounterAdults(event) {
  if ((event.target.classList.contains("square-button"))
     || (event.target.classList.contains("minus-in-btn"))
     || (event.target.classList.contains("minus-in-btn-vertical"))) {
    if ((event.target.closest(".plus-btn-Adults")) || (event.target.closest(".minus-btn-Adults"))) {
      countAdults(event);
    }

    function countAdults(event) {
      const counterDisplayElem = document.querySelector(".counter-number-Adults");
      if ((counter1 === 0) || (counter1 <= 30)) {
        changeCounter1();
      }

      if (counter1 === -1) {
        counter1 = 0;
      }

      if (counter1 === 31) {
        counter1 = 30;
      }

      function changeCounter1() {
        if (event.target.closest(".plus-btn-Adults")) {
          counter1++;
          updateDisplay();
        }

        if (event.target.closest(".minus-btn-Adults")) {
          counter1--;
          updateDisplay();
        }
      }

      function updateDisplay() {
        if ((counter1 !== -1) && (counter1 !== 31)) {
          counterDisplayElem.innerHTML = counter1;
          formLabelAdults.innerHTML = `${counter1} Adults`;
        }

        if (counterDisplayElem.innerHTML === "0") {
          buttonMinusAdults.style.setProperty("--btn-minus-color", "#CECECE");
        }

        if ((counterDisplayElem.innerHTML > 0) && (counterDisplayElem.innerHTML < 30)) {
          buttonMinusAdults.style.setProperty("--btn-minus-color", "#3077C6");
          buttonPlusAdults.style.setProperty("--btn-plus-color", "#3077C6");
        }

        if (counter1 >= 30) {
          buttonPlusAdults.style.setProperty("--btn-plus-color", "#CECECE");
        }

        allInputsForNumbers[0].innerHTML = counterDisplayElem.innerHTML;
        allInputsForNumbers[0].classList.add("shown");

        inputHiddenAdults.innerHTML = counterDisplayElem.innerHTML;
      }
    }
  }
}

const selectAge2 = document.querySelector(".selector-age");

function changeCounterChildren(event) {
  if ((event.target.classList.contains("square-button"))
    || (event.target.classList.contains("minus-in-btn"))
    || (event.target.classList.contains("minus-in-btn-vertical"))) {
    if ((event.target.closest(".plus-btn-Children")) || (event.target.closest(".minus-btn-Children"))) {
      countChildren(event);
    }

    function countChildren(event) {
      const counterDisplayElem = document.querySelector(".counter-number-Children");

      if ((counter2 === 0) || (counter2 <= 10)) {
        changeCounter2();
      }

      if (counter2 === -1) {
        counter2 = 0;
      }

      if (counter2 === 11) {
        counter2 = 10;
        buttonPlusChildren.style.setProperty("--btn-plus-color", "#CECECE");
      }

      if (counter2 === 10) {
        buttonPlusChildren.style.setProperty("--btn-plus-color", "#CECECE");
      }

      function changeCounter2() {
        if (event.target.closest(".plus-btn-Children")) {
          counter2++;
          updateDisplay2();
        }

        if (event.target.closest(".minus-btn-Children")) {
          counter2--;
          updateDisplay2();
        }
      }

      function updateDisplay2() {
        if ((counter2 !== -1) && (counter2 !== 11)) {
          counterDisplayElem.innerHTML = counter2;
          formLabelChildren.innerHTML = `${counter2} Children`;

          const quantatyShown = counterDisplayElem.innerHTML;

          if (quantatyShown > 0) {
            textAboutChildren.style.display = "inline-flex";
            selectAge2.style.display = "inline-flex";
          }

          if (quantatyShown === "0") {
            textAboutChildren.style.display = "none";
            selectAge2.style.display = "none";
            allInputsForNumbers[1].innerHTML = quantatyShown;
            allInputsForNumbers[1].classList.add("shown");
          }

          if (quantatyShown > 1) {
            const allcreatedSelects = document.querySelectorAll(".select-age-wrap");
            allcreatedSelects.forEach((elem) => elem.parentNode.removeChild(elem));
            for (let quantatyOfSelect = 0; quantatyOfSelect < quantatyShown; quantatyOfSelect++) {
              const selectNext = createSelect();
              const arrowNext = createArrow();
              selectNext.style.display = "inline-flex";
              arrowNext.style.display = "inline-flex";
              selectNext.append(arrowNext);
              filtersBlock.append(selectNext);
            }
          }

          if (quantatyShown === "1") {
            const allcreatedSelects = document.querySelectorAll(".select-age-wrap");
            allcreatedSelects.forEach((elem) => elem.parentNode.removeChild(elem));
            const selectNext = createSelect();
            const arrowNext = createArrow();
            selectNext.style.display = "inline-flex";
            arrowNext.style.display = "inline-flex";
            selectNext.append(arrowNext);
            filtersBlock.append(selectNext);
          }

          if (quantatyShown === "0") {
            const allcreatedSelects = document.querySelectorAll(".select-age-wrap");
            allcreatedSelects.forEach((elem) => elem.parentNode.removeChild(elem));
            buttonMinusChildren.style.setProperty("--btn-minus-color", "#CECECE");

            allInputsForNumbers[1].innerHTML = quantatyShown;
            allInputsForNumbers[1].classList.add("shown");
          }

          if ((counterDisplayElem.innerHTML > 0) && (counterDisplayElem.innerHTML < 10)) {
            buttonMinusChildren.style.setProperty("--btn-minus-color", "#3077C6");
            buttonPlusChildren.style.setProperty("--btn-plus-color", "#3077C6");
          }

          if (counter2 === 2) {
            filtersBlock.classList.add("add-scroll");
          }

          if (counter2 < 2) {
            filtersBlock.classList.remove("add-scroll");
          }

          allInputsForNumbers[1].innerHTML = quantatyShown;
          allInputsForNumbers[1].classList.add("shown");

          inputHiddenChildren.innerHTML = counterDisplayElem.innerHTML;
        }
      }
    }
  }
}

function changeCounterRooms(event) {
  if ((event.target.classList.contains("square-button"))
    || (event.target.classList.contains("minus-in-btn"))
    || (event.target.classList.contains("minus-in-btn-vertical"))) {
    if ((event.target.closest(".plus-btn-Rooms")) || (event.target.closest(".minus-btn-Rooms"))) {
      countRooms(event);
    }

    function countRooms(event) {
      const counterDisplayElem = document.querySelector(".counter-number-Rooms");
      if ((counter3 === 1) || (counter3 <= 30)) {
        changeCounter3();
      }

      if (counter3 === 0) {
        counter3 = 1;
      }

      if (counter3 === 31) {
        counter3 = 30;
      }

      function changeCounter3() {
        if (event.target.closest(".plus-btn-Rooms")) {
          counter3++;
          updateDisplay3();
        }

        if (event.target.closest(".minus-btn-Rooms")) {
          counter3--;
          updateDisplay3();
        }
      }

      function updateDisplay3() {
        if ((counter3 !== -1) && (counter3 !== 31) && ((counter3 !== 0))) {
          counterDisplayElem.innerHTML = counter3;
          formLabelRooms.innerHTML = `${counter3} Rooms`;
        }

        if ((counter3 === 0) || ((counterDisplayElem.innerHTML === "1"))) {
          counterDisplayElem.innerHTML = "1";
          buttonMinusRooms.style.setProperty("--btn-minus-color", "#CECECE");
        }

        if ((counterDisplayElem.innerHTML > 1) && (counterDisplayElem.innerHTML < 30)) {
          buttonMinusRooms.style.setProperty("--btn-minus-color", "#3077C6");
          buttonPlusRooms.style.setProperty("--btn-plus-color", "#3077C6");
        }

        if (counter3 >= 30) {
          buttonPlusRooms.style.setProperty("--btn-plus-color", "#CECECE");
        }

        allInputsForNumbers[2].innerHTML = counterDisplayElem.innerHTML;
        allInputsForNumbers[2].classList.add("shown");

        inputHiddenRooms.innerHTML = counterDisplayElem.innerHTML;
      }
    }
  }
}

allBtns.forEach((button) => button.addEventListener("click", changeCounterAdults));
allBtns.forEach((button) => button.addEventListener("click", changeCounterChildren));
allBtns.forEach((button) => button.addEventListener("click", changeCounterRooms));
const event = new Event("click");
buttonPlusAdults.dispatchEvent(event);
buttonPlusAdults.dispatchEvent(event);
buttonPlusRooms.dispatchEvent(event);
buttonPlusChildren.dispatchEvent(event);
numbersWrap.dispatchEvent(event);
document.body.dispatchEvent(event);

window.addEventListener("resize", () => {
  const screenWidth = innerWidth;
  if (screenWidth < 1210) {
    formNumbers.classList.remove("hidden");
  }

  if (screenWidth >= 1210) {
    formNumbers.classList.add("hidden");
  }
});

const burger = document.querySelector(".burger-menu");

function toggleMenu() {
  burger.classList.toggle("open");
}

burger.addEventListener("click", toggleMenu);

// lesson 12.2

const destInputBigScreen = document.getElementById("user-destination");
const destInputSmallScreen = document.getElementById("user-destination-hidden");

destInputBigScreen.oninput = function () {
  destInputSmallScreen.value = destInputBigScreen.value;
};

destInputSmallScreen.oninput = function () {
  destInputBigScreen.value = destInputSmallScreen.value;
};

const adultsInputBigScreen = document.querySelector(".counter-number-Adults");
const childrenInputBigScreen = document.querySelector(".counter-number-Children");
const roomsInputBigScreen = document.querySelector(".counter-number-Rooms");

const leftArrowHomes = document.querySelector(".arrow-homes-left");
const rightArrowHomes = document.querySelector(".arrow-homes");

const searchButton = document.querySelector(".search-button");

searchButton.addEventListener("click", () => {
  const mainSectionsWrap = document.querySelector(".main-sections-wrapper");
  const availableHotelsWrap = document.querySelector(".available-hotels");

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
