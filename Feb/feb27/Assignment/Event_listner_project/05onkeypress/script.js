let inputBox = document.getElementById("inputBox");
let display = document.getElementById("display");

inputBox.addEventListener("keypress", function (e) {
  display.innerText = "you have pressed " + e.key;
});
