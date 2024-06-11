/*****************************************************************
 * Vanilla Date Exercises
 ******************************************************************/

// 1. Write a function that tests if something is a Date object or not. (Hint: Remember that Date is a class, so this would have to be an instance of that class...)
function testDate(obj) {
  if (obj instanceof Date === true) {
    console.log("It is!");
  } else {
    console.log("Nope");
  }
}
// 2. Create today's date
const today = new Date();
console.log(today);
testDate(today);

// 3. Get the current timestamp (using a static method of Date)
const timestamp = Date.now(today);
console.log(timestamp);

// 4. Create a date to represent next Christmas Day
const crimbo = new Date("2024-12-25");
console.log(crimbo);

// 5. Work out how many days it is until christmas

function howLong() {
  let now = today.getTime();
  let until = crimbo.getTime();
  let difference = (until - now) / (1000 * 3600 * 24);
  console.log(Math.round(difference));
}
howLong();
// Get difference between now and xmas

function howLong2() {
  let now = today.getTime();
  let until = crimbo.getTime();
  let difference = until - now;
  //   let result = (from - until) / (1000 * 3600 * 24);
  console.log(difference);
}
// Divide by number of ms in 1 day:
// milliseconds per day = 24 hrs/day * 60 minutes/hour * 60 seconds/minute * 1000 msecs/second

// Math.floor for whole days; Math.ceil to include today

// 6. I'm going to make 2 random dates. I want you to log out which one is earlier (or if they are the same?!)

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const date1 = new Date(
  new Date().getFullYear(),
  getRandomIntInclusive(0, 1),
  getRandomIntInclusive(1, 27)
);

console.log("date1", date1);

const date2 = new Date(
  new Date().getFullYear(),
  getRandomIntInclusive(0, 1),
  getRandomIntInclusive(1, 27)
);

console.log("date2", date2);

const dates = [date1, date2];
dates.sort(function (a, b) {
  let d1 = new Date(a);
  let d2 = new Date(b);
  return d1 - d2;
});
console.log(dates);

// 7. How do I test if a date is valid? ****
let badDate = new Date("2024/06/35");
Date.prototype.isValid = function () {
  return this.getTime() === this.getTime();
};
console.log(badDate.isValid());

// 8. Output today in the following format: MM-DD-YYYY - using the getter methods on the date object
console.log(today.toLocaleDateString());

// 9. Now output it using toLocaleDateString in english ('en-GB') and in german ('de-DE')
console.log(today.toLocaleDateString("en-GB"));
console.log(today.toLocaleDateString("de-DE"));
// 10. Output the current time in hours, mins & seconds
console.log(today.toLocaleTimeString());
// 11. Make a clock by starting with the current time and then every second adds a second to the date and prints it.

function clock() {
  let fresh = new Date();
  let hours = `${fresh.getHours()}`;
  let mins = `${fresh.getMinutes()}`;
  let seconds = `${fresh.getSeconds()}`;
  let clockFace = `${hours}:${mins}:${seconds}`;
  console.log(clockFace);
}

// UN-COMMENT TO START:

// setInterval(() => {
//   clock();
// }, 1000);

// 12. Create a copy of today

const stringDate = `${today.getTime()}`;
console.log(stringDate);
const todayCopy = new Date(stringDate * 1);
console.log(todayCopy);

// 13. Use the setter methods to find out what is 3years, 2months and 1 day from now
let theFuture = new Date();
theFuture.setFullYear(today.getFullYear() + 1);
theFuture.setMonth(today.getMonth() + 2);
theFuture.setDate(today.getDate() + 1);
console.log(theFuture);

// 14. Get your timezone from today (remember it's in mins and the sign is inverted)
console.log(today.getTimezoneOffset());

// 15. Use the Intl module formatter (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format) to get the time in Sydney (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
console.log(
  new Intl.DateTimeFormat("en-AU", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "Australia/Sydney",
  }).format(today)
);

// 16. Write a function that creates a years/months/days/hours/mins/secs/ms duration in ms.

// 17. Write a function that returns an object with the years/months/days/hours/mins/secs/ms between 2 dates

/*****************************************************************
 * For date-fns Exercises follow link on page
 ******************************************************************/
