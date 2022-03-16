import { openBlockWithNumbers } from "./top-section/openBlockWithNumbers.js";
import { setInputsForNumbers } from "./top-section/setInputsForNumbers.js";
import { burger, toggleMenu } from "./top-section/toggleMenu.js";
import { showFormNumbers } from "./top-section/showFormNumbers.js";
import { connectDestInputs } from "./top-section/connectDestInputs.js";

import { createInitialItems } from "./homes/createInitialItems.js";
import { insertSlider } from "./homes/insertSlider.js";
import { moveHomesSlider } from "./homes/moveHomesSlider.js";
import { adaptiveHomes } from "./homes/adaptiveHomes.js";

import { preloadImages } from "./best/preloadImages.js";
import { changeImage } from "./best/changeImage.js";
import { hideBestBlock } from "./best/hideBestBlock.js";
import { moveBestSlider } from "./best/moveBestSlider.js";
import { adaptiveBest } from "./best/adaptiveBest.js";

import { hideAdvertisement } from "./sign-up/hideAdvertisement.js";

insertSlider();
createInitialItems();
moveHomesSlider();
export const slider = document.querySelector(".homes-group-items-slider");
window.addEventListener("resize", adaptiveHomes);

setInputsForNumbers();
export const allInputsForNumbers = document.querySelectorAll(".text-for-input");
document.body.addEventListener("click", openBlockWithNumbers);
window.addEventListener("resize", showFormNumbers);
burger.addEventListener("click", toggleMenu);
connectDestInputs();

const signUpCross = document.querySelector('.sign-up-cross');
const signUpCrossHidden = document.querySelector('.sign-up-hidden-cross');
signUpCross.addEventListener('click', hideAdvertisement);
signUpCrossHidden.addEventListener('click', hideAdvertisement);

preloadImages();
const bestButtons = document.querySelector('.best-nav');
bestButtons.addEventListener("click", changeImage);
export const arrowBest = document.querySelector(".arrow-best");
arrowBest.addEventListener("click", hideBestBlock);
window.addEventListener("resize", adaptiveBest);
moveBestSlider();
