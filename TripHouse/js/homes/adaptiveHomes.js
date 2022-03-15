function adaptiveHomes() {
  function getCoords(element) {
    const rect = element.getBoundingClientRect();
    return rect.x;
  }

  const screenWidth = innerWidth;
  const sliderElements = document.querySelectorAll(".homes-item");

  for (let i = 0; i < sliderElements.length; i++) {
    const coords = getCoords(sliderElements[i]);

    if (screenWidth >= 1200) {
      sliderElements[i].classList.remove("hidden-item");
    }

    if ((screenWidth < 1210) && (screenWidth > 768) && (coords > 700) && (coords < 1135)) {
      sliderElements[i].classList.add("hidden-item");
    }

    if ((screenWidth < 768) && (coords > 520) && (coords < 700)) {
      sliderElements[i].classList.add("hidden-item");
    }

    if ((screenWidth > 768) && sliderElements[i].classList.contains("hidden-item") && (coords > 600) && (coords < 650)) {
      sliderElements[i].classList.remove("hidden-item");
    }
  }
};

export {adaptiveHomes};
