function createSelect() {
  const selectAgeWrapper = document.createElement("div");
  selectAgeWrapper.classList.add("select-age-wrap");
  const selectAge = document.createElement("select");
  selectAge.setAttribute("name", "children-age");
  selectAge.classList.add("selector-age");

  for (let i = 0; i < 18; i++) {
    const valueOfAge = document.createElement("option");
    valueOfAge.setAttribute("value", `value${i} years old`);
    valueOfAge.innerHTML = `${i} years old`;
    if (i === 0) {
      valueOfAge.setAttribute("selected", "selected");
    }
    selectAge.append(valueOfAge);
  }
  selectAgeWrapper.append(selectAge);
  return selectAgeWrapper;
}

export {createSelect};
