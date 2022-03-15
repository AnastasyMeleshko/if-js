export const slider2 = document.querySelector(".best-items-slider");

function rollSlider2(count2) {
  slider2.style.transform = `translate(-${count2 * (297 + 14)}px )`;
}

export {rollSlider2};
