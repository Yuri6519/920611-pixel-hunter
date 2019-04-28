import {getGameScreens} from './init-data';

export default class Storage {
  constructor() {
    this._data = null;
  }

  _getNewData() {
    this._data = {game: getGameScreens()};
  }

  get game() {
    this._getNewData();
    const {game} = this._data;
    return game;
  }


}
