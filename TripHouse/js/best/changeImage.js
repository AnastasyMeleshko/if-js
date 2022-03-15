const regions = ["Maldives", "Spain", "Norway", "Island", "Japan", "France", "Scottland", "Russia"];
const cities = ["Berlin, Germany", "Paris, France", "Budapest, Hungary", "London, United Kingdom", "Barcelona, Spain", "Tbilisi, Georgia", "Moscow, Russia", "Amsterdam, Netherlands"];
const places = ["Edinburgh Castle, Edinburgh, United Kingdom", "Neuschwanstein, Fussen, Germany", "Big Ben, London, United Kingdom", "Colosseum, Roma, Italy", "Matterhorn, Zermatt, Switzerland", "Morskie Oko, Poland", "Krka, Croatia", "Cabo da roca, Sintra, Portugal"];
export const destinationBtns = ["regions", "cities", "places"];

function changeImage(event) {
  if(event.target.classList.contains('best-button')) {
    const allDestinationImages = document.querySelectorAll('.best-item-img');
    const allBestItemTitles = document.querySelectorAll('.best-item-title');
    const buttonRegions = document.querySelector('.best-button-one');
    const buttonCities = document.querySelector('.best-button-two');
    const buttonPlaces = document.querySelector('.best-button-three');
    const buttonPlaces2 = document.querySelector('.best-button-three-hidden');

    allDestinationImages.forEach((img, index) => {
      if (event.target.dataset.button === "regions") {
        img.src = `./img/regions/${index + 1}.png`;
        event.target.classList.add('active');
      } else {
        buttonRegions.classList.remove("active");
      }

      if (event.target.dataset.button === "cities") {
        img.src = `./img/cities/${index + 1}.png`;
        event.target.classList.add('active');
      } else {
        buttonCities.classList.remove('active');
      }

      if (event.target.dataset.button === "places") {
        img.src = `./img/places/${index + 1}.png`;
        event.target.classList.add('active');
      } else {
        buttonPlaces.classList.remove('active');
        buttonPlaces2.classList.remove('active');
      }
    });

    allBestItemTitles.forEach((title, index) => {
      if (event.target.dataset.button === "regions") {
        title.innerHTML = `${regions[index]}`;
      }

      if (event.target.dataset.button === "cities") {
        title.innerHTML = `${cities[index]}`
      }

      if (event.target.dataset.button === "places") {
        title.innerHTML = `${places[index]}`
      }
    });
  }
}

export {changeImage};
