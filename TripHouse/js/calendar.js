const date_picker_element = document.querySelector('.date-picker');
const selected_date_element = document.querySelector('.date-picker .selected-date');

const dates_element = document.querySelector('.date-picker .dates');
const mth_element = document.querySelector('.date-picker .dates .month .mth');
const mth_element2 = document.querySelector('.months-second .month .mth');
const next_mth_element = document.querySelector('.date-picker .dates .month .next-mth');
const prev_mth_element = document.querySelector('.date-picker .dates .month .prev-mth');
const days_element = document.querySelector('.date-picker .dates .days');
const days_element2 = document.querySelector('.months-second .days');

const checkInBtn = document.querySelector(".check-in-btn");
const checkOutBtn = document.querySelector(".check-out-btn");
const clearBtn = document.querySelector(".clear-btn");

const inputCheckInn = document.getElementById("form-user-check-in");
const inputCheckOut = document.getElementById("form-user-check-out");
const formLabel = document.querySelector(".form-label");

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const dayOfWeeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

prev_mth_element.style.opacity = "0";

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let selectedDate;
let selectedDay;
let selectedMonth;
let selectedYear;
let today_date = date;
let today_Day = day;
let today_Month = month;
let today_Year = year;


mth_element.textContent = months[month] + ' ' + year;
mth_element2.textContent = months[month+1] + ' ' + year;

selected_date_element.textContent = formatDate(date);
selected_date_element.dataset.value = selectedDate;

populateDates();

// EVENT LISTENERS
date_picker_element.addEventListener('click', toggleDatePicker);
document.body.addEventListener('click', toggleDatePicker2);

next_mth_element.addEventListener('click', goToNextMonth);
prev_mth_element.addEventListener('click', goToPrevMonth);

// FUNCTIONS
function toggleDatePicker (e) {
  if (!checkEventPathForClass(e.path, 'dates')) {
    dates_element.classList.toggle('active');
  }
}

function toggleDatePicker2 (e) {
    if ((e.target.closest === days_element)
      || (e.target === inputCheckInn)
      || (e.target === inputCheckOut)
      || (e.target === formLabel)
      || (e.target.classList.contains("day"))
      || (e.target.classList.contains("mth"))
      || (e.target.classList.contains("week"))
      || (e.target.classList.contains("dates"))
      || (e.target.classList.contains("month"))
      || (e.target.classList.contains("week-day"))
      || (e.target.classList.contains("dates-buttons"))
      || (e.target.classList.contains("month-first"))
      || (e.target.classList.contains("month-second"))
      || (e.target.classList.contains("check-in-btn"))
      || (e.target.classList.contains("check-out-btn"))
      || (e.target.classList.contains("clear-btn"))
      || (e.target.classList.contains("arrows")) ){
      dates_element.classList.add('active');
    }
    else {
      dates_element.classList.remove('active');
    }
}

function goToNextMonth (e) {
  prev_mth_element.style.opacity = "1";

  let nextmonth;
  let nextyear;
  month++;
  if (month > 11) {
    month = 0;
    year++;
  }

  mth_element.textContent = months[month] + ' ' + year;
  mth_element2.textContent = months[month+1] + ' ' + year;

  if (month === 11) {
    nextmonth = 0;
    nextyear = year + 1;
    mth_element2.textContent = months[nextmonth] + ' ' + nextyear;
  }

  populateDates();
}



function goToPrevMonth (e) {
  let currentMonth = date.getMonth();
  let currentMonthShown = document.querySelector(".months-first .month .mth");

  if (months.indexOf(currentMonthShown.innerHTML.slice(0,3)) !== currentMonth) {
    prev_mth_element.style.opacity = "1";

    let prevmonth;
    let nextyear;
    month--;
    if (month < 0) {
      month = 11;
      year--;
    }
    mth_element.textContent = months[month] + ' ' + year;
    mth_element2.textContent = months[month+1] + ' ' + year;

    if (month === 11) {
      prevmonth = 0;
      nextyear = year + 1;
      mth_element2.textContent = months[prevmonth] + ' ' + nextyear;
    }

    populateDates();
  }

  if (months.indexOf(currentMonthShown.innerHTML.slice(0,3)) === currentMonth) {
    prev_mth_element.style.opacity = "0";
  }

}

function populateDates (e) {
  let amount_days;

  let firstChosenDate;
  let secondChosenDate;
  let firstChosenMonth;
  let secondChosenMonth;

  days_element.innerHTML = '';
  days_element2.innerHTML = '';
  let weekDayAll = document.querySelectorAll(".week-day");
  weekDayAll.forEach((elem) => {
    if (weekDayAll) {
      elem.innerHTML = "";
    }
  })

  if ((month === 0) ||
      (month === 2) ||
      (month === 4) ||
      (month === 6) ||
      (month === 7) ||
      (month === 9) ||
      (month === 11)){
    amount_days = 31;
  } else {
    amount_days = 30;
  }
  if (month === 1) {
    amount_days = 28;
  }

  let firstActiveMonth = months[month];

  for (let i = 0; i < amount_days; i++) {
    const day_element = document.createElement('div');
    day_element.classList.add('day');
    day_element.classList.add(`${firstActiveMonth}-day`);
    day_element.textContent = i + 1;

    if ((i + 1) < today_Day && today_Year === year && today_Month === month) {
      day_element.classList.add('before-today');
    }

    if (today_Day === (i + 1) && today_Year === year && today_Month === month) {
      day_element.classList.add('today-date');
    }

    if ((selectedDay === (i + 1) && selectedYear === year && selectedMonth === month)
      && (!day_element.classList.contains("before-today"))) {
      day_element.classList.add('selected');
      if ((checkInBtn.classList.contains("chosen")) && (checkOutBtn.classList.contains("chosen"))) {
        day_element.classList.remove('selected');
      }
    }

    let firstChosenDate2 = inputCheckInn.value.slice(-2);
    let firstChosenMonth2 = inputCheckInn.value.slice(5,8);

    if (Number(firstChosenDate2) !== 0) {
      if ((Number(firstChosenDate2) === (i+1)) && (months.indexOf(firstChosenMonth2) === month + 1) && (day_element.classList.contains(`${firstChosenMonth2}-day`))) {
        day_element.classList.add('frozen');
      }
    }

    let secondChosenDate2 = inputCheckOut.value.slice(-2);
    let secondChosenMonth2 = inputCheckOut.value.slice(5,8);

    if (Number(secondChosenDate2) !== 0) {
      if ((Number(secondChosenDate2) === (i+1)) && (months.indexOf(secondChosenMonth2) === month + 1) && (day_element.classList.contains(`${secondChosenMonth2}-day`))) {
        day_element.classList.add('frozen');
      }
    }

    if ((Number(secondChosenDate2) !== 0)
      && (Number(firstChosenDate2) !== 0)
      && ((day_element.classList.contains(`${firstChosenMonth2}-day`)) ||
        (day_element.classList.contains(`${secondChosenMonth2}-day`))) ){
      let start = Number(firstChosenDate2)+1;
      let end = Number(secondChosenDate2);
      for( let j=start; j<end; j++) {
        if (i + 1 === start-1) {
          if (day_element.classList.contains(`${firstChosenMonth2}-day`)) {
            day_element.classList.add('frozen');
          }
        }
        if (i + 1 === j) {
          day_element.classList.add('between');
        }
        if (i + 1 === end) {
          if (day_element.classList.contains(`${secondChosenMonth2}-day`)) {
            day_element.classList.add('frozen');
          }
        }
      }
    }

    day_element.addEventListener('click', function () {
      if (!day_element.classList.contains("before-today")) {
        selectedDate = new Date(year + '-' + (month + 1) + '-' + (i + 1));
        selectedDay = (i + 1);
        selectedMonth = month;
        selectedYear = year;

        selected_date_element.textContent = formatDate(selectedDate);
        selected_date_element.dataset.value = selectedDate;

        let choosenDate = formatDate(selectedDate);
        let activeDateSecond = inputCheckOut.value;

        if (!checkInBtn.classList.contains("chosen")) {
          inputCheckInn.value = choosenDate;
        }
        else {

          firstChosenDate = inputCheckInn.value.slice(-2);
          firstChosenMonth = inputCheckInn.value.slice(5,8);

          if (activeDateSecond) {
            if (checkOutBtn.classList.contains("chosen")) {
              inputCheckOut.value = activeDateSecond;
            }
            if (!checkOutBtn.classList.contains("chosen")) {
              inputCheckOut.value = formatDate(selectedDate);
            }
          } else {
            inputCheckOut.value = formatDate(selectedDate);
          }
        }
        populateDates();
      }

    });

    days_element.appendChild(day_element);

  }

  let activeMonth1 = mth_element.textContent.slice(0,3);
  let activeYear1 = mth_element.textContent.slice(-4);
  let dayOfWeeks1 = showDaysOfWeeks(activeMonth1, activeYear1);
  dayOfWeeks1.classList.add("first-month");
  let firstMonth = document.querySelector(".months-first");
  firstMonth.insertBefore(dayOfWeeks1,days_element);

  let nextMonth = months.indexOf(mth_element2.textContent.slice(0,3));
  let secondMonth2 = mth_element2.textContent.slice(0,3);
  let yearInNextMonth = mth_element2.textContent.slice(-4);

  if ((nextMonth === 0) ||
    (nextMonth === 2) ||
    (nextMonth === 4) ||
    (nextMonth === 6) ||
    (nextMonth === 7) ||
    (nextMonth === 9) ||
    (nextMonth === 11)){
    amount_days2 = 31;
  } else {
    amount_days2 = 30;
  }
  if (nextMonth === 1) {
    amount_days2 = 28;
  }

  for (let i = 0; i < amount_days2; i++) {
    const day_element2 = document.createElement('div');
    day_element2.classList.add('day');
    day_element2.classList.add(`${secondMonth2}-day`);
    day_element2.textContent = i + 1;

    if (selectedDay === (i + 1) && selectedYear === yearInNextMonth && selectedMonth === nextMonth) {
      day_element2.classList.add('selected');
      if ((checkInBtn.classList.contains("chosen")) && (checkOutBtn.classList.contains("chosen"))) {
        day_element2.classList.remove('selected');
      }
    }

    firstChosenDate = inputCheckInn.value.slice(-2);
    firstChosenMonth = inputCheckInn.value.slice(5,8);

    if (Number(firstChosenDate) !== 0) {
      if ((Number(firstChosenDate) === (i+1)) && (months.indexOf(firstChosenMonth) === nextMonth + 1) &&  (day_element2.classList.contains(`${firstChosenMonth}-day`))) {
        day_element2.classList.add('frozen');
      }
    }

    secondChosenDate = inputCheckOut.value.slice(-2);
    secondChosenMonth = inputCheckOut.value.slice(5,8);

    if (Number(secondChosenDate) !== 0) {
      if ((Number(secondChosenDate) === (i+1)) && (months.indexOf(secondChosenMonth) === nextMonth + 1) && (day_element2.classList.contains(`${secondChosenMonth}-day`))) {
        day_element2.classList.add('frozen');
      }
    }

    if (((Number(secondChosenDate) !== 0) && (Number(firstChosenDate) !== 0))
      && ((day_element2.classList.contains(`${firstChosenMonth}-day`)) ||
        (day_element2.classList.contains(`${secondChosenMonth}-day`))) ){
      let start = Number(firstChosenDate);
      let end = Number(secondChosenDate);
      for( let j=start+1; j<end; j++) {
        if (i + 1 === start)  {
          if (day_element2.classList.contains(`${firstChosenMonth}-day`)) {
          day_element2.classList.add('frozen');
          }
        }
        if (i + 1 === j) {
          day_element2.classList.add('between');
        }
        if (i + 1 === end) {
          if (day_element2.classList.contains(`${secondChosenMonth}-day`)) {
            day_element2.classList.add('frozen');
          }
        }
      }
    }

    if ((Number(secondChosenDate) !== 0)
      && (Number(firstChosenDate) !== 0)
      && (secondChosenMonth === months[months.indexOf(firstChosenMonth) + 1]) ){

      let day_elementFirst = document.querySelectorAll(`.${firstChosenMonth}-day`);

      if (Number(firstChosenDate) <= Number(secondChosenDate)) {
        let start = Number(firstChosenDate)+1;
        let end = 31;
        for( let j=start; j<=end; j++) {
            if (i + 1 === start-1) {
              day_elementFirst.forEach((elem) => {
                if (elem.innerHTML === `${i + 1}`) {
                  elem.classList.add('frozen');
                }
              })
            }
            if (i + 1 === j) {
              day_elementFirst.forEach((elem) => {
                if (elem.innerHTML === `${i + 1}`) {
                  elem.classList.add('between');
                }
                if (elem.innerHTML === `${end}`) {
                  elem.classList.add('between');
                }
              })
            }
        }

        let day_elementSecond = document.querySelectorAll(`.${secondChosenMonth}-day`);
        let start2 = 1;
        let end2 = Number(secondChosenDate);
        for (let z=start2; z<=end2; z++) {
          if (z<end2) {
            day_elementSecond.forEach((elem) => {
              if (elem.innerHTML === `${z}`) {
                elem.classList.add('between');
              }
            })
          }
          if (z === end2) {
            day_elementSecond.forEach((elem) => {
              if (elem.innerHTML === `${z}`) {
                elem.classList.add('frozen');
              }
            })
          }

        }
      }

      if (Number(firstChosenDate) > Number(secondChosenDate)) {
        let start = Number(firstChosenDate)+1;
        let end = 31;
        for( let j=start; j<=end; j++) {
          if (i + 1 === start-1) {
            day_elementFirst.forEach((elem) => {
              if (elem.innerHTML === `${i + 1}`) {
                elem.classList.add('frozen');
              }
            })
          }
          if (i + 1 === j) {
            day_elementFirst.forEach((elem) => {
              if (elem.innerHTML === `${i + 1}`) {
                elem.classList.add('between');
              }
              if (elem.innerHTML === `${end}`) {
                elem.classList.add('between');
              }
            })
          }
        }

        let day_elementSecond = document.querySelectorAll(`.${secondChosenMonth}-day`);
        let start2 = 1;
        let end2 = Number(secondChosenDate);
        for (let z=start2; z<=end2; z++) {
          if (z<end2) {
            day_elementSecond.forEach((elem) => {
              if (elem.innerHTML === `${z}`) {
                elem.classList.add('between');
              }
            })
          }
          if (z === end2) {
            day_elementSecond.forEach((elem) => {
              if (elem.innerHTML === `${z}`) {
                elem.classList.add('frozen');
              }
            })
          }
        }
      }
    }

    day_element2.addEventListener('click', function () {
      selectedDate = new Date(yearInNextMonth + '-' + (nextMonth + 1) + '-' + (i + 1));
      selectedDay = (i + 1);
      selectedMonth = nextMonth;
      selectedYear = yearInNextMonth;

      selected_date_element.textContent = formatDate(selectedDate);
      selected_date_element.dataset.value = selectedDate;

      let choosenDate = formatDate(selectedDate);
      let activeDateSecond = inputCheckOut.value;
      if (!checkInBtn.classList.contains("chosen")) {
        inputCheckInn.value = choosenDate;
      }else {

        firstChosenDate = inputCheckInn.value.slice(-2);
        firstChosenMonth = inputCheckInn.value.slice(5,8);

        if (activeDateSecond) {
           if (checkOutBtn.classList.contains("chosen")) {
             inputCheckOut.value = activeDateSecond;
           }
          if (!checkOutBtn.classList.contains("chosen")) {
              inputCheckOut.value = formatDate(selectedDate);
            }
        } else {
          inputCheckOut.value = formatDate(selectedDate);
        }
      }

      populateDates();
    });


    days_element2.appendChild(day_element2);

  }



  let allDays = document.querySelectorAll('.date-picker .dates .days .day');

  checkInBtn.addEventListener("click", addChosenDate);
  checkOutBtn.addEventListener("click", addChosenDate);

  function addChosenDate() {
    let activeChoice = document.querySelector(".selected");
    let firstDate;
    if (activeChoice) {
      checkInBtn.classList.add("chosen");
      activeChoice.classList.add("frozen");
      if (activeChoice.classList.contains("frozen")) {
        firstDate = activeChoice;
      }
      let activeDateFirst = inputCheckInn.value;
      allDays.forEach((day) => {
        if ((day.innerHTML === firstDate.innerHTML) && (selectedMonth === activeDateFirst.slice(5,8))) {
          day.classList.add("frozen");
        }
      })
    }
    if ((checkInBtn.classList.contains("chosen")) && (activeChoice) && (inputCheckOut.value)) {
      checkOutBtn.classList.add("chosen");
      activeDateSecond = inputCheckOut.value;
    }
  }

  clearBtn.addEventListener("click", clearDates);

  function clearDates() {
    checkInBtn.classList.remove("chosen");
    checkOutBtn.classList.remove("chosen");
    inputCheckOut.value = "";
    inputCheckInn.value = "";
    allDays.forEach((day) => {
        day.classList.remove("selected");
        day.classList.remove("frozen");
        day.classList.remove("between");
    })
  }

  let nextMonth2 = mth_element2.textContent.slice(0,3);
  let dayOfWeeks2 = showDaysOfWeeks(nextMonth2, yearInNextMonth);
  dayOfWeeks2.classList.add("second-month");
  let secondMonth = document.querySelector(".months-second");
  secondMonth.insertBefore(dayOfWeeks2,days_element2);
}

// HELPER FUNCTIONS
function checkEventPathForClass (path, selector) {
  for (let i = 0; i < path.length; i++) {
    if (path[i].classList && path[i].classList.contains(selector)) {
      return true;
    }
  }

  return false;
}

function formatDate (d) {
  let dayOfWeek = dayOfWeeks[d.getDay()];

  let day = d.getDate();
  if (day < 10) {
    day = '0' + day;
  }
  let month = months[d.getMonth()];

  return `${dayOfWeek}, ${month} ${day}`;
}

function showDaysOfWeeks(activeMonth, activeYear) {
  let weekDays = document.createElement("div");
  weekDays.classList.add("week-day");
  weekDays.innerHTML = "";
  let activeMonthIndex = months.indexOf(activeMonth);
  let firstDayActiveMonth  = new Date(activeYear, activeMonthIndex, 1);
  let dayOfWeekStartIndex = firstDayActiveMonth.getDay();
  let counter = dayOfWeekStartIndex;
  for (let i=0; i<dayOfWeeks.length; i++) {
    let week_element = document.createElement('div');
    week_element.classList.add('week');
    if (dayOfWeeks[counter]) {
      week_element.textContent = dayOfWeeks[counter];
    } else {
      counter = 0;
      week_element.textContent = dayOfWeeks[counter];
    }
    weekDays.append(week_element);
    counter++;
  }
  return weekDays;
}


