import { arrowBest } from "../index.js";
import { slider2 } from "./rollSlider2.js";

const bestItemsSecondBlocks = document.querySelectorAll(".best-items-second-line");

function hideBestBlock(e) {

  if ((e.target.classList.contains("arrow-element")) ||
    (e.target.classList.contains("arrow-best")) ||
    (e.target.classList.contains("arrow-use")) ||
    (e.target.classList.contains("arrow-icon")) ||
    (e.target.classList.contains("best-arrow-icon")) ){

    slider2.style.flexWrap = "wrap";

    bestItemsSecondBlocks.forEach((elem) => {
      if (elem.style.display !== "none") {
        elem.style.display = "none";
        arrowBest.classList.remove("rotate-arrow");
      } else {
        elem.style.display = "flex";
        arrowBest.classList.add("rotate-arrow");
      }
    })
  }
}

export {hideBestBlock};
