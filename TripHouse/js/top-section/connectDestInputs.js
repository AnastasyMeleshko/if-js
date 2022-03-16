function connectDestInputs() {
  const destInputBigScreen = document.getElementById("user-destination");
  const destInputSmallScreen = document.getElementById("user-destination-hidden");

  destInputBigScreen.oninput = function () {
    destInputSmallScreen.value = destInputBigScreen.value;
  };

  destInputSmallScreen.oninput = function () {
    destInputBigScreen.value = destInputSmallScreen.value;
  };
}

export {connectDestInputs};
