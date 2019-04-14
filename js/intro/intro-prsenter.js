import IntroView from './intro-view';
import {Appl} from '../common/utils/index';

export default class IntroPresenter {
  constructor() {
    this._view = new IntroView();
    this._root = this._view.element;
    this._root.onclick = this.handleClick;
  }

  get element() {
    return this._root;
  }

  handleClick() {
    Appl.showWelcome(); 
  }

}
