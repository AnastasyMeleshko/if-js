// lesson-10

//"Homes guests loves"

const data = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa  Cruz de Tenerife',
    country: 'Spain',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
    imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
  },
];

const homesGroupItems = document.getElementsByClassName("homes-group-items");
const homesGroupItemsSlider = document.createElement("div");
homesGroupItemsSlider.classList.add("homes-group-items-slider", "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12");
homesGroupItems[0].insertBefore(homesGroupItemsSlider, homesGroupItems[0].children[0]);

function createHomesItem(data, index) {
    const homesItem = document.createElement("div");
    homesItem.classList.add("homes-item", "col-lg-3", "col-md-4" , "col-sm-6", "col-xs-6");
    const homesItemImg = document.createElement("img");
    homesItemImg.setAttribute("src", data[index].imageUrl);
    homesItemImg.setAttribute("alt", data[index].name);
    homesItemImg.classList.add("homes-item-img");
    homesItem.append(homesItemImg);
    const homesItemTitle = document.createElement("p");
    homesItemTitle.classList.add("homes-item-title");
    let homesItemTitleText = document.createTextNode(data[index].name);
    homesItemTitle.appendChild(homesItemTitleText);
    homesItem.append(homesItemTitle);
    const homesItemLocation = document.createElement("p");
    homesItemLocation.classList.add("homes-item-location");
    let homesItemLocationText = document.createTextNode(`${data[index].city}, ${data[index].country}`);
    homesItemLocation.appendChild(homesItemLocationText);
    homesItem.append(homesItemLocation);
    return homesItem;
}

function insertHomesItem(homesItemCreated) {
  homesGroupItemsSlider.append(homesItemCreated);
}

function createInitialItems() {
  for (let i=0; i<data.length; i++) {
    let homesItemCreated = createHomesItem(data,i);
    insertHomesItem(homesItemCreated);
  }
}

createInitialItems();

const arrowHomes = document.querySelector(".arrow-homes");
const sliderElement = document.querySelector(".homes-item");

let count = 0;
arrowHomes.addEventListener("click", () => {
  const sliderElements = document.querySelectorAll(".homes-item");
  for (let i=0; i<sliderElements.length; i++) {
    sliderElements[i].classList.remove("hidden-item");
  }
    count ++;
    if (count === 5) {
      createInitialItems();
    }
    if (count === 8) {
      count = 0;
    }
    rollSlider();
});

const arrowHomesLeft = document.querySelector(".arrow-homes-left");

arrowHomesLeft.addEventListener("click", () => {
  const sliderElements = document.querySelectorAll(".homes-item");
  for (let i=0; i<sliderElements.length; i++) {
    sliderElements[i].classList.remove("hidden-item");
  }
  count --;
  if (count < 0) {
    count = 4;
  }
  rollSlider() ;
});

const slider = document.querySelector(".homes-group-items-slider");

function rollSlider() {
  let sliderElementWidth = sliderElement.offsetWidth;
  slider.style.transform = "translate(-" + count* (sliderElementWidth + 14)+ "px )";
}

window.addEventListener("resize", function() {

      function getCoords(element) {
        const rect = element.getBoundingClientRect();
        return rect.x;
      }

     let screenWidth = innerWidth;

     const sliderElements = document.querySelectorAll(".homes-item");

     for (let i=0; i<sliderElements.length; i++) {

       let coords = getCoords(sliderElements[i]);

       if (screenWidth >= 1200) {
         sliderElements[i].classList.remove("hidden-item");
       }

       if ((screenWidth < 1210) && (screenWidth > 768) && (coords > 700) && (coords < 1135)) {
         sliderElements[i].classList.add("hidden-item");
       }

       if ((screenWidth <  768) && (coords > 520) && (coords < 700)) {
         sliderElements[i].classList.add("hidden-item");
       }

       if ((screenWidth >  768) && sliderElements[i].classList.contains("hidden-item") && (coords > 600) && (coords < 650)) {
         sliderElements[i].classList.remove("hidden-item");
       }

     }

 }, false);















