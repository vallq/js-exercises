const assert = require("assert");

// we can change the context of functions using Bind,
// bind returns a new function with the "this" context passed in
function CreateAnimal(name) {
  this.name = name;
}
CreateAnimal.prototype.sayHi = function() {
  return this.name + " says hi";
};

CreateAnimal.prototype.move = function(count) {
  return this.name + " move by " + count + " steps";
};

const rabbit = new CreateAnimal("rabbit");
assert(rabbit.sayHi() === "rabbit says hi", "rabbit said hi");

const dog = new CreateAnimal("dog");
assert(rabbit.sayHi.bind(dog)() === "dog says hi", "WHATT");

// call and apply immediate invokes the function, you can pass in additional arguments
// call takes it multiple arguments
// apply takes it one additional argument as an array,
// the items in the array will become the function arguments
assert(
  rabbit.move.call(dog, 5) === "dog move by 5 steps",
  "dog move instead of rabbit"
);
assert(
  rabbit.move.apply(dog, [7]) === "dog move by 7 steps",
  "dog again move instead of rabbit"
);
