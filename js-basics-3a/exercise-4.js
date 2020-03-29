//written by @vallq
//exercise 4
// 1. Create an array `names` with at least 3 elements: `'david'`, `'gordon'`, and
//    `'sahil'` and log it to the console
const names = ["david", "gordon", "sahil"];
//arrays are mutable hence properties like length can be changed

// 2. Log the value of the third element in `names` to the console
console.log(names[2]);

// 3. Log the value of the `names` array's `length` property to the console
console.log(names.length);

// 4. Set the value of the `length` property to `1`
names.length = 1;

// 6. Once again, log the value of the `names` array's `length` property to the
//    console. Did it change?
console.log(names.length);

// 7. Log the entire `names` array to the console again
console.log(names);

// 8. Add a few more elements to the array using `push`
console.log(names.push("elf"));
console.log(names.push("eragon"))

// 9. Log the last element of the array to the console
console.log(names[names.length-1]);

// 10. Log the second last element of the array to the console
console.log(names[names.length-2]);

// 11. Change the `textContent` property of the _second_ `p` tag on the page to
//    `"JavaScript was here!"`
document.getElementsByTagName("p")[1].textContent = "Javascript was here!";

// 12. Convert the `names` array to a string, with each element separated by a
//    '<br>'. Store it in a new variable called `namesString` e.g. if `names` is
//    `['harry', 'ron', 'dean']` then `namesString` will be `"harry<br>ron<br>dean"`
const namesString = names.toString().replace(/,/g, "<br>");
console.log(namesString);

// 13. Change the `innerHTML` property of the _first_ `p` tag on the page to
//    `namesString`. What happens when you use `textContent` instead of
//    `innerHTML`?
document.getElementsByTagName("p")[0].innerHTML = namesString;
//textContent = namesString;

//using textContent changes it without following html rules ie. david<br>...
//using innerHTML follows html rules ie. 
//david
//elf...


