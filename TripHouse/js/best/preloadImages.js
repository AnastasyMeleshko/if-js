import { destinationBtns } from "./changeImage.js";

function preloadImages() {
  for (let i =0; i<destinationBtns.length; i++) {
    for(let j = 1; j <= 8; j++) {
      const img = new Image();

      if (destinationBtns[i] === "regions") {
        img.src = `./img/regions/${j}.png`;
      }
      if (destinationBtns[i] === "cities") {
        img.src = `./img/cities/${j}.png`;
      }
      if (destinationBtns[i] === "places") {
        img.src = `./img/places/${j}.png`;
      }
    }
  }
}

export { preloadImages };
