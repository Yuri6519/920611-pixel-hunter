import IndicatorView from '../../view/indicator/indicator-view';
import {
  TIME_FAST,
  TIME_SLOW,
  MAX_LEVELS,
  CORRECT_ANSWER} from '../../common/constants';


const CLASS_UNKNOWN = `unknown`;
const CLASS_WRONG = `wrong`;
const CLASS_SLOW = `slow`;
const CLASS_FAST = `fast`;
const CLASS_CORRECT = `correct`;

export default (stat) => {

  if (!stat || stat.length !== MAX_LEVELS) {
    throw new Error(`SCREENS::STAT::Не верно определен массив статистики::${stat}`);
  }

  const classes = stat.map((itr) => {
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

    return result;

  });

  const indicatorView = new IndicatorView(classes);
  return indicatorView.element;
};
