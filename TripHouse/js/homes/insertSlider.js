import { homesGroupItemsSlider } from "./insertHomesItem.js";

function insertSlider() {
  const homesGroupItems = document.getElementsByClassName("homes-group-items");
  homesGroupItems[0].insertBefore(homesGroupItemsSlider, homesGroupItems[0].children[0]);
}

export {insertSlider};
