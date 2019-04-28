import * as mock from '../../data/mock-data';
import {CURRENT_STAT, STAT_NEXT} from '../../common/constants/index';

const initHistory = (mode) => {
  if (!mode) {
    return [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  }

  if (mode === 1) {
    return mock.footerDataHistoryFail.slice(0);
  } else {
    return mock.footerDataHistoryOK.slice(0);

  }

};

export const initStat = (stat) => {
  const obj = {};
  obj[CURRENT_STAT] = stat;
  obj[`${STAT_NEXT}${1}`] = initHistory();
  obj[`${STAT_NEXT}${2}`] = initHistory(1);
  obj[`${STAT_NEXT}${3}`] = initHistory(2);
  return obj;
};

