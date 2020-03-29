const assert = require("assert");
// using arrow functions create 4 methods
// add, subtact, multiply, divide

const add = (a, b) => {
  return a + b;
};

assert(add(1, 2) === 3, "should return the added value");
