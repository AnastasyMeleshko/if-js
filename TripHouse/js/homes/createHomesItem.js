function createHomesItem(data, index) {
  const homesItem = document.createElement("div");
  homesItem.classList.add("homes-item", "col-lg-3", "col-md-4", "col-sm-6", "col-xs-6");
  const homesItemImg = document.createElement("img");
  homesItemImg.setAttribute("src", data[index].imageUrl);
  homesItemImg.setAttribute("alt", data[index].name);
  homesItemImg.classList.add("homes-item-img");
  homesItem.append(homesItemImg);
  const homesItemTitle = document.createElement("p");
  homesItemTitle.classList.add("homes-item-title");
  const homesItemTitleText = document.createTextNode(data[index].name);
  homesItemTitle.appendChild(homesItemTitleText);
  homesItem.append(homesItemTitle);
  const homesItemLocation = document.createElement("p");
  homesItemLocation.classList.add("homes-item-location");
  const homesItemLocationText = document.createTextNode(`${data[index].city}, ${data[index].country}`);
  homesItemLocation.appendChild(homesItemLocationText);
  homesItem.append(homesItemLocation);
  return homesItem;
}

export {createHomesItem};
