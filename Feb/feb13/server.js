// Hello World in Nodejs
console.log(this);

/*Values and Datatypes */

//--Primitive Data Types

// -numbers: 2, 3, 4, 4.5, 24
// String: "PW Skills" or 'PW SKills'
// Boolean: true, false
// null
// undefined

// --Non Prinitive Data Types
// -Array

let name1 = "hitesh";
let name2 = "Shushant";
let name3 = "Rohit";
let name4 = "Kaif";

let names = ["hitesh", "sushant", "rohit", "kaif", 2, 3, false, "hitesh"];

// - Object: {}

const name = "abhishek";
let myName = "hitesh";

myName = "hitesh choudhary";

let highScore = 300;
console.log(highScore);

let pwSkillsCoursePrice = 3500;
console.log(pwSkillsCoursePrice);

pwSkillsCoursePrice = 2000;
console.log(pwSkillsCoursePrice);

let userName = "hitesh";

let pwCoursePrice = 200;
let gstOnCourses = 36;
let finalPurchaseAmount = pwCoursePrice + gstOnCourses;
console.log("final amount to be paid: ", finalPurchaseAmount);
let pwDsaCourse = 500;
console.log("final price of DSA course ", pwDsaCourse + gstOnCourses);

console.log("Answer is : ", 5 - 2);
console.log("Answer is : ", 5 * 2);
console.log("Answer is : ", 5 / 2);
console.log("Answer is : ", 5 % 2);
console.log("Answer is (used for power)", 3 ** 3);

let hiteshHighScore = 200;
let rajhHighScore = 300;
let rajahHighScore = "300";

console.log(hiteshHighScore == rajhHighScore);
console.log(rajhHighScore == rajahHighScore);
console.log(rajhHighScore === rajahHighScore);

let value1 = true;
let value2 = false;
let value3 = true;
let value4 = false;

console.log(value1 && value3);

let isLoggedIn = true;
let cardDetails = true;

// ||
let gmailAccount = true;
let emailAccount = false;
console.log(gmailAccount || emailAccount);
