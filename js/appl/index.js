import {initAppl} from '../common/utils/index';
import {IntroPresenter} from '../intro/index';
import {WelcomeModel, WelcomePresenter} from '../welcome/index';
import {GameModel, GamePresenter} from '../game/index';
import {StatModel, StatPresenter} from '../statistics/index';
import {ErrorPresenter} from '../common/components/error/index';
import {ConfirmPresenter} from '../common/components/confirm/index';


const mainElement = document.querySelector(`#main`);
const changeScreen = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element);

};

class Application {
  static showIntro() {
    const intro = new IntroPresenter();
    changeScreen(intro.element);
    // intro.loadData();
    intro.loadDataWithDelay();
  }

  static showWelcome() {
    const welcome = new WelcomePresenter(new WelcomeModel());
    welcome.start();
    changeScreen(welcome.element);
  }

  static showGame(userName) {
    const game = new GamePresenter(new GameModel(userName));
    game.start();
    changeScreen(game.element);
  }

  static showStatistics(currentSatistics, userName) {
    const stat = new StatPresenter(new StatModel(currentSatistics, userName));
    stat.init();
    changeScreen(stat.element);
  }

  static showError(errParam) {
    const mes = typeof errParam === `object` ? errParam.message : errParam;
    const errArr = mes.split(`:`);
    const status = errArr[0];
    const code = errArr[1];
    const error = new ErrorPresenter({status, code});
    changeScreen(error.element);
  }

  static showDialog(onConfirm, onClose) {
    const confirmPrzn = new ConfirmPresenter();
    confirmPrzn.confirm = onConfirm;
    confirmPrzn.close = onClose;
    confirmPrzn.init();
    changeScreen(confirmPrzn.element);
  }

  static showCurrentElement(element) {
    changeScreen(element);
  }

}

// инициализация - защита от круговых ссылок
// прописывает сам себя в глобальной перемееной Appl
export default () => {
  initAppl(Application);
};
