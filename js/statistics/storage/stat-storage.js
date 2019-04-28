import {initStat} from './init-stat';

export default class StatStorage {
  constructor(stat) {
    this._data = null;
    this._stat = stat;
  }

  _loadStatistiscs() {
    // моковые данные
    this._data = initStat(this._stat);
  }

  getData() {
    this._loadStatistiscs();
    return Object.freeze(this._data);
  }


}
