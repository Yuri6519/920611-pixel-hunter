import Loader from '../../data/loader';

const loadStat = Loader.loadStat;
const saveStat = Loader.saveStat;

export default class StatStorage {
  private _data: any;
  private _stat: any;
  private _userName: string;
  
  constructor(stat, userName) {
    this._data = null;
    this._stat = {stat};
    this._userName = userName;
  }

  _loadStatistiscs() {
    return saveStat(this._stat, this._userName)
           .then(() => loadStat(this._userName))
           .then((data) => {
             this._data = data;
           });
  }

  getData() {
    return this._loadStatistiscs().then(() => Object.freeze(this._data));
  }
}
