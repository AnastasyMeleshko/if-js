// //lesson - 2
// //6.Работа с переменными:
// let user = "John Doe";
// console.log(user);
// let student = "Anastasya Meleshko";
// console.log(student);
// user = student;
// // Anastasya Meleshko
// console.log(user);
// //7. Работа с примитивами:
// let test = 1;
// test = 2;
// test = test + "1";
// // test = 21
// console.log(test);
// test = test - 1;
// // 20
// console.log(test);
// test = Boolean(test);
// // true
// console.log(test);
// //Дан массив [2, 3, 5, 8]. С помощью цикла for найдите произведение элементов этого массива.
// // Результат выведите в консоль.
// const array = [2, 3, 5, 8];
// let multiply = 1;
// for (let i = 0; i < array.length; i++) {
//     multiply = multiply * array[i];
// }
// console.log(multiply);
// //Дан массив [2, 5, 8, 15, 0, 6, 20, 3]. С помощью цикла for и оператора if выведите в консоль
// // те элементы массива, которые больше 5-ти, но меньше 10-ти.
// const initialArray = [2, 5, 8, 15, 0, 6, 20, 3];
// for (let i = 0; i < initialArray.length; i++) {
//     if (initialArray[i] > 5 && initialArray[i] < 10) {
//         console.log(initialArray[i]);
//     }
// }
// //Дан массив [2, 5, 8, 15, 0, 6, 20, 3].
// // С помощью цикла for и оператора if выведите в консоль четные элементы массива.
// const arr = [2, 5, 8, 15, 0, 6, 20, 3];
// console.log("Дан массив: " + arr)
// console.log("Четные элементы массива: ")
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }

// lesson - 3
// 6.Функция palindrome (Слово палиндром может читаться
// справа-налево и слева-направо одинаково.
// Прим "шалаш".):
// - создайте функцию `palindrome`, которая будет возвращать bool значение в зависимости от того,
// является ли переданное функции слово палиндромом или нет.
//
// const initialStr = prompt("Введите слово для проверки является ли оно паллиндромом.
// Выведет true если да, false - если нет");
// let str = initialStr.toUpperCase().replace(/\s/g, '');
//
// function palindrome(str) {
//     if (str.length === 1) {
//         return true;
//     }
//     if (str.length === 2) {
//         return str[0] === str[1];
//     }
//     if (str[0] === str.slice(-1)) {
//         return palindrome(str.slice(1, -1));
//     }
//     return false;
// }
//
// console.log(palindrome(str));
//
// // 7. Функция min(a, b) и функция max(a,b):
// // - напишите функцию `min(a,b)`, которая возвращает меньшее из чисел;
//
// function min(a, b) {
//     if (a === b) {
//         return "Числа равны";
//     } else if (a < b) {
//         return ("Меньшее из чисел: " + a);
//     }
//     return ("Меньшее из чисел: " + b);
// }
//
// console.log(min(45, 2));
//
// // - напишите функцию `max(a,y)`, которая возвращает большее из чисел;
//
// function max(a, y) {
//     if (a === y) {
//         return "Числа равны";
//     } else if (a > y) {
//         return ("Наибольшее из чисел: " + a);
//     }
//     return ("Наибольшее из чисел: " + y);
// }
//
// console.log(max(56, 33));
// //
// // // - попробуйте переписать функцию, используя тернарный оператор.
// //
// function minimum(a, b) {
//     if (a === b) {
//         return "Числа равны";
//     } else {
//         (a < b) ? (console.log("Меньшее из чисел: " + a)) :
//         (console.log("Меньшее из чисел: " + b));
//     }
// }
//
// minimum(4, 566);
//
// function maximum(a, b) {
//     if (a === b) {
//         return "Числа равны";
//     } else {
//         (a > b) ? (console.log("Большее из чисел: " + a)) :
//         (console.log("Большее из чисел: " + b));
//     }
// }
//
// maximum(5, 35);
//
// // 8. Замена элементов массива:
// // - создайте массив с десятью случайными элементами от 0 до 100;
// // - напишите функцию, которая будет заменять все 0 на строку 'zero';
// // - выведите полученный массив в консоль
// // (пример: `[12, 53, '2zero', 18, 22, '1zerozero', 43, 57, '5zero', 1]`).
//
// //1 способ (type of all items of array is string)
//
// let initialArray = [];
// let initialString = "";
// for (let i=0; i<10; i++) {
//     initialArray.push((Math.floor(Math.random() * 101)));
// }
// console.log("Исходный массив: ");
// console.log(initialArray);
// initialString = initialArray.join(" ");
// let replace = /0/gi;
// let newString= initialString.replace(replace, 'zero');
// console.log("Полученный массив: ");
// console.log(newString.split(" "));
//
// // 2 способ (type for all items is number, but for items with 0 - string)
//
// let newMas = [];
// const lowLimit = 0;
// const highLimit = 100;
// for(let i = 0; i < 10; i++){
//     newMas.push(Math.floor(Math.random() * (highLimit + 1) + Math.ceil(lowLimit)));
// }
// console.log("Массив из 10-и случайных чисел от 0 до 100: ");
// console.log(newMas);
// function funZero(newArray){
//     let zeroMas = [];
//     for(let elementArray of newArray){
//         if(elementArray.toString().includes("0")){
//             elementArray = elementArray.toString();
//             let reg = 0;
//             elementArray = elementArray.replaceAll(reg, "zero");
//         }
//         zeroMas.push(elementArray);
//     }
//     return zeroMas;
// }
// console.log("Замена нулей на 'zero' при помощи функции: ");
// console.log(funZero(newMas));

// lesson-4

// 5.Напишите функцию sum, которая возвращает сумму чисел следующим образом:
// console.log(sum(5)(2)); // 7
//
// function curry(func) {
//   return function (num1) {
//     return function (num2) {
//       return func(num1, num2);
//     };
//   };
// }
// function sum(num1, num2) {
//   return num1 + num2;
// }
// const curriedSum = curry(sum);
// console.log(curriedSum(5)(2));
// module.exports = sum;

// Покрасьте абзацы по клику (событие click):
// даны 3 абзаца:
// <p id="text1">Text 1</p>
// <p id="text2">Text 2</p>
// <p id="text3">Text 3</p>
// дан массив цветов:
// const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
// по первому нажатию на абзац он должен покраситься в первый цвет из массива,
// по второму нажатию - во второй и так далее;
// цвета из массива меняются бесконечно;
// все абзацы работают независимо.

// 1 способ

// const colors = ["magenta", "cyan", "firebrick", "springgreen", "skyblue"];
// const firstLine = document.getElementById("text1");
// const secondLine = document.getElementById("text2");
// const thirdLine = document.getElementById("text3");
// function baseColor(element) {
//   element.style.color = colors[0];
// }
// function changeColor(element) {
//   if (element.style.color === colors[0]) {
//     element.style.color = colors[1];
//   } else if (element.style.color === colors[1]) {
//     element.style.color = colors[2];
//   } else if (element.style.color === colors[2]) {
//     element.style.color = colors[3];
//   } else if (element.style.color === colors[3]) {
//     element.style.color = colors[4];
//   } else {
//     baseColor(element);
//   }
// }
//
// firstLine.addEventListener("click", () => {
//   baseColor(firstLine);
//   firstLine.addEventListener("click", () => {
//     changeColor(firstLine);
//   });
// });
// secondLine.addEventListener("click", () => {
//   baseColor(secondLine);
//   secondLine.addEventListener("click", () => {
//     changeColor(secondLine);
//   });
// });
// thirdLine.addEventListener("click", () => {
//   baseColor(thirdLine);
//   thirdLine.addEventListener("click", () => {
//     changeColor(thirdLine);
//   });
// });
//
// // 2 способ
//
// const arrColors = ["magenta", "cyan", "firebrick", "springgreen", "skyblue"];
//
// const textFirst = document.getElementById("text1");
// const textMiddle = document.getElementById("text2");
// const textLast = document.getElementById("text3");
//
// function changeColor2() {
//   let color = 0;
//   return function () {
//     this.style.color = arrColors[color];
//     color++;
//     if (color === arrColors.length) {
//       color = 0;
//     }
//   };
// }
//
// textFirst.addEventListener("click", changeColor2());
// textMiddle.addEventListener("click", changeColor2());
// textLast.addEventListener("click", changeColor2());

// lesson-5

// 5.Преобразование формата даты:
// в переменной date лежит дата в формате '2020-11-26';
// преобразуйте эту дату в формат '26.11.2020';
// функция должна быть универсальной, т.е. принимать любую дату и приводить
// ее к поставленному в задании формату.
//
// const date = "2020-12-01";
// function changeFormat(initialDate) {
//   const reg = /\d{4}.\d{2}.\d{2}/g;
//   if (reg.test(initialDate)) {
//     const year = initialDate.slice(0, 4);
//     const month = initialDate.slice(5, 7);
//     const day = initialDate.slice(8, 10);
//     return ((`${day}.${month}.${year}`));
//   }
//   return "Формат даты не корректен";
// }
// console.log(changeFormat(date));
// // module.exports = changeFormat;
//
// // 6. Поиск объектов размещения:
// // дан массив;
// // напишите функцию поиска, которая будет принимать строку;
// // по полученной строке найдите все совпадения в массива;
// // верните список строк в формате: страна, город, отель.
// const data = [
//   {
//     country: "Russia",
//     city: "Saint Petersburg",
//     hotel: "Hotel Leopold",
//   },
//   {
//     country: "Spain",
//     city: "Santa Cruz de Tenerife",
//     hotel: "Apartment Sunshine",
//   },
//   {
//     country: "Slowakia",
//     city: "Vysokie Tatry",
//     hotel: "Villa Kunerad",
//   },
//   {
//     country: "Germany",
//     city: "Berlin",
//     hotel: "Hostel Friendship",
//   },
//   {
//     country: "Indonesia",
//     city: "Bali",
//     hotel: "Ubud Bali Resort&SPA",
//   },
//   {
//     country: "Netherlands",
//     city: "Rotterdam",
//     hotel: "King Kong Hostel",
//   },
//   {
//     country: "Marocco",
//     city: "Ourika",
//     hotel: "Rokoko Hotel",
//   },
//   {
//     country: "Germany",
//     city: "Berlin",
//     hotel: "Hotel Rehberge Berlin Mitte",
//   },
// ];
//
// const newData = [];
// const resultOfSearch = [];
// for (let i = 0; i < data.length; i++) {
//   newData.push(`${data[i].country}, ${data[i].city}, ${data[i].hotel}`);
// }
// function search(str) {
//   for (let j = 0; j < newData.length; j++) {
//     if ((newData[j].toLowerCase()).includes(str.toLowerCase())) {
//       resultOfSearch.push(newData[j]);
//     }
//   }
//   if (resultOfSearch.length !== 0) {
//     console.log(`Результат по запросу ${str}: `);
//     console.log(resultOfSearch);
//   } else {
//     console.log(`Совпадений по запросу ${str} нет`);
//   }
// }
//
// search("hotel");

// lesson -6

// 5.Функция palindrome (Слово палиндром может читаться справа-налево и слева-направо одинаково.
// Прим "шалаш".):
// создайте функцию palindrome, которая будет возвращать bool значение в зависимости от того,
// является ли переданное функции слово палиндромом или нет;
// теперь уже зная как работать со строками и массивами запишите реализацию
// этого метода в одну строку.

function palindrome(str) {
  str = str.toLowerCase().replace(/\s/g, "");
  return str === str.split("").reverse().join("");
}

console.log(`шалаш ${palindrome("шалаш")}`);
console.log(`паста ${palindrome("паста")}`);
console.log(`мадам ${palindrome("мадам")}`);
console.log(`Анна ${palindrome("Анна")}`);

// 6. Поиск объектов размещения: дан массив;
// напишите функцию поиска, которая будет принимать строку;
// по полученной строке найдите все совпадения в массиве по любому из полей;
// верните масcив строк в формате: страна, город, отель;
// зная как работать с массивами, сократите вашу функцию избавившись от цикла for.
const hotels = [
  {
    name: "Hotel Leopold",
    city: "Saint Petersburg",
    country: "Russia",
  },
  {
    name: "Apartment Sunshine",
    city: "Santa Cruz de Tenerife",
    country: "Spain",
  },
  {
    name: "Villa Kunerad",
    city: "Vysokie Tatry",
    country: "Slowakia",
  },
  {
    name: "Hostel Friendship",
    city: "Berlin",
    country: "Germany",
  },
  {
    name: "Radisson Blu Hotel",
    city: "Kyiv",
    country: "Ukraine",
  },
  {
    name: "Paradise Hotel",
    city: "Guadalupe",
    country: "Mexico",
  },
  {
    name: "Hotel Grindewald",
    city: "Interlaken",
    country: "Switzerland",
  },
  {
    name: "The Andaman Resort",
    city: "Port Dickson",
    country: "Malaysia",
  },
  {
    name: "Virgin Hotel",
    city: "Chicago",
    country: "USA",
  },
  {
    name: "Grand Beach Resort",
    city: "Dubai",
    country: "United Arab Emirates",
  },
  {
    name: "Shilla Stay",
    city: "Seoul",
    country: "South Korea",
  },
  {
    name: "San Firenze Suites",
    city: "Florence",
    country: "Italy",
  },
  {
    name: "The Andaman Resort",
    city: "Port Dickson",
    country: "Malaysia",
  },
  {
    name: "Black Penny Villas",
    city: "BTDC, Nuca Dua",
    country: "Indonesia",
  },
  {
    name: "Koko Hotel",
    city: "Tokyo",
    country: "Japan",
  },
  {
    name: "Ramada Plaza",
    city: "Istanbul",
    country: "Turkey",
  },
  {
    name: "Waikiki Resort Hotel",
    city: "Hawaii",
    country: "USA",
  },
  {
    name: "Puro Hotel",
    city: "Krakow",
    country: "Poland",
  },
  {
    name: "Asma Suites",
    city: "Santorini",
    country: "Greece",
  },
  {
    name: "Cityden Apartments",
    city: "Amsterdam",
    country: "Netherlands",
  },
  {
    name: "Mandarin Oriental",
    city: "Miami",
    country: "USA",
  },
  {
    name: "Concept Terrace Hotel",
    city: "Rome",
    country: "Italy",
  },
  {
    name: "Ponta Mar Hotel",
    city: "Fortaleza",
    country: "Brazil",
  },
  {
    name: "Four Seasons Hotel",
    city: "Sydney",
    country: "Australia",
  },
  {
    name: "Le Meridien",
    city: "Nice",
    country: "France",
  },
  {
    name: "Apart Neptun",
    city: "Gdansk",
    country: "Poland",
  },
  {
    name: "Lux Isla",
    city: "Ibiza",
    country: "Spain",
  },
  {
    name: "Nox Hostel",
    city: "London",
    country: "UK",
  },
  {
    name: "Leonardo Vienna",
    city: "Vienna",
    country: "Austria",
  },
  {
    name: "Adagio Aparthotel",
    city: "Edinburgh",
    country: "UK",
  },
  {
    name: "Steigenberger Hotel",
    city: "Hamburg",
    country: "Germany",
  },
];
const formatStr = (searchRequest) => Object.values(searchRequest).reverse().join(", ");
function getSearchData(str, hotels) {
  const reg = new RegExp(str, "i");
  const result = hotels
    .filter((searchRequest) => reg.test(formatStr(searchRequest)))
    .map((searchRequest) => formatStr(searchRequest));
  if (result.length === 0) {
    return "Совпадение не найдено";
  }
  return result;
}

console.log(getSearchData("Germany", hotels));

// 2 способ

function searchInArray(str) {
  str = str.toLowerCase();
  return hotels.reduce((acc, item) => {
    if (Object.values(item).toString().toLowerCase().includes(str)) {
      acc.push(`${item.country}, ${item.city}, ${item.name}`);
    }
    return acc;
  }, []);
}

console.log(searchInArray("Germany"));

// 7.Сопоставте страны с городами из массива:
// дан массив;
// напишите функцию, которая выберет все уникальные страны и сопоставит с ними города;
// в консоли должен быть выведен примерно такой результат:
// {
// Australia: ['Sydney'],
// Germany: ['Berlin', 'Hamburg'],
// Italy: ['Florence', 'Rome'],
// USA: ['Chicago', 'Hawaii', 'Miami'],
// Ukraine: ['Kyiv']
// }
const hotels2 = [
  {
    name: "Hotel Leopold",
    city: "Saint Petersburg",
    country: "Russia",
  },
  {
    name: "Apartment Sunshine",
    city: "Santa Cruz de Tenerife",
    country: "Spain",
  },
  {
    name: "Villa Kunerad",
    city: "Vysokie Tatry",
    country: "Slowakia",
  },
  {
    name: "Hostel Friendship",
    city: "Berlin",
    country: "Germany",
  },
  {
    name: "Radisson Blu Hotel",
    city: "Kyiv",
    country: "Ukraine",
  },
  {
    name: "Paradise Hotel",
    city: "Guadalupe",
    country: "Mexico",
  },
  {
    name: "Hotel Grindewald",
    city: "Interlaken",
    country: "Switzerland",
  },
  {
    name: "The Andaman Resort",
    city: "Port Dickson",
    country: "Malaysia",
  },
  {
    name: "Virgin Hotel",
    city: "Chicago",
    country: "USA",
  },
  {
    name: "Grand Beach Resort",
    city: "Dubai",
    country: "United Arab Emirates",
  },
  {
    name: "Shilla Stay",
    city: "Seoul",
    country: "South Korea",
  },
  {
    name: "San Firenze Suites",
    city: "Florence",
    country: "Italy",
  },
  {
    name: "The Andaman Resort",
    city: "Port Dickson",
    country: "Malaysia",
  },
  {
    name: "Black Penny Villas",
    city: "BTDC, Nuca Dua",
    country: "Indonesia",
  },
  {
    name: "Koko Hotel",
    city: "Tokyo",
    country: "Japan",
  },
  {
    name: "Ramada Plaza",
    city: "Istanbul",
    country: "Turkey",
  },
  {
    name: "Waikiki Resort Hotel",
    city: "Hawaii",
    country: "USA",
  },
  {
    name: "Puro Hotel",
    city: "Krakow",
    country: "Poland",
  },
  {
    name: "Asma Suites",
    city: "Santorini",
    country: "Greece",
  },
  {
    name: "Cityden Apartments",
    city: "Amsterdam",
    country: "Netherlands",
  },
  {
    name: "Mandarin Oriental",
    city: "Miami",
    country: "USA",
  },
  {
    name: "Concept Terrace Hotel",
    city: "Rome",
    country: "Italy",
  },
  {
    name: "Ponta Mar Hotel",
    city: "Fortaleza",
    country: "Brazil",
  },
  {
    name: "Four Seasons Hotel",
    city: "Sydney",
    country: "Australia",
  },
  {
    name: "Le Meridien",
    city: "Nice",
    country: "France",
  },
  {
    name: "Apart Neptun",
    city: "Gdansk",
    country: "Poland",
  },
  {
    name: "Lux Isla",
    city: "Ibiza",
    country: "Spain",
  },
  {
    name: "Nox Hostel",
    city: "London",
    country: "UK",
  },
  {
    name: "Leonardo Vienna",
    city: "Vienna",
    country: "Austria",
  },
  {
    name: "Adagio Aparthotel",
    city: "Edinburgh",
    country: "UK",
  },
  {
    name: "Steigenberger Hotel",
    city: "Hamburg",
    country: "Germany",
  },
];

// 1 способ

const resultObj = {};
for (const hotelData of hotels2) {
  if (!Object.keys(resultObj).includes(hotelData.country)) {
    resultObj[hotelData.country] = [];
  }
}
for (const hotelData of hotels2) {
  if (!Object.values(resultObj).includes(hotelData.city)) {
    if (!resultObj[hotelData.country].includes(hotelData.city)) {
      resultObj[hotelData.country].push(hotelData.city);
    }
  }
}

console.log(resultObj);

// 2 способ (сложный и не очень хороший)

// const cityArray = [];
// for (const hotelData of hotels2) {
//   if (!cityArray.includes(hotelData.city)) {
//     cityArray.push(hotelData.city);
//   }
// }
//
// const countryArray = [];
// for (const hotelData of hotels2) {
//   if (!countryArray.includes(hotelData.country)) {
//     countryArray.push(hotelData.country);
//   }
// }
// const countryCityArray = [];
// for (let i = 0; i < hotels2.length; i++) {
//   for (let j = 0; j < cityArray.length; j++) {
//     if (hotels2[i].city.includes(cityArray[j])) {
//       countryCityArray.push(`${hotels2[i].country} ${cityArray[j]}`);
//     }
//   }
// }
//
// const resultObj = {};
// for (let i = 0; i < countryCityArray.length; i++) {
//   for (let j = 0; j < countryArray.length; j++) {
//     if (countryCityArray[i].includes(countryArray[j])) {
//       const key = countryArray[j];
//       resultObj[key] += `${countryCityArray[i].slice(countryArray[j].length + 1)} `;
//     }
//   }
// }
//
// for (key in resultObj) {
//   resultObj[key] = resultObj[key].slice(9).replace(/\s$/gi, "");
// }
//
// console.log(resultObj);

// 3 способ
const separatedBetweenCounties = {};
hotels2.forEach((el) => {
  if (separatedBetweenCounties[el.country] && !separatedBetweenCounties[el.country].includes(el.city)) {
    separatedBetweenCounties[el.country].push(el.city);
  } else {
    separatedBetweenCounties[el.country] = [el.city];
  }
});
console.log(separatedBetweenCounties);

// *Календарный месяц:
// создайте функцию getCalendarMonth, которая принимает количество дней в месяце,
// количество дней в неделе и день недели на который выпадает первый день месяца;
// свободные дни (до первого дня месяца и после последнего дня месяца, пока считаем,
// что в каждом месяце равное количество дней) заполните днями предыдущего месяца или последующего;
// выбросьте ошибку, если переданный день недели больше, чем количество дней.
// // пример:
// const daysInMonth = 30;
// const daysInWeek = 7;
// const dayOfWeek = 4; // в моем примере понедельник равен 0. У вас может отличаться
// const calendarMonth = getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek);
//
// console.log(calendarMonth);
// /* result:
// [
//   [27, 28, 29, 30, 1, 2, 3]
//   [4, 5, 6, 7, 8, 9, 10]
//   [11, 12, 13, 14, 15, 16, 17]
//   [18, 19, 20, 21, 22, 23, 24]
//   [25, 26, 27, 28, 29, 30, 1]
// ]
// const daysInMonth = 30;
// const daysInWeek = 7;
// const dayOfWeek = 3;
// const calendarMonth = getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek);
//
const result = [];
function getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek) {
  if (dayOfWeek > daysInWeek - 1) {
    throw `${dayOfWeek} - введите корректное число старта недели от 0 до 6, где 0 - понедельник`;
  } else {
    let quantatyOfWeeks = Math.ceil(daysInMonth / daysInWeek);
    if (daysInMonth === 28) {
      quantatyOfWeeks = 5;
    }
    const arrayOfDays = [];
    for (let i = 1; i <= daysInMonth; i++) {
      arrayOfDays.push(String(i));
    }
    const initialArray = [...arrayOfDays];
    if (dayOfWeek !== 0) {
      result[0] = (`${arrayOfDays.slice(-dayOfWeek)},${arrayOfDays.slice(0, daysInWeek - dayOfWeek)}`).split(",");
    } else {
      result[0] = arrayOfDays.slice(0, daysInWeek);
    }
    for (let i = 1; i < quantatyOfWeeks; i++) {
      result[i] = arrayOfDays;
    }
    for (let i = 1; i < quantatyOfWeeks; i++) {
      const lastDayOfPrevWeek = result[i - 1].at(-1);
      const lastDayOfPrevIndex = result[i].indexOf(lastDayOfPrevWeek);
      result[i] = result[i].slice(lastDayOfPrevIndex + 1, lastDayOfPrevIndex + 1 + daysInWeek);
      if (result[i].length < daysInWeek) {
        const diffInDaysWithWeek = daysInWeek - result[i].length;
        for (let j = 0; j < diffInDaysWithWeek; j++) {
          result[i].push(initialArray[j]);
        }
      }
    }
    console.log(result);
  }
}
// число старта недели от 0 до 6, где 0 - понедельник
getCalendarMonth(30, 7, 5);

// lesson 7
// Напишите функция deepEqual, которая сможет сравнивать 2 объекта
// с разными уровнями вложенности. Напимер:
const obj1 = {
  a: "a",
  b: {
    a: "a",
    b: "b",
    c: {
      a: 1,
    },
  },
};
const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: "b",
    a: "a",
  },
  a: "a",
};
const obj3 = {
  a: {
    c: {
      a: "a",
    },
    b: "b",
    a: "a",
  },
  b: "b",
};

// 1 способ

const deepEqual = (object1, object2) => {
  const obj1 = JSON.stringify(object1).split("").sort().join("");
  const obj2 = JSON.stringify(object2).split("").sort().join("");
  console.log(obj1 === obj2);
};

deepEqual(obj1, obj2); // true
deepEqual(obj1, obj3); // false

// 2 способ

function isEqual(object1, object2) {
  const arr1 = Object.getOwnPropertyNames(object1);
  const arr2 = Object.getOwnPropertyNames(object2);
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    const arr = arr1[i];
    const bothAreObjects = typeof (object1[arr]) === "object" && typeof (object2[arr]) === "object";
    if ((!bothAreObjects && (object1[arr] !== object2[arr]))
      || (bothAreObjects && !isEqual(object1[arr], object2[arr]))) {
      return false;
    }
  }
  return true;
}

console.log(isEqual(obj1, obj2)); // true
console.log(isEqual(obj1, obj3)); // false

// lesson 8

const studentsData = [
  {
    firstName: "Василий",
    lastName: "Петров",
    admissionYear: 2019,
    courseName: "Java",
  },
  {
    firstName: "Иван",
    lastName: "Иванов",
    admissionYear: 2018,
    courseName: "JavaScript",
  },
  {
    firstName: "Александр",
    lastName: "Федоров",
    admissionYear: 2017,
    courseName: "Python",
  },
  {
    firstName: "Николай",
    lastName: "Петров",
    admissionYear: 2019,
    courseName: "Android",
  },
];

// 1 способ

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const currentYear = new Date().getFullYear();

class Student extends User {
  constructor(admissionYear, courseName) {
    super();
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }

  get course() {
    const courseResult = currentYear - this.admissionYear;
    return courseResult;
  }
}

const arrayOfStudents = [];
for (let i = 0; i < studentsData.length; i++) {
  const student = new Student(studentsData[i].admissionYear, studentsData[i].courseName);
  student.firstName = studentsData[i].firstName;
  student.lastName = studentsData[i].lastName;
  arrayOfStudents.push(student);
}

class Students {
  constructor(students) {
    this.students = students;
  }

  getInfo() {
    const resultArray = [];
    for (let i = 0; i < this.students.length; i++) {
      resultArray.push(`${this.students[i].fullName} - ${this.students[i].courseName}, ${this.students[i].course} курс`);
    }
    resultArray.sort((a, b) => {
      const char1 = a.substr(a.search(/\d/));
      const char2 = b.substr(b.search(/\d/));
      return parseInt(char1) - parseInt(char2);
    });
    return resultArray;
  }
}

const studentsGroup = new Students(arrayOfStudents);
console.log(studentsGroup.getInfo());

// 2 способ

class User2 {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  get fullName() {
    return `${this.firstname} ${this.lastname}`;
  }
}

class Student2 extends User2 {
  constructor({
    firstName, lastName, admissionYear, courseName,
  }) {
    super(firstName, lastName);
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }

  get fullname() {
    return super.fullName;
  }

  get course() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.admissionYear;
  }
}

class Students2 {
  constructor(students) {
    this.students = students;
  }

  sortByCourse = () => this.students.sort((a, b) => a.course - b.course);

  getInfo() {
    return this.students.forEach((student) => {
      console.log(`${student.fullname} - ${student.courseName}, ${student.course} курс`);
    });
  }
}

const studentInstances = studentsData.map((student) => new Student2(student));
const students = new Students2(studentInstances);
students.sortByCourse();
students.getInfo();

// lesson-9

// Покрасьте абзацы по клику
// даны 3 абзаца:
// <p id="text1">Text 1</p>
// <p id="text2">Text 2</p>
// <p id="text3">Text 3</p>
// даны цвета:
// const colors = {
//   data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
//   [Symbol.iterator]() {
//     // ваш код
//   }
// }

const textFirst = document.getElementById("text1");
const textMiddle = document.getElementById("text2");
const textLast = document.getElementById("text3");

const colors = {
  data: ["magenta", "cyan", "firebrick", "springgreen", "skyblue"],
  [Symbol.iterator]() {
    const arr = this.data;
    return {
      next(index) {
        return {
          value: arr[index],
          done: index === arr.length,
        };
      },
    };
  },
};

function changeStyle() {
  let i = 0;
  return function () {
    const iterator = colors[Symbol.iterator]();
    this.style.color = iterator.next(i).value;
    i += 1;
    if (iterator.next(i).done) {
      i = 0;
    }
  };
}

textFirst.addEventListener("click", changeStyle());
textMiddle.addEventListener("click", changeStyle());
textLast.addEventListener("click", changeStyle());
