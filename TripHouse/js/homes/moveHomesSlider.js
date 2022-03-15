import { rollSlider1 } from "./rollSlider1.js";

const arrowHomes = document.querySelector(".arrow-homes");
const arrowHomesLeft = document.querySelector(".arrow-homes-left");

function moveHomesSlider() {
  let count = 0;
  arrowHomes.addEventListener("click", () => {
    const sliderElements = document.querySelectorAll(".initial-homes-item");
    for (let i = 0; i < sliderElements.length; i++) {
      sliderElements[i].classList.remove("hidden-item");
    }
    count++;
    if ((sliderElements.length - 4) < count) {
      count = 0;
    }
    rollSlider1(count);
  });

  arrowHomesLeft.addEventListener("click", () => {
    const sliderElements = document.querySelectorAll(".initial-homes-item");
    for (let i = 0; i < sliderElements.length; i++) {
      sliderElements[i].classList.remove("hidden-item");
    }
    count--;
    if (count < 0) {
      count = 4;
    }
    rollSlider1(count);
  });
}

export {moveHomesSlider};
