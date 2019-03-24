import {GREETING, RULES, NO_LEVEL_SCREEN, NEXT_LEVEL_SCREEN} from '../common/constants/index';

const initialState = {currentScreen: NO_LEVEL_SCREEN};

export default class WelcomeModel {
  get currentScreen() {
    return this._state.currentScreen;
  }

  get nextScreen() {
    let screen;
    switch (this.currentScreen) {
      case NO_LEVEL_SCREEN:
        screen = GREETING;
        break;
      case GREETING:
        screen = RULES;
        break;
      default:
        screen = NEXT_LEVEL_SCREEN;
    }
    return screen;
  }

  restart() {
    this._state = initialState;
  }

  setState({key}) {
    this._state = {currentScreen: key};
  }


}

