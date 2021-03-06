import gameData from '../../data/index';

export default class Storage {
  constructor() {
    this._data = null;
  }

  _getNewData() {
    this._data = {game: gameData.data};
  }

  get game() {
    this._getNewData();
    const {game} = this._data;
    return game;
  }


}
