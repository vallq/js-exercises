const assert = require("assert");

// Assigning functions to a Variable
const getArea = function(length, height) {
  return length * height;
};
assert(getArea(2, 7) === 14, "getArea should return the length * height");

// Able to assign functions to variable means they can be stored anywhere!
// Storing functions in Objects
const Calculator = {
  add: function(a, b) {
    return a + b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    return a / b;
  },
  subtract: function(a, b) {
    return a - b;
  },
};

assert(Calculator.add(2, 7) === 9, "should add 2 numbers");
assert(Calculator.multiply(2, 7) === 14, "should multiply 2 numbers");
assert(Calculator.divide(4, 2) === 2, "should divide 2 numbers");
assert(Calculator.subtract(2, 7) === -5, "should add 2 numbers");

// Storing functions in Arrays
const array = [];
array.push(function() {
  return "hello";
});

assert(array[0]() === "hello", "hello");

// functions can also be return from another Function!
function speak(text) {
  return function() {
    return "says " + text;
  };
}

const sayHi = speak("hi");
const sayMuahaha = speak("Muahaha");
assert(sayHi() === "says hi", "said hi");
assert(sayMuahaha() === "says Muahaha", "said Muahaha");
assert(speak("something")() === "says something", "said Muahaha");
