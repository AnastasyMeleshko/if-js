function createArrow() {
  const arrow = document.createElement("p");
  const arrowInside = document.createElement("i");
  arrowInside.classList.add("arrow-down");
  arrow.classList.add("arrow-hidden");
  arrow.classList.add("arrow");
  arrow.append(arrowInside);
  return arrow;
}

export {createArrow};
