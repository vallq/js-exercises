const assert = require("assert");

// Closure
/**
 * Official definition on MDN:
 * A closure is the combination of a function and the lexical environment
 * within which that function was declared (e.g. another function, or a .js file).
 */
const fruit = "apple";
const isApple = () => {
  assert(fruit === "apple", "true");
};

isApple();

// common use case of closure is to create private variables
function createSayHi(name) {
  return function() {
    console.log(name + " say hi");
  };
}

let name = "John";
const johnSayHi = createSayHi(name);
johnSayHi(); // the variable name is now private within the function and close for modifications.

name = "Sally";
const sallySayHi = createSayHi(name);

sallySayHi();
johnSayHi();
johnSayHi();
johnSayHi();
johnSayHi();
johnSayHi();
