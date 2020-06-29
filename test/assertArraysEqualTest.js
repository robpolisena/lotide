// test assertArraysEqual.js
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

//TEST CODE
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]));
console.log(assertArraysEqual(["1", "2", "3"], ["3", "2", "1"]));
