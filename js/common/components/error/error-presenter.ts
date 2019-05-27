import ErrorView from './error-view';

export default class ErrorPresenter {
  private _view: ErrorView;
  private _root: HTMLElement;
  
  constructor(message) {
    this._view = new ErrorView(message);
    this._root = this._view.element;
  }

  get element() {
    return this._root;
  }

}
