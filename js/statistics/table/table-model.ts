export default class TableModel {
  private _data;
  constructor(data) {
    this._data = data;
  }

  get stat() {
    return this._data.stat;
  }

  get points() {
    return this._data.points;
  }

  get id() {
    return this._data.id;
  }

}
