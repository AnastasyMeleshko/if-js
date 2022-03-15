import { formNumbers } from "./create-form-numbers.js";

function showFormNumbers() {
  const screenWidth = innerWidth;
  if (screenWidth < 1210) {
    formNumbers.classList.remove("hidden");
  }
  if (screenWidth >= 1210) {
    formNumbers.classList.add("hidden");
  }
};

export {showFormNumbers};
