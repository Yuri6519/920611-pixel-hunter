// утилиты
import introScreen from './intro';
import greetingScreen from './greeting';
import rulesScreen from './rules';
import gameFirstScreen from './game-1';
import gameSecondScreen from './game-2';
import gameThirdScreen from './game-3';
import statScreen from './stats';
import {consts as c} from '../common/index';
import {initShowScreen} from './util';

const mainElement = document.querySelector(`#main`);

const init = () => {
  initShowScreen(showNextScreeen);
  showNextScreeen(c.INTRO);
};

const SCREENS = {
  [c.INTRO]: introScreen,
  [c.GREETING]: greetingScreen,
  [c.RULES]: rulesScreen,
  [c.FIRST_GAME]: gameFirstScreen,
  [c.SECOND_GAME]: gameSecondScreen,
  [c.THIRD_GAME]: gameThirdScreen,
  [c.STAT]: statScreen,
};

// ф-ия выводит экран
const showNextScreeen = (key) => {
  const ln = mainElement.children.length;
  for (let i = 0; i < ln; i++) {
    mainElement.children[0].remove();
  }

  mainElement.appendChild(SCREENS[key]());

};

export default init;

