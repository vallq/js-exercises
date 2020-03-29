# JS Basics

## Exercise 1: Variables and values

- Open the `index.html` file using a Live Server
- Open the DevTools Console
- Perform the following exercises by making changes to `script.js`

1. Using `const`, define a variable called `x` with the value `5.25`
	- Log it to the console using `console.log('The value of x is', x)`

1. Using `let`, define a variable called `y` with the value `'Hello!'`
	- Log it to the console

1. Using `var`, define a variable called `z` with the value `true`
	- Log it to the console

1. Define a variable called `sum` with the value of `x` plus `15`
	- Log it to the console

1. Define a variable called `bodyClass` with the value of
   `document.body.className`
   	- Log it to the console

1. Change `document.body.className` to `"loading"`

1. Log the value of `bodyClass` to the console again

1. Define a variable called `randomNumber` with the value of `Math.rando cm()`
	- Log it to the console

1. Define a variable called `mainClass` to store the `className` of the `main`
   element on the page
   	- Log it to the console

## Exercise 2: Functions

1. Define a function `hello` that displays an `alert` with the message `"Hello,
   world!"`
   	- Invoke it to verify that it works

1. Update the `hello` function above to `console.log` a message (`"I am the
   hello function"`) after displaying the `alert`.

1. Define a function `hi` that takes a single argument `name` and returns the
   string `"Hi, <name>!"`.
   	- when invoked like `hi('John')` it should return `"Hi, John!"`
   	- when invoked like `hi('Ben')` it should return `"Hi, Ben!"`

1. Log the output of the `hi` function to the console

1. Define a function `add` that takes two arguments: `num1` and `num2` and
   returns the sum of `num1` and `num2`

1. Define a function `random5` that does not take any arguments and returns a
   random number between `1` and `5` (no decimals)
   	- Hint: Multiply `Math.random()` by 5 and then use `Math.round()` or `Math.ceil()`

[solution]: https://github.com/thoughtworks-jumpstart/js-basics-1/tree/solution
