import Storage from '../storage/index';
import {NEXT_LEVEL_SCREEN} from '../../common/constants/index';

const END_OF_GAME = -1;

const initialState = {
  time: 0,
  resp: [],
};

class GameModel {
  constructor(userName) {
    this._userName = userName;
  }

  _init() {
    if (!this._storage) {
      this._storage = new Storage();

      console.log(`GameModel::_init::new _storage::`, this._storage);
    }
    this._game = this._storage.game;

    console.log(`GameModel::_init::_userName::`, this._userName);

    // console.log(`GameModel::_init::_storage::`, this._storage);

    console.log(`GameModel::_init::_game::`, this._game);

    console.log(`GameModel::_init::_state::`, this._state);

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

    console.log(`GameModel::restart::`);

    this._state = initialState;
    this._init();
  }

  setState({_, respParams}) {
    this.resp = respParams;
  }

  get nextScreen() {
    const res = this.currentLevel === END_OF_GAME ? NEXT_LEVEL_SCREEN : this._game[this.currentLevel];
    if (!res) {
      throw new Error(`GameModel::nextScreen::bad res = ${res}`);
    }

    console.log(`GameModel::nextScreen::res.type::`, res.type);

    return res.type;
  }

}

export default GameModel;
