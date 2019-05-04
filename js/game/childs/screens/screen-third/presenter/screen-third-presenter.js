import ScreenThirdView from '../view/screen-third-view';
import {RESP_UNKNOWN} from '../../../../../common/constants/index';

export default class ScreenThirdPresenter {
  constructor(model) {
    this._model = model;
    const obj = Object.assign({}, this.data, {modelType: this.type});
    this._view = new ScreenThirdView(obj);
    this._view.onOptiontClick = this.onOptiontClick.bind(this);
    this._root = this._view.element;
  }

  get type() {
    return this._model.type;
  }

  get element() {
    return this._root;
  }

  get data() {
    return this._model.data;
  }

  onOptiontClick(evt) {
    const src = evt.target.src;
    this._model.setState(src);
    const result = this._model.result;

    if (result !== RESP_UNKNOWN) {
      this.processResponse(result);
    } else {
      throw new Error(`ScreenThirdView::неверный результат: ${result}`);
    }

  }

  processResponse() {}


}
