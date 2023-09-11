// 1. One parameter, and a single return statements
const square = (x) => x * x;

// 2. Multiple parameter , and a single return expression
const sumOfTwoNumber = (x, y) => x + y;

// 3. Multiple statements in Function expression
const sum = (x, y) => {
  console.log(`Adding ${x} and ${y}`);
  return x + y;
};

// 4. returning an Object
const sumAndDifference = (x, y) => ({ sum: x + y, difference: x - y });

// Calling a Function
let output1 = square(4);
let output2 = sumOfTwoNumber(2, 5);
let output3 = sum(4, 7);

let output4 = sumAndDifference(5, 4);

console.log(output4);
