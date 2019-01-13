const _MAX_LIFES_COUNT = 3;
const _MAX_QUESTIONS = 10;
const _LIFE_SCORE = 50;

const points = (userScore) => {
  let res = 0;

  if (userScore === undefined || !userScore || userScore === null) {
    throw new Error(`not enaugh actual params`);
  }

  if (userScore.length !== _MAX_QUESTIONS) {
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

  if (errCount > 3) {
    return -1;
  }

  // очки за правильные ответы
  res = (_MAX_QUESTIONS - errCount) * 100;

  // добавим очки за жизни
  res += (_MAX_LIFES_COUNT - errCount) * _LIFE_SCORE;

  // очки за время
  let resTime = 0;
  userScore.forEach((itr) => {
    if (itr.time !== undefined && itr.time !== null) {
      resTime += itr.time < 10 ? 50 : 0;
      resTime += itr.time > 20 ? -50 : 0;
    }
  });

  res += resTime;

  return res;

};

export default points;
