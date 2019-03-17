import GreetingView from './greeting-view';
import {GREETING} from '../../common/constants/index';

export default class GreetingPresenter {
  constructor(onResponse) {
    this._content = new GreetingView();
    this._root = this._content.element;
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
