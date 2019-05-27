import {IndicatorPresenter, IndicatorModel} from '../../../../common/components/indicator/index';
import FooterView from '../view/footer-view';

export default class FooterPresenter {
  private _view: FooterView;
  private _root: HTMLElement;
  private _indicator: IndicatorPresenter;
  private _indicatorElement: HTMLElement;

  constructor(count) {

    this._view = new FooterView();
    this._root = this._view.element;

    this._indicator = new IndicatorPresenter(new IndicatorModel(count));
    this._indicatorElement = this._indicator.element;
    this._root.appendChild(this._indicatorElement);
  }

  get element() {
    return this._root;
  }

  update(data) {
    this._indicator.update(data);
  }

}
