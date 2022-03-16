function setInputsForNumbers() {
  const formAdults = document.querySelector(".form-adults");
  const formChildren = document.querySelector(".form-children");
  const formRooms = document.querySelector(".form-rooms");
  const arrOfInputs = [formAdults, formChildren, formRooms];

  arrOfInputs.forEach((inputNumbers) => {
    const textForInput = document.createElement("p");
    textForInput.classList.add("text-for-input");
    inputNumbers.append(textForInput);
  });
}

export {setInputsForNumbers};
