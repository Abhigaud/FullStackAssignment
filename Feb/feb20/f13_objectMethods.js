let emp = {
  id: 101,
  name: "sanket",
  age: 24,
};

let keys = Object.keys(emp);
console.log(keys);

let values = Object.values(emp);
console.log(values);

let entries = Object.entries(emp);
console.log(entries);

// Object.freeze(emp);
Object.seal(emp);
emp.id = 100;
emp.address = "random";
delete emp.name;
console.log(emp);

let o = Object.assign({ x: 23 }, emp);
console.log(o);
