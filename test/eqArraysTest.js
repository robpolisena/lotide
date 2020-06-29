// test eqArrays.js
const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

//TEST CODE
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)); // => should PASS
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)); // => should PASS
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)); // => should PASS


