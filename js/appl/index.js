import {initAppl} from '../common/utils/index';
import {IntroPresenter} from '../intro/index';
import {WelcomeModel, WelcomePresenter} from '../welcome/index';
import {GameModel, GamePresenter} from '../game/index';
import {StatModel, StatPresenter} from '../statistics/index';

const mainElement = document.querySelector(`#main`);
const changeScreen = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element);

};

class Application {
  static showIntro() {
    const intro = new IntroPresenter();
    changeScreen(intro.element);
  }

  static showWelcome() {
    const welcome = new WelcomePresenter(new WelcomeModel());
    welcome.start();
    changeScreen(welcome.element);
  }

  static showGame(playerName) {
    const game = new GamePresenter(new GameModel(playerName));
    game.start();
    changeScreen(game.element);
  }

  static showStatistics(currentSatistics) {
    // непонятно куда сохранять статистику игры и возможно надо в Game сохранить на сервер
    // а в статистике взять все с сервера
    // пока передаю текцщцю статистику currentSatistics и мержу еее с мок - статистикой
    const stat = new StatPresenter(new StatModel(currentSatistics));
    stat.init();
    changeScreen(stat.element);
  }

}

// инициализация - защита от круговых ссылок
// прописывает сам себя в глобальной перемееной Appl
export default () => {
  initAppl(Application);
};
