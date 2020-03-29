//written by @vallq
//exercise 1
const x = 5.25;
console.log('The value of x is', x);

let y = "Hello!"
console.log("y returns", y);

var z = true;
console.log('the value of z is', z);

var sum = x + 15; //solution: const sum...
console.log('sum equals', sum);

var bodyClass = document.body.className;
console.log("the value of bodyClass is", bodyClass);
bodyClass = "Loading";
console.log("the value of bodyClass is", bodyClass);

var randomNumber = Math.random(); //solution: const randomNumber...
console.log("the random number is:", randomNumber);

//referenced solution
//var mainClass = document.getElementsByClassName("main").className;
const mainClass = document.querySelector("main").className;
console.log("the value of mainClass is", mainClass);

//exercise 2
function hello() {
    alert("Hello World!");
    console.log("I am the hello message");
}

function hi(name) {
    return ("Hi, " + name + "!");
}
console.log('hi function says:', hi('John'));
console.log('hi function says:', hi('Ben'));

function add(num1, num2) {
    return (num1 + num2);
}
console.log("4 + 5 = ", add(4, 5));
console.log("7 + 9 = ", add(7, 9));
console.log("-6.9 + 2.5 = ", add(-6.9, 2.5));

//referenced solution
/*
function random5() {
    return (Math.round(Math.random()*5));
}*/
const random5 = () => {
    const randomNumber = Math.random();
    return Math.ceil(randomNumber * 5);
}
console.log('random5:', random5());
console.log('random5:', random5());
console.log('random5:', random5());