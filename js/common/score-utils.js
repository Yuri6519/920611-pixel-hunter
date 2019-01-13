import {TIME_FAST, TIME_SLOW, MAX_LIFES_COUNT, MAX_QUESTIONS, LIFE_SCORE} from './constants';


const points = (userScore) => {
  let res = 0;

  if (userScore === undefined || !userScore || userScore === null) {
    throw new Error(`not enaugh actual params`);
  }

  if (userScore.length !== MAX_QUESTIONS) {
    res = -1;
  } else {

    res = userScore.every((itr) => typeof itr === `object`) ? 0 : -100;

    if (res >= 0) {
      res = userScore.every((itr) => itr.res !== undefined && itr.time !== undefined) ? 0 : -101;
    }
  }

  if (res < 0) {
    return res;
  }

  // число допущенных ошибок
  const errCount = userScore.filter((itr) => (itr.res === 0)).length;

  if (errCount > MAX_LIFES_COUNT) {
    return -1;
  }

  // очки за правильные ответы
  res = (MAX_QUESTIONS - errCount) * 100;

  // добавим очки за жизни
  res += (MAX_LIFES_COUNT - errCount) * LIFE_SCORE;

  // очки за время
  let resTime = 0;
  userScore.forEach((itr) => {
    if (itr.time !== undefined && itr.time !== null) {
      resTime += itr.time < TIME_FAST ? LIFE_SCORE : 0;
      resTime += itr.time > TIME_SLOW ? -LIFE_SCORE : 0;
    }
  });

  res += resTime;

  return res;

};

export default points;
