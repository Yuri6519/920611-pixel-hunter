import {
  TIME_FAST,
  TIME_SLOW,
  MAX_LIFES_COUNT,
  MAX_LEVELS,
  LIFE_SCORE,
  ERROR_LIFES_OVER,
  RES_RIGHT_ANSWER,
  RES_BONUS_SPEED,
  RES__BONUS_LIFE,
  RES_FINE_SLOW,
  RES_STATUS,
  RES_TOTAL,
  CORRECT_ANSWER_POINTS,
  RESP_FAIL,
  RES_BONUS_SPEED_NUMBER,
  RES__BONUS_LIFE_NUMBER,
  RES_FINE_SLOW_NUMBER,
  RES_LIFE_NUMBER,

} from '../constants/index';

const points = (userScore) => {
  let res = 0;

  const result = {
    [RES_STATUS]: 0,
    [RES_RIGHT_ANSWER]: 0,
    [RES_BONUS_SPEED]: 0,
    [RES_BONUS_SPEED_NUMBER]: 0,
    [RES__BONUS_LIFE]: 0,
    [RES__BONUS_LIFE_NUMBER]: 0,
    [RES_FINE_SLOW]: 0,
    [RES_FINE_SLOW_NUMBER]: 0,
    [RES_TOTAL]: 0,
    [RES_LIFE_NUMBER]: 0,
  };

  if (userScore === undefined || !userScore || userScore === null) {
    throw new Error(`not enaugh actual params`);
  }

  if (userScore.length !== MAX_LEVELS) {
    res = -1;
  } else {

    res = userScore.every((itr) => typeof itr === `object`) ? 0 : -100;

  }

  if (res < 0) {
    result[RES_STATUS] = res;
    return result;
  }

  // число допущенных ошибок
  const errCount = userScore.filter((itr) => (itr.res === RESP_FAIL)).length;

  if (errCount > MAX_LIFES_COUNT) {
    result[RES_STATUS] = ERROR_LIFES_OVER;
    return result;
  }

  // расчет
  userScore.forEach((itr) => {
    if (itr.time !== undefined && itr.time !== null) {
      result[RES_RIGHT_ANSWER] += itr.res * CORRECT_ANSWER_POINTS;
      result[RES_BONUS_SPEED_NUMBER] += itr.res && itr.time < TIME_FAST ? 1 : 0;
      result[RES_FINE_SLOW_NUMBER] -= itr.res && itr.time > TIME_SLOW ? 1 : 0;
    }
  });

  // очки за скорость
  result[RES_BONUS_SPEED] = result[RES_BONUS_SPEED_NUMBER] * LIFE_SCORE;

  // штраф за медлительность
  result[RES_FINE_SLOW] = result[RES_FINE_SLOW_NUMBER] * LIFE_SCORE;

  // чистые жизни
  result[RES_LIFE_NUMBER] = MAX_LIFES_COUNT - errCount;

  // очки за жизни
  result[RES__BONUS_LIFE_NUMBER] = userScore.every((itr) => itr.res !== undefined && itr.time !== undefined) ? (MAX_LIFES_COUNT - errCount) : 0;
  result[RES__BONUS_LIFE] = result[RES__BONUS_LIFE_NUMBER] * LIFE_SCORE;

  // общая сумма очков
  result[RES_TOTAL] = result[RES_RIGHT_ANSWER] + result[RES__BONUS_LIFE] + result[RES_BONUS_SPEED] + result[RES_FINE_SLOW];

  return result;

};

export default points;
