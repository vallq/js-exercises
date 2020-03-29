var assertEquals = require("./assert-helper");

/* ---------------------- EXERCISE 0 ---------------------- */
// define a function that takes in array of strings with every element converted to uppercase
function convertToUpperCase(array) {
  const convertedArray = array.map(string => string.toUpperCase());
  return convertedArray;
}


// Assertions (do not change)
assertEquals(convertToUpperCase(["hello"]), ["HELLO"]);
assertEquals(convertToUpperCase(["hello", "gOOdBYE"]), ["HELLO", "GOODBYE"]);


/* ---------------------- EXERCISE 1 ---------------------- */
// define a function that multiplies all elements in an array by 10
function multiplyBy10(array) {
  const multipled = array.map(num => num * 10);
  return multipled;
}


// Assertions (do not change)
assertEquals(multiplyBy10([1, 2]), [10, 20]);
assertEquals(multiplyBy10([3, 5, 7]), [30, 50, 70]);
assertEquals(multiplyBy10([-1, 0, 1]), [-10, 0, 10]);


/* ---------------------- EXERCISE 2 ---------------------- */
// define a function that takes in an array objects and returns only an array of strings of the name field

function onlyNames(array) {
  const nameArray = array.map(({ name }) => name);
  return nameArray;
}

// Assertions (do not change)
var input = [
  {
    name: "homer",
    favorite: "donuts"
  },
  {
    name: "marge",
    favorite: "family"
  },
  {
    name: "lisa",
    favorite: "school"
  }
];

assertEquals(onlyNames(input), ["homer", "marge", "lisa"]);

/* ---------------------- EXERCISE 3 ---------------------- */
// define a function that removes any non-vowel character from words in an array
function keepOnlyVowels(array) {
  //const isVowel = ['a', 'e', 'i', 'o', 'u'];
  const isVowel = char => 'aeiou'.split('').includes(char);
  return array.map(text => {
    return Array
      .from(text)
      .filter(isVowel)
      .join('')
  });
}

/*const isVowel = char => "aeiou".split('').includes(char)
function keepOnlyVowels(array) {
  return array.map(text => {
    return Array
      .from(text)
      .filter(isVowel)
      .join('')
  })  
}

function isVowel(char) {
  const vowels = 'aeiou'.split('')
  return vowels.includes(char)
}
function extractVowels(string) {
  return string.split('').filter(isVowel).join('')
}
function keepOnlyVowels(array) {
  return array.map(extractVowels)
}*/

// Assertions (do not change)
assertEquals(keepOnlyVowels(["abc"]), ["a"]);
assertEquals(keepOnlyVowels(["exceptional"]), ["eeioa"]);
assertEquals(keepOnlyVowels(["average", "exceptional", "amazing"]), [
  "aeae",
  "eeioa",
  "aai"
]);
