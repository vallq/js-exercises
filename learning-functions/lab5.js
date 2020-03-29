const assert = require("assert");

function says(message1, message2) {
  this.name = this.name || "John";
  return `${this.name} says ${message1} and ${message2}`;
}

// using call get the assertion to pass
// object
assert(
  says.call({ name: "Peter" }, "hello", "welcome") ===
    "Peter says hello and welcome",
  "true"
);

// using apply get the assertion to pass
// object, array
assert(
  says.apply({ name: "Peter" }, ["hello", "welcome"]) ===
    "Peter says hello and welcome",
  "true"
);

const iceCreamMachine = {
  make: function(topping) {
    let flavour = this.flavour;
    if (topping) {
      flavour += " " + topping;
    }
    return flavour;
  },
};

function IceCream(flavour) {
  this.flavour = flavour;
}

const chocolateIceCream = new IceCream("chocolate"); // Todo: create a chocolate Ice cream
const makeChocolateIceCream = iceCreamMachine.make.bind(chocolateIceCream); // create a make method with chocolate ice cream

assert(makeChocolateIceCream() === "chocolate", "should return chocolate");

const vanilaIceCream = new IceCream("vanilla");
assert(
  iceCreamMachine.make.call(vanilaIceCream, "sprinkle-nuts") ===
    "vanilla sprinkle-nuts",
  "should return vanila with sprinkle-nuts"
);
