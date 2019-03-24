// модуль главного представления игры

import {AbstractView} from '../../common/index';

export default class GameView extends AbstractView {

  get template() {
    return `<span style="color: red; background: blue">HERE IS GHAME</span>`;
  }

}
