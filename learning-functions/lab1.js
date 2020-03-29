const assert = require("assert");
// Assert out values from the function

// 1. write a function that returns the area of a triangle
function getAreaOfTriangle(base, height) {
  return 0.5 * base * height;
}
assert(
  getAreaOfTriangle(3, 8) === 12,
  "area of triangle with base of 3 and height of 8 should be 12"
);

// 2. using rest parameters, return the smallest number
/*function getSmallest(a, ...rest) {
  let min = a;
  rest.forEach(number => 
    if(number < min) {
      min = number;
    });

}*/

assert(
  getSmallest(1, 2, 3, 4, 6, 7, 8) === 1,
  "should return  the smallest number"
);

// 3. Create a IIFE and that console.log a hello text immediately
(function () {
  console.log("hello, this is an IIFE");
})();

console.log("hello");