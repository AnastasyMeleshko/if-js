import { slider } from "../index.js";

function rollSlider1(count) {
  slider.style.transform = `translate(-${count * (300 + 14)}px )`;
}

export {rollSlider1};
