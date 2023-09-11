/////////confusion
// function with unlimited parameters

function sumOfAllParameters() {
  let sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
    return sum;
  }
}

// function call
let result = sumOfAllParameters(2, 3, 4);
console.log(result);
