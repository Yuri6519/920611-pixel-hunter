import GameView from '../view/index';

export default class GamePresenter {
  constructor(model) {
    this.model = model;
    this._timer = null;
  }
}
