const assert = require("assert");

// functions can be use as constrcutor.
/**
 * when function use as constrcutor
 * Three things happen
 * 1. a new object is created
 * 2. add all the properties to newly created object
 * 3. it then returns the object
 */

function getPrice() {
  return this.price;
}
function CreateMerchandise(name, price) {
  this.name = name;
  this.price = price;
  this.getPrice = getPrice;
}

const chickenRice = new CreateMerchandise("chicken rice", 2.5);
const salad = new CreateMerchandise("salad", 6);

assert(chickenRice !== salad, "they are not the same");

// By creating objects, we can call functions as methods
// As seen below, the this context is again pass to the method thus producing
// the correct price for individual item
assert(chickenRice.getPrice() === 2.5, "chicken rice is 2.5");
assert(salad.getPrice() === 6, "salad is 6");

// Prototype
// there is a better way to create methods that are use by all Objects created from same constructor
function CreateAnimal(name) {
  this.name = name;
}
CreateAnimal.prototype.sayHi = function() {
  return this.name + " says hi";
};

const rabbit = new CreateAnimal("rabbit");
assert(rabbit.sayHi() === "rabbit says hi", "rabbit said hi");
