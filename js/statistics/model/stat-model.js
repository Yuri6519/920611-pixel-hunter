import StatStorage from '../storage/stat-storage';

export default class StatModel {
  constructor(stat, userName) {
    this._storage = new StatStorage(stat);
    this._data = {};
    this._userName = userName;

console.log('StatModel::this._userName::', this._userName)

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
