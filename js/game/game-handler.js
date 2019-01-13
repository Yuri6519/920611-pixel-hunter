// утилиты
import {consts as c} from '../common/index';
import {initShowScreen} from '../screens/util';
import {footerData} from '../data/mock-data';
import {
  introScreen,
  greetingScreen,
  rulesScreen,
  gameFirstScreen,
  gameSecondScreen,
  gameThirdScreen,
  statScreen,
} from '../screens/templates/index';

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

  mainElement.appendChild(SCREENS[key](footerData));

};

export default init;

