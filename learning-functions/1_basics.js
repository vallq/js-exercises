const assert = require("assert");

/**
 * function: keyword
 * getPrice: function name
 * (price, quantity): price and quantity are parameters
 *
 */
function getPrice(price, quantity) {
  return price * quantity;
}

// the value you pass into the function is call an argument(2 and 7 are arguments)
assert(getPrice(2, 7) === 14, "getPrice should return the price * quantity");

// you don't have to return anything but the default value is undefined
function sayHello() {
  console.log("hello");
}

assert(sayHello() === undefined, "sayHello should return undefined");

// rest parameter allow you to pass in more arguments than the number of parameters
function sum(...rest) {
  let total = 0;
  rest.forEach(item => (total += item));
  return total;
}

assert(sum(0, 1, 2, 3, 4, 5, 6, 7, 8, 9) === 45, "adds all the value");

// default value, we can add a default value to make it "optional"
let total = 0;
function increment(add = 0) {
  total = total + add;
  return total;
}

assert(increment() === 0, "no increment was done");
assert(increment(7) === 7, "increase by 7");
assert(increment(4) === 11, "increase by 4");

// IIFE, Immediate Invoke Function Expression
(function() {
  console.log("this runs immediately");
})();

(function() {
  console.log("this runs immediately too!!");
})();
