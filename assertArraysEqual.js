const eqArrays = require("./eqArrays");

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    return "Assertion Passed: The arrays are equal";
  } else {
    return "Assertion Failed: The arrays are not equal";
  }
};

module.exports = assertArraysEqual;