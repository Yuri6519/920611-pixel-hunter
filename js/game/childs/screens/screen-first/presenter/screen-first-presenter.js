import ScreenFirstView from '../view/screen-first-view';
import {FIRST_GAME, RESP_UNKNOWN} from '../../../../../common/constants/index';

export default class ScreenFirstPresenter {
  constructor(model) {
    this._model = model;

    this._view = new ScreenFirstView({type: FIRST_GAME, data: this.data});
    this._view.onInputClick = this.onInputClick.bind(this);
    this._root = this._view.element;

  }

  get element() {
    return this._root;
  }

  get data() {
    return this._model.data;
  }

  onInputClick(evt) {
    let src = evt.target.parentNode;
    src = src ? src.parentNode : null;
    src = src ? src.querySelector(`img`) : null;
    src = src ? src.src : null;

    if (!src) {
      throw new Error(`Неверная структура элемента input: ${evt.target}`);
    }

    const value = evt.target.value;
    this._model.setState(src, value);
    const result = this._model.result;

    if (result !== RESP_UNKNOWN) {
      this.processResponse(result);
    }


  }

  processResponse() {}


}
