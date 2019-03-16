import {getGameScreens} from './init-data';

export default class Storage {
  constructor() {
    this._data = this._init();
  }

  _init() {
    return {game: getGameScreens()};
  }

  get game() {
    const {game} = this._data;
    return game;
  }


}
