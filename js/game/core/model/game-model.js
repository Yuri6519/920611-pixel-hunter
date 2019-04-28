import Storage from '../../storage/index';
import {NEXT_LEVEL_SCREEN} from '../../../common/constants/index';

const END_OF_GAME = -1;

class GameModel {
  constructor(userName) {
    this._userName = userName;
  }

  _init() {
    if (!this._storage) {
      this._storage = new Storage();
    }
    this._game = this._storage.game;
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
    const length = this.resp.length;
    return length < this._game.length ? length : END_OF_GAME;
  }

  get currentLevelData() {
    return this._game[this.currentLevel].data;
  }

  get nextScreen() {
    const res = this.currentLevel === END_OF_GAME ? {type: NEXT_LEVEL_SCREEN} : this._game[this.currentLevel];
    if (!res) {
      throw new Error(`GameModel::nextScreen::bad res = ${res}`);
    }
    return res.type;
  }

  get levelCount() {
    return this._game.length;
  }

  set resp(value) {
    this._state.resp.push(value);
  }

  tick() {
    this._state.time++;
  }

  restart() {
    this._state = {
      time: -1,
      resp: [],
    };
    this._init();
  }

  setState({time, respParams}) {
    this.resp = respParams;
    this._state.time = time;
  }


}

export default GameModel;
