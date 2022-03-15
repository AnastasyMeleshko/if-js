import { filtersBlock, numbersWrap, textAboutChildren } from "./create-form-numbers.js";
import { createSelect } from "./createSelect.js";
import { createArrow } from "./createArrow.js";
import { allInputsForNumbers } from "../index.js";

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
      if ((counter1 === 1) || (counter1 <= 30)) {
        changeCounter1();
      }

      if (counter1 === 0) {
        counter1 = 1;
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
        if ((counter1 !== 0) && (counter1 !== 31)) {
          counterDisplayElem.innerHTML = counter1;
          formLabelAdults.innerHTML = `${counter1} Adults`;
        }

        if (counterDisplayElem.innerHTML === "1") {
          buttonMinusAdults.style.setProperty("--btn-minus-color", "#CECECE");
        }

        if ((counterDisplayElem.innerHTML > 1) && (counterDisplayElem.innerHTML < 30)) {
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
buttonPlusRooms.dispatchEvent(event);
buttonPlusChildren.dispatchEvent(event);
buttonMinusChildren.dispatchEvent(event);
numbersWrap.dispatchEvent(event);
document.body.dispatchEvent(event);
