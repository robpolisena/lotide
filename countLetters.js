const assertEqual = function(actual, expected) {
  const errorMsg = `"${actual}" != "${expected}"`;
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
  console.assert(actual === expected, errorMsg);
};

const countLetters = function(sentence) {

  let result = {};
  let str = sentence.split(' ').join('');
  for (let letter of str) {
    if (result[letter] === undefined) {
      result[letter] = 1;
    } else {
      result[letter] ++;
    }
  } return result;
};

console.log(countLetters('LHL'));
console.log(countLetters("lighthouse in the house"));
