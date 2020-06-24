const eqArrays = function(array1, array2) {
  let result = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      result += 1;
    } else {
      result += 0;
    }
  }
  if (result === 0) {
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log("Assertion Passed: The arrays are equal");
  } else {
    console.log("Assertion Failed: The arrays are not equal");
  }
};

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

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]