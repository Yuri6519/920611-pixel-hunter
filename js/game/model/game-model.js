import Storage from '../storage/index';

const END_OF_GAME = -1;

const INITIAL_STATE = {
  time: 0,
  resp: [],
};

class GameModel {
  constructor(userName) {
    this._userName = userName;
    this.restart();
  }

  _init() {
    if (!this._storage) {
      this._storage = new Storage();
    }

    return this._storage.game;
  }

  get userName() {
    return this._userName;
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

  restart() {
    this._state = INITIAL_STATE;
    this._game = this._init();
  }


}

export default GameModel;
