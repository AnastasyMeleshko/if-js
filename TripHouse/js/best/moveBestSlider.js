import { rollSlider2 } from "./rollSlider2.js";

function moveBestSlider() {
  const arrowBestRight = document.querySelector(".arrow-best-hidden");

  let count2 = 0;
  arrowBestRight.addEventListener("click", () => {
    const sliderElements = document.querySelectorAll(".best-item");
    for (let i = 0; i < sliderElements.length; i++) {
      sliderElements[i].classList.remove("hidden-item");
      sliderElements[i].style.display = "flex";
    }
    count2++;
    if ((sliderElements.length - 4) < count2) {
      count2 = 0;
    }
    rollSlider2(count2);
  });

  const arrowBestLeft = document.querySelector(".arrow-best-left-hidden");

  arrowBestLeft.addEventListener("click", () => {
    const sliderElements = document.querySelectorAll(".best-item");
    for (let i = 0; i < sliderElements.length; i++) {
      sliderElements[i].classList.remove("hidden-item");
      sliderElements[i].style.display = "flex";
    }
    count2--;
    if (count2 < 0) {
      count2 = 4;
    }
    rollSlider2(count2);
  });
}

export {moveBestSlider};
