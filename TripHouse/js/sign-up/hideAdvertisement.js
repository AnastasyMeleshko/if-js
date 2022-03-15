function hideAdvertisement() {
  let signUpBanner = document.querySelector('.sign-up-banner');
  signUpBanner.style.display = "none";
  let bestcontainer = document.querySelector(".best-container");
  bestcontainer.style.paddingBottom = "0";
}

export {hideAdvertisement};
