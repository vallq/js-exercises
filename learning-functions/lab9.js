const assert = require("assert");
/**
 * from Wiki:
 * Fibonacci numbers,
 * commonly denoted Fn form a sequence,
 * called the Fibonacci sequence,
 * such that each number is the sum of the two preceding ones,
 * starting from 0 and 1.
 *
 * fib 0 => 0
 * fib 1 => 1
 * fib 2 => fib 0 + fib 1 => 0 + 1 => 1
 * fib 3 => fib 2 + fib 1 => 1 + 1 => 2
 * fib 4 => fib 3 + fib 4 => 2 + 1 => 3
 * fib 5 => fib 3 + fib 4 => 2 + 3 => 5
 * fib 6 => fib 4 + fib 5 => 3 + 5 => 8
 */
function fib() {}

assert(fib(0) === 0, "fib0");
assert(fib(1) === 1, "fib1");
assert(fib(2) === 1, "fib2");
assert(fib(3) === 2, "fib3");
assert(fib(4) === 3, "fib4");
assert(fib(5) === 5, "fib5");
assert(fib(6) === 8, "fib6");
assert(fib(39) === 63245986, "fib39");
