import {assert} from 'chai';
import {points} from './score-utils';

describe(`Score utils`, () => {
  describe(`calc scores`, () => {
    it(`should have parameter`, () => {
      assert.throws(points, `not enaugh actual params`);
    });
    it(`should be passed all the 10 questions`, () => {
      assert.equal(points([]), -1);
      assert.equal(points([1, 2, 3]), -1);
      assert.notEqual(points([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), -1);
    });
    it(`every should be an object`, () => {
      assert.equal(points([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), -100);
      assert.notEqual(points([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]), -100);
    });
    it(`every object should have defenit structure`, () => {
      assert.equal(points([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]), -101);
    });
    it(`should have error number less than 4`, () => {
      assert.equal(points([
        {res: 0, time: 0}, {res: 0, time: 0}, {res: 1, time: 0}, {res: 1, time: 0},
        {res: 0, time: 0}, {res: 1, time: 0}, {res: 1, time: 0}, {res: 1, time: 0},
        {res: 0, time: 0}, {res: 1, time: 0}
      ]), -1);
      assert.notEqual(points([
        {res: 0, time: 0}, {res: 1, time: 0}, {res: 1, time: 0}, {res: 1, time: 0},
        {res: 0, time: 0}, {res: 1, time: 0}, {res: 1, time: 0}, {res: 1, time: 0},
        {res: 0, time: 0}, {res: 1, time: 0}
      ]), -1);
    });
    it(`should have scores = 1150 for all questions and all lifes and middle speed`, () => {
      assert.equal(points([
        {res: 1, time: 15}, {res: 1, time: 15}, {res: 1, time: 15}, {res: 1, time: 15},
        {res: 1, time: 15}, {res: 1, time: 15}, {res: 1, time: 15}, {res: 1, time: 15},
        {res: 1, time: 15}, {res: 1, time: 15},
      ]), 1150);
    });
    it(`should have scores = 650 for all questions and all lifes and low speed`, () => {
      assert.equal(points([
        {res: 1, time: 25}, {res: 1, time: 25}, {res: 1, time: 25}, {res: 1, time: 25},
        {res: 1, time: 25}, {res: 1, time: 25}, {res: 1, time: 25}, {res: 1, time: 25},
        {res: 1, time: 25}, {res: 1, time: 25},
      ]), 650);
    });
    it(`should have scores = 200 for all questions and no lifes and low speed`, () => {
      assert.equal(points([
        {res: 0, time: 25}, {res: 1, time: 25}, {res: 1, time: 25}, {res: 1, time: 25},
        {res: 0, time: 25}, {res: 1, time: 25}, {res: 1, time: 25}, {res: 1, time: 25},
        {res: 0, time: 25}, {res: 1, time: 25},
      ]), 200);
    });
    it(`should have scores = 1650 for all questions and all lifes and high speed`, () => {
      assert.equal(points([
        {res: 1, time: 1}, {res: 1, time: 2}, {res: 1, time: 5}, {res: 1, time: 0},
        {res: 1, time: 1}, {res: 1, time: 3}, {res: 1, time: 6}, {res: 1, time: 9},
        {res: 1, time: 0}, {res: 1, time: 4},
      ]), 1650);
    });
  }
  );
}
);
