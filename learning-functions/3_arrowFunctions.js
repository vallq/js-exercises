const assert = require("assert");

// Arrow functions gives a more simplify format
const multiply = (a, b) => {
  return a * b;
};

assert(
  multiply(2, 7) === 14,
  "multiply should return the first argument * second argument"
);

/**
 * CONTEXT
 * "this" keyword refers to the the context(where the code has reference to)
 * the outermost context in browser is "window" object
 * the outermost context in nodejs is module.exports
 * we will cover module.exports in another topic
 */

assert(module.exports === this, "hello from windows");

this.hello = "hello";
assert(this.hello === "hello", "hello from windows");
assert(module.exports.hello === "hello", "hello from windows");

// Note: Arrow functions are prefered syntax due to Lexcial Scope
// Lexical Scope:
//  functions are executed using the scope chain that was in effect when they were defined
this.hello = "hello from out of wrapper";

function normalFn() {
  return this.hello;
}

const arrowFn = () => {
  return this.hello;
};

function wrapper() {
  this.hello = "hello from wrapper";
  assert(normalFn() === "hello from wrapper", "from wrapper");
  arrowFn(arrowFn() === "hello from out of wrapper", "from out of wrapper");
}

wrapper();

// as observe, in a non arrow function, this is being pass into the function.
// whereas in arrow function, this is using the context where is defined(lexical)
