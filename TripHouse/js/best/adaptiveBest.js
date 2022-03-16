import { rollSlider2, slider2 } from "./rollSlider2.js";
import { arrowBest } from "../index.js";

function adaptiveBest() {
  function getCoords(element) {
    const rect = element.getBoundingClientRect();
    return rect.x;
  }

  const screenWidth = innerWidth;

  const sliderBestElements = document.querySelectorAll(".best-item");

  for (let i = 0; i < sliderBestElements.length; i++) {
    const coords = getCoords(sliderBestElements[i]);

    if ((screenWidth < 1280) && (screenWidth > 1210)) {
      slider2.style.flexWrap = "nowrap";
    }

    if ((screenWidth <= 1210) && (screenWidth > 768) && (coords > 700) && (coords < 1135)) {
      sliderBestElements[i].classList.add("hidden-item");
      sliderBestElements[i].style.display = "flex";
    }

    if (screenWidth >= 1200) {
      sliderBestElements[i].classList.remove("hidden-item");
      sliderBestElements[i].style.display = "flex";
      arrowBest.classList.add("rotate-arrow");
      let count2 = 0;
      rollSlider2(count2);
    }

    if ((screenWidth < 768) && (coords > 520) && (coords < 700)) {
      sliderBestElements[i].classList.add("hidden-item");
      sliderBestElements[i].style.display = "flex";
    }

    if ((screenWidth > 768) && sliderBestElements[i].classList.contains("hidden-item") && (coords > 600) && (coords < 650)) {
      sliderBestElements[i].classList.remove("hidden-item");
      sliderBestElements[i].style.display = "flex";
    }
  }
};

export {adaptiveBest};
