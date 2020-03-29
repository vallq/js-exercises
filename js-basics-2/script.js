//written by @vallq
//exercise 3.1, 3.2

const dog = {
    name: "Lady",
    bark() {
        //console.log("Woof");
        console.log("woof, I'm " + this.name + "!");
    } //solution: 'woof, I'm ${this.name}!'
};
    
//log dog name
console.log("dog's name:", dog.name);
//invoke dog.bark
dog.bark();
//log dog to console
console.log(dog);

//exercise 3.3
const person = {
    firstName: "John",
    lastName: "Appleseed",
    birthYear: 2000,
    name() {
        return (this.firstName + " " + this.lastName);
    },
    ageThisYear() {
        var date = new Date();
        return (date.getFullYear() - this.birthYear);
    }
};
console.log("Name: ", person.name());
console.log("Age: ", person.ageThisYear());

//exercise 3.4
const someString = "excuse me";
console.log("Length of string: ", someString.length);
someString.length = 200;
console.log("Length of string: ", someString.length);
//string length does not change because strings are immutable by design
//to shorten a string, use string.slice(a, b)
console.log(someString.toUpperCase().toLowerCase());

//exercise 3.5
var decimalNumber = 88.46593;
console.log("to 3dp: ", decimalNumber.toFixed(3));

//exercise 3.6
function sum(num1, num2) {
    return (num1+num2);
}
//solution: const sum = (a, b) => a + b;
console.log("sum's name: ", sum.name);
console.log("toString method: ", sum.toString());
