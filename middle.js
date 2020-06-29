const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let newArray = [];
  if (array.length < 3) {
    assertArraysEqual(array, newArray);
    return newArray;
    
  }
  if (array.length > 2 && array.length % 2 === 1) {
    newArray.push(array[(array.length - 1) / 2]);
    assertArraysEqual(array, newArray);
    return newArray;
  }
  if (array.length > 2 && array.length % 2 === 0) {
    newArray.push(array[array.length / 2 - 1], array[array.length / 2]);
    assertArraysEqual(array, newArray);
    return newArray;
  }
};

module.exports = middle;