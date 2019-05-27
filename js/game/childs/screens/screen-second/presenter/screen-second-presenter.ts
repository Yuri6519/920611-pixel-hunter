import ScreenSecondView from '../view/screen-second-view';
import {RESP_UNKNOWN} from '../../../../../common/constants/index';
import ScreenSecondModel from '../model/screen-second-model'

type ProcessResponse = (result?: any) => {}

export default class ScreenSecondPresenter {
  private _model: ScreenSecondModel;
  private _view: ScreenSecondView;
  private _root: HTMLElement;

  constructor(model) {
    this._model = model;
    this._view = new ScreenSecondView(this.data);
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

  processResponse: ProcessResponse;


}
