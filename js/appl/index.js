import {initAppl} from '../common/utils/index';
import {IntroPresenter} from '../intro/index';
import {WelcomeModel, WelcomePresenter} from '../welcome/index';
import {GameModel, GamePresenter} from '../game/index';

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
    console.log(`Application::showGame::playerName::`, playerName);

    const game = new GamePresenter(new GameModel(playerName));
    game.start();
    changeScreen(game.element);
  }

}

// инициализация - защита от круговых ссылок
// прописывает сам себя в глобальной перемееной Appl
export default () => {
  initAppl(Application);
};
