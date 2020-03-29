const assert = require("assert");
/**
 * Recursive function is a function that call's itself
 * Usally to break down the prblem into smaller subset.
 *
 * There is 3 parts to recursive function.
 * 1. Base condition(when you know the results)
 * 2. Incremental changes that move towards your goal
 * 3. returning the function with a smaller set of problem
 *
 *
 */

function countTimesTill10(startingNumber = 0, count = 0) {
  if (startingNumber >= 10) {
    return count;
  }
  startingNumber++;
  count++;
  return countTimesTill10(startingNumber, count);
}

assert(countTimesTill10(0) === 10, "need 10 time to count till 10");
assert(countTimesTill10(7) === 3, "need 3 time to count till 10");

// lets see another exmample
// a palindrome is a string of numbers / characters that when every flip around
// will still form the same word.
// i.e. Anna, Civic, Kayak, Level, Madam, Mom, Noon, Racecar, Radar, Redder, Refer
// Repaper, Rotator, Rotor, Sagas, Solos, Stats, Tenet, Wow
// Lets try solving this with recursive

function isPalindrome(word) {
  // base case
  if (word.length <= 1) {
    return true;
  }

  // reducing the problem
  const lastCharIndex = word.length - 1;
  const firstChar = word.charAt(0).toLowerCase();
  const lastChar = word.charAt(lastCharIndex).toLowerCase();

  // exit condition
  if (firstChar !== lastChar) {
    return false;
  }

  // returning function with a smaller set of problems
  const smallerWord = word.substring(1, lastCharIndex);
  return isPalindrome(smallerWord);
}

assert(isPalindrome("Anna"), "Anna is Palindrome");
assert(isPalindrome("Kayak"), "Kayak is Palindrome");
assert(isPalindrome("Racecar"), "Racecar is Palindrome");
assert(isPalindrome("is") === false, "is is not Palindrome");
assert(isPalindrome("not") === false, "not is not Palindrome");
assert(isPalindrome("Palindrome") === false, "Palindrome is not Palindrome");
