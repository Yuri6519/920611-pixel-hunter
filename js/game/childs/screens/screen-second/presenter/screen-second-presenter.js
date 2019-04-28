import ScreenSecondView from '../view/screen-second-view';
import {SECOND_GAME, RESP_UNKNOWN} from '../../../../../common/constants/index';

export default class ScreenSecondPresenter {
  constructor(model) {
    this._model = model;

    this._view = new ScreenSecondView({type: SECOND_GAME, data: this.data});
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
    const value = evt.target.value;
    this._model.setState(value);
    const result = this._model.result;

    if (result !== RESP_UNKNOWN) {
      this.processResponse(result);
    } else {
      throw new Error(`ScreenSecondView::неверный результат: ${result}`);
    }

  }

  processResponse() {}


}
