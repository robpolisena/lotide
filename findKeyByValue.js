const assertEqual = function(actual, expected) {
  const errorMsg = `"${actual}" != "${expected}"`;
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
  console.assert(actual === expected, errorMsg);
};

const findKeyByValue = function(object, value) {
  for (let i in object) {
    if (object[i] === value) {
      console.log(i);
      return i;
    }
  } console.log('undefined');
  return undefined;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine");
findKeyByValue(bestTVShowsByGenre, "The Wire");
findKeyByValue(bestTVShowsByGenre, "The Expanse");

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "comedy");