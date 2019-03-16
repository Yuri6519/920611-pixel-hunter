import {assert} from 'chai';

describe(`First test - Array`, () => {
  describe(`#indexOf()`, () => {
    it(`should return -1 when index out of range`, () => {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
});
