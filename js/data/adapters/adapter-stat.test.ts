import {assert} from 'chai';
import {CURRENT_STAT, STAT_NEXT} from '../../common/constants/index';
import adaptStat from './adapter-stat';

const serverData = [
  {
    "date": 1556992149973,
    "stat": [{"res": 1, "time": 20}, {"res": 1, "time": 21}, {"res": 1, "time": 22}, {"res": 1, "time": 8}, {"res": 1, "time": 15}, {"res": 1, "time": 15}, {"res": 0, "time": 15}, {"res": 1, "time": 25}, {"res": 1, "time": 30}, {"res": 0, "time": 25}],
  },
  {
    "date": 1556992149971,
    "stat": [{"res": 1, "time": 1}, {"res": 1, "time": 1}, {"res": 1, "time": 1}, {"res": 1, "time": 8}, {"res": 1, "time": 15}, {"res": 1, "time": 15}, {"res": 0, "time": 15}, {"res": 1, "time": 25}, {"res": 1, "time": 30}, {"res": 0, "time": 25}],
  },
  {
    "date": 1556992149972,
    "stat": [{"res": 1, "time": 10}, {"res": 1, "time": 11}, {"res": 1, "time": 12}, {"res": 1, "time": 8}, {"res": 1, "time": 15}, {"res": 1, "time": 15}, {"res": 0, "time": 15}, {"res": 1, "time": 25}, {"res": 1, "time": 30}, {"res": 0, "time": 25}],
  }

];

const adapterData = {
  [CURRENT_STAT]: [{res: 1, time: 20}, {res: 1, time: 21}, {res: 1, time: 22}, {res: 1, time: 8}, {res: 1, time: 15}, {res: 1, time: 15}, {res: 0, time: 15}, {res: 1, time: 25}, {res: 1, time: 30}, {res: 0, time: 25}],
  [`${STAT_NEXT}${1}`]: [{res: 1, time: 10}, {res: 1, time: 11}, {res: 1, time: 12}, {res: 1, time: 8}, {res: 1, time: 15}, {res: 1, time: 15}, {res: 0, time: 15}, {res: 1, time: 25}, {res: 1, time: 30}, {res: 0, time: 25}],
  [`${STAT_NEXT}${2}`]: [{res: 1, time: 1}, {res: 1, time: 1}, {res: 1, time: 1}, {res: 1, time: 8}, {res: 1, time: 15}, {res: 1, time: 15}, {res: 0, time: 15}, {res: 1, time: 25}, {res: 1, time: 30}, {res: 0, time: 25}],
};

describe(`Test adapter data`, () => {
  it(`should adaptData() return object equal to adapterData`, () => {
    const res = adaptStat(serverData);
    assert.deepEqual(res, adapterData);
  });
});
