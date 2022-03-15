export const homesGroupItemsSlider = document.createElement("div");
homesGroupItemsSlider.classList.add("homes-group-items-slider", "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12");

function insertHomesItem(homesItemCreated) {
  homesGroupItemsSlider.append(homesItemCreated);
}

export {insertHomesItem};
