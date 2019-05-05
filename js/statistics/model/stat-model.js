import StatStorage from '../storage/stat-storage';

export default class StatModel {
  constructor(stat, userName) {
    this._storage = new StatStorage(stat, userName);
    this._data = {};
    this._userName = userName;
  }

  get userName() {
    return this._userName;
  }

  get data() {
    return Object.freeze(this._data);
  }

  loadFromStorage() {
    return this._storage.getData().then((data) => data);
  }

  init() {
    return this.loadFromStorage().then((data) => {
      this._data = data;
    });
  }
}
