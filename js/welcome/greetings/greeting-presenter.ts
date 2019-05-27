import GreetingView from './greeting-view';
import {GREETING} from '../../common/constants/index';

export default class GreetingPresenter {
  private _view: GreetingView;
  private _root: HTMLElement;
  private _onResponse: any;

  constructor(onResponse) {
    this._view = new GreetingView();
    this._root = this._view.element;
    this._root.onclick = this.handleClick.bind(this);
    this._onResponse = onResponse;
  }

  get element() {
    return this._root;
  }

  handleClick() {
    if (this._onResponse && typeof this._onResponse === `function`) {
      this._onResponse(GREETING);
    }
  }

}
