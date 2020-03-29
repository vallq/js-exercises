//written by @vallq
// 1. Create a new array `shoppingList` with a few string elements
const shoppingList = ["milk", "banana", "eggs", "avocado", "yoghurt"];

// 2. Using `forEach`, log every element of the `shoppingList` array to the console
shoppingList.forEach(function (item) {
    console.log(item);
});

// 3. For each element in the `shoppingList` array, create an `<li>` node and
//    append it to the `<ul>` element on the page (use `document.createElement`
//    and `.appendChild`)
shoppingList.forEach(function(item) {
    var itemNode = document.createElement("li");
    var textNode = document.createTextNode(item);
    itemNode.appendChild(textNode);
    document.getElementsByTagName("ul")[0].appendChild(itemNode);
    //console.log("done");
});

// 4. Create a new array `numbers` with a few numeric elements
const numbers = [1, 4, 7, 3, 9];

// 5. Using `map` on the `numbers` array, create a new array called
//    `squareNumbers` where each element is the square of the corresponding
//    element in the `numbers` array
function squaredFunction(number) {
    return number*number;
}
const squaredNumbers = numbers.map(squaredFunction);
console.log("Array of squared numbers:", squaredNumbers);
