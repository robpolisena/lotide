// test middle.js
const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns the middle element of an array", () => {
    assert.deepEqual(middle([1]), []);
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});