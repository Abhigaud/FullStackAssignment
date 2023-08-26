/* 1. Write a program that takes in a day of the week (e.g., Monday, Tuesday, etc.) and outputs the number of days until the weekend. */
const day = "Tuesday";

let daysUntilWeekend;

switch (day) {
  case "Monday":
    console.log("There are 5 days until the Weekend.");
    break;
  case "Tuesday":
    console.log("There are 4 days until the Weekend.");
    break;
  case "Wednesday":
    console.log("There are 3 days until the Weekend.");
    break;
  case "Thursday":
    console.log("There are 2 days until the Weekend.");
    break;
  case "Friday":
    console.log("There are 1 days until the Weekend.");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Its Weekend.");
    break;
  default:
    daysUntilWeekend = "Invalid days";
    console.log("Invalid Input");
    break;
}
