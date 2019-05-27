
const CLASS_UNKNOWN = `unknown`;

type IndClasses = Array<string>
type IndState = {classes: IndClasses}

export default class IndicatorModel {
  private _state: IndState
  private _count: number

  constructor(count: number) {
    this._state =  {classes: []};
    this._count = count;
    this.init();
  }

  public get classes() {
    return this._state.classes;
  }

  public setState(classes: IndClasses = []) {
    this._state = {classes};
  }

  init() {
    for (let i = 0; i < this._count; i++) {
      this._state.classes.push(CLASS_UNKNOWN);
    }
  }


}
