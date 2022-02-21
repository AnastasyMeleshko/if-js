const date_picker_element = document.querySelector('.date-picker');
const selected_date_element = document.querySelector('.date-picker .selected-date');
const dates_element = document.querySelector('.date-picker .dates');
const mth_element = document.querySelector('.date-picker .dates .month .mth');
const mth_element2 = document.querySelector('.months-second .month .mth');
const next_mth_element = document.querySelector('.date-picker .dates .month .next-mth');
const prev_mth_element = document.querySelector('.date-picker .dates .month .prev-mth');
const days_element = document.querySelector('.date-picker .dates .days');
const days_element2 = document.querySelector('.months-second .days');

const inputCheckInn = document.getElementById("form-user-check-in");
const inputCheckOut = document.getElementById("form-user-check-out");
const blockCheckInn = document.querySelector(".form-item, .check-inn");
const blockCheckOut = document.querySelector(".form-item, .check-out");

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const dayOfWeeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;

mth_element.textContent = months[month] + ' ' + year;
mth_element2.textContent = months[month+1] + ' ' + year;

selected_date_element.textContent = formatDate(date);
selected_date_element.dataset.value = selectedDate;

populateDates();

// EVENT LISTENERS
date_picker_element.addEventListener('click', toggleDatePicker);
// inputCheckInn.addEventListener('click', toggleDatePicker2);
// inputCheckOut.addEventListener('click', toggleDatePicker3);
// inputCheckInn.addEventListener('click', toggleDatePicker2);
// blockCheckInn.addEventListener('click', toggleDatePicker2);


// document.body.addEventListener('click', toggleDatePicker3);
document.body.addEventListener('click', toggleDatePicker2);
// document.body.addEventListener('click', toggleDatePicker3);

next_mth_element.addEventListener('click', goToNextMonth);
prev_mth_element.addEventListener('click', goToPrevMonth);

// FUNCTIONS
function toggleDatePicker (e) {
  if (!checkEventPathForClass(e.path, 'dates')) {
    dates_element.classList.toggle('active');
  }
}

function toggleDatePicker2 (e) {
  // console.log(e.target);
  // if (e.target === inputCheckInn) {
    if ((e.target.closest === days_element)
      || (e.target === inputCheckInn)
      || (e.target.classList.contains("day"))
      || (e.target.classList.contains("arrows")) ){
      dates_element.classList.add('active');
    }
    else {
      dates_element.classList.remove('active');
    }
  // }
}



// function toggleDatePicker3 (e) {
//   // console.log(e.target);
//   if (e.target === inputCheckOut) {
//   if ((e.target.closest === days_element)
//     || (e.target === inputCheckOut)
//     || (e.target.classList.contains("day"))
//     || (e.target.classList.contains("arrows")) ){
//     dates_element[1].classList.add('active');
//   } else {
//     dates_element[1].classList.remove('active');
//   }
//   }
// }

// function toggleDatePicker3 (e) {
//   if ((e.target === inputCheckOut)
//     || (e.target.closest === blockCheckOut)
//     || (e.target.closest === days_element)
//     || (e.target.classList.contains("day"))
//     || (e.target.classList.contains("arrows")) ){
//     dates_element.classList.add('active');
//   } else {
//     dates_element.classList.remove('active');
//   }
// }


// function toggleDatePicker3 (e) {
//   if ((e.target === inputCheckOut)
//     || (e.target.closest === blockCheckOut)
//     || (e.target.closest === days_element)
//     || (e.target.classList.contains("day"))
//     || (e.target.classList.contains("arrows")) ){
//     dates_element[1].classList.add('active');
//   } else {
//     dates_element[1].classList.remove('active');
//   }
// }


function goToNextMonth (e) {
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

function populateDates (e) {
  let amount_days;
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

  for (let i = 0; i < amount_days; i++) {
    const day_element = document.createElement('div');
    day_element.classList.add('day');
    day_element.textContent = i + 1;

    if (selectedDay === (i + 1) && selectedYear === year && selectedMonth === month) {
      day_element.classList.add('selected');
    }

    day_element.addEventListener('click', function () {
      selectedDate = new Date(year + '-' + (month + 1) + '-' + (i + 1));
      selectedDay = (i + 1);
      selectedMonth = month;
      selectedYear = year;

      selected_date_element.textContent = formatDate(selectedDate);
      selected_date_element.dataset.value = selectedDate;

      inputCheckInn.value = formatDate(selectedDate);

      populateDates();
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
    day_element2.textContent = i + 1;

    if (selectedDay === (i + 1) && selectedYear === yearInNextMonth && selectedMonth === nextMonth) {
      day_element2.classList.add('selected');
    }

    day_element2.addEventListener('click', function () {
      selectedDate = new Date(yearInNextMonth + '-' + (nextMonth + 1) + '-' + (i + 1));
      selectedDay = (i + 1);
      selectedMonth = nextMonth;
      selectedYear = yearInNextMonth;

      selected_date_element.textContent = formatDate(selectedDate);
      selected_date_element.dataset.value = selectedDate;

      inputCheckOut.value = formatDate(selectedDate);

      populateDates();
    });

    days_element2.appendChild(day_element2);

  }

  // showDaysOfWeeks(nextMonth, yearInNextMonth);
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
//
// let activeMonth1 = mth_element.textContent.slice(0,3);
// let activeYear1 = mth_element.textContent.slice(-4);
// showDaysOfWeeks(activeMonth1, activeYear1);
//
// let nextMonth = months.indexOf(mth_element2.textContent.slice(0,3));
// let yearInNextMonth = mth_element2.textContent.slice(-4);
