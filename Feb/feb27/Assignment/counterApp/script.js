// getting the Html Elements
const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const displayNumber = document.getElementById("displayNumber");

// for decrement button
decrementBtn.addEventListener("click", () => {
  const value = Number(displayNumber.innerText);
  if (value > 0) {
    displayNumber.innerText = value - 1;
  } else {
    ("negative values not allowed");
  }
});

// for increment button
incrementBtn.addEventListener("click", () => {
  const value = Number(displayNumber.innerText);
  if (value >= 10) {
    alert("10+ values are not allowed");
  } else {
    displayNumber.innerText = value + 1;
  }
});

// for reset button
resetBtn.addEventListener("click", () => {
  displayNumber.innerText = 0;
});
