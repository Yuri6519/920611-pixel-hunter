import {createElementFromTemplate} from '../util';
import {
  TIME_FAST,
  TIME_SLOW,
  MAX_QUESTIONS,
  CORRECT_ANSWER} from '../../common/constants';


const CLASS_UNKNOWN = `unknown`;
const CLASS_WRONG = `wrong`;
const CLASS_SLOW = `slow`;
const CLASS_FAST = `fast`;
const CLASS_CORRECT = `correct`;

export default (stat) => {

  if (!stat || stat.length !== MAX_QUESTIONS) {
    throw new Error(`SCREENS::STAT::Не верно определен массив статистики::${stat}`);
  }

  const li = stat.map((itr) => {
    let result = CLASS_UNKNOWN;
    const time = itr.time;
    const res = itr.res;

    if (time !== undefined && res !== undefined) {
      result = res === CORRECT_ANSWER ? CLASS_CORRECT : CLASS_WRONG;
      if (result === CLASS_CORRECT) {
        result = time < TIME_FAST ? CLASS_FAST : result;
        result = result === CLASS_CORRECT && time > TIME_SLOW ? CLASS_SLOW : result;
      }
    }

    return `<li class="stats__result stats__result--${result}"></li>`;
  }).join(``);

  const content = `<ul class="stats">${li}</ul>`;

  const element = createElementFromTemplate(content);

  return element;

};
