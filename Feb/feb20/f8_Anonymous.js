let x = function () {
  console.log("hi");
};

x();

// -------------------- Immigitly invoke
(function exec() {
  console.log("named");
})();

// ----------------------
(function (x) {
  console.log(x * x);
})(5);
