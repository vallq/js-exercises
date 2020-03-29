# JS Basics

- Open the project in Visual Studio Code
- Start the Live Server
- Open the Console tab on Chrome's DevTools

## Exercise 4: Arrays

1. Create an array `names` with at least 3 elements: `'david'`, `'gordon'`, and
   `'sahil'` and log it to the console

1. Log the value of the third element in `names` to the console

1. Log the value of the `names` array's `length` property to the console

1. Set the value of the `length` property to `1`

1. Once again, log the value of the `names` array's `length` property to the
   console. Did it change?

1. Log the entire `names` array to the console again

1. Add a few more elements to the array

1. Log the last element of the array to the console

1. Log the second last element of the array to the console

1. Change the `textContent` property of the _second_ `p` tag on the page to
   `"JavaScript was here!"`

1. Convert the `names` array to a string, with each element separated by a
   '\<br\>'. Store it in a new variable called `namesString` e.g. if `names` is
   `['harry', 'ron', 'dean']` then `namesString` will be `"harry<br>ron<br>dean"`

1. Change the `innerHTML` property of the _first_ `p` tag on the page to
   `namesString`. What happens when you use `textContent` instead of
   `innerHTML`?

## Exercise 5: Doing things with array elements

1. Create a new array `shoppingList` with a few string elements

1. Using `forEach`, log every element of the `shoppingList` array to the console

1. For each element in the `shoppingList` array, create an `<li>` node and
   append it to the `<ul>` element on the page (use `document.createElement`
   and `.appendChild`)

1. Create a new array `numbers` with a few numeric elements

1. Using `map` on the `numbers` array, create a new array called
   `squareNumbers` where each element is the square of the corresponding
   element in the `numbers` array

[solution]: https://github.com/thoughtworks-jumpstart/js-basics-3/tree/solution
