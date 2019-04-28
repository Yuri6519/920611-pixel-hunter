import StatStorage from '../storage/stat-storage';

export default class StatModel {
  constructor(stat) {
    this._storage = new StatStorage(stat);
    this._data = {};
  }

  get data() {
    return Object.freeze(this._data);
  }

  loadFromStorage() {
    return this._storage.getData();
  }

  init() {
    this._data = this.loadFromStorage();
  }
}
