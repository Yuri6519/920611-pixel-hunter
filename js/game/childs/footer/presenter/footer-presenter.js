import {IndicatorPresenter, IndicatorModel} from '../../../../common/components/indicator/index';
import FooterView from '../view/footer-view';

export default class FooterPresenter {
  constructor(count) {

    this._view = new FooterView();
    this._root = this._view.element;

    this._indicatorElement = new IndicatorPresenter(new IndicatorModel(count)).element;
    this._root.appendChild(this._indicatorElement);
  }

  get element() {
    return this._root;
  }

  update(data) {
    this._indicatorElement.update(data);
  }

}
