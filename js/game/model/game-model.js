import Storage from '../storage/index';
import calcPoints from '../../common/score-utils';


const END_OF_GAME = -1;

class GameModel {
  constructor() {
    this._state = {
      time: 0,
      resp: [],
    };
    this._game = this._init();
  }

  _init() {
    if (!this._storage) {
      this._storage = new Storage();
    }

    return this._storage.game;
  }

  get state() {
    return Object.freeze(this._state);
  }

  get time() {
    return this._state.time;
  }

  get resp() {
    return this._state.resp;
  }

  get currentLevel() {
    const {resp} = this._state.resp;
    const length = resp.length;
    return length < this._game.length ? length : END_OF_GAME;
  }

  get currentLevelObject() {
    return this._game[this.currentLevel];
  }

  // как узнать жизни? и надо ли вообще...
  // get lives() {
  //   return this._game[this.currentLevel];
  // }

  set resp(value) {
    this._state.resp.push(value);
  }

  tick(time) {
    this._state.time = time;
  }


}

export default GameModel;
