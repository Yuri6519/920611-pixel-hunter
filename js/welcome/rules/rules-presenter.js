import RulesView from './view/rules-view';
import {RULES} from '../../common/constants/index';

export default class RulesPresenter {
  constructor(onResponse) {
    this._view = new RulesView();
    this._view.onSubmit = this.handleSubmit.bind(this);
    this._root = this._view.element;
    this._onResponse = onResponse;
  }

  get element() {
    return this._root;
  }

  handleSubmit(text) {
    if (this._onResponse && typeof this._onResponse === `function`) {
      this._onResponse(RULES, {inputText: text});
    }
  }

}
