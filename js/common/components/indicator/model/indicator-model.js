
const CLASS_UNKNOWN = `unknown`;

export default class IndicatorModel {
  constructor(count) {
    this._state = {classes: []};
    this._count = count;
    this.init();
  }

  get classes() {
    return this._state.classes;
  }

  setState(classes) {
    if (!classes || !(classes instanceof Array)) {
      throw new Error(`IndicatorModel::setState:: bad new classes::`, classes);
    }

    this._state = {classes};

  }

  init() {
    for (let i = 0; i < this._count; i++) {
      this._state.classes.push(CLASS_UNKNOWN);
    }
  }


}
