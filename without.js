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

const without = function(source, itemsToRemove) {
  let newArray = [];
  if (eqArrays(source, itemsToRemove) === false && source.length !== itemsToRemove.length) {
    for (let i = 0; i < source.length; i++) {
      for (let y = 0; y < itemsToRemove.length; y++) {
        if (source[i] !== itemsToRemove[y]) {
          newArray.push(source[i]);
        }
      }
    }
  } else {
    for (let i = 0; i < source.length; i++) {
      if (source[i] !== itemsToRemove[i]) {
        newArray.push(source[i]);
      }
    }
  } console.log(newArray);
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);