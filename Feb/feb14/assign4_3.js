/* 3. Write a program that takes a number as input and outputs "Fizz" if it is divisible by 3, "Buzz" if it is divisible by 5, and "FizzBuzz" if it is divisible by both 3 and 5. Note that any number can be passed and not restricted to the numbers divisible by 3 or 5. */
let num = 15;

if (num % 5 == 0 && num % 3 == 0) {
  console.log("FizzBuzz");
} else if (num % 3 == 0) {
  console.log("Fizz");
} else if (num % 5 == 0) {
  console.log("Buzz");
} else {
  console.log("Invalid Input");
}
