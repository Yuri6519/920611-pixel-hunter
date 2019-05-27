import ConfirmView from './confirm-view';
import ModalButtonView from '../../views/modal-button-view/index';
import ModalCLoseButtonView from '../../views/modal-close-button/index';

export default class ConfirmPresenter {
  private _view: ConfirmView;
  private _root: HTMLElement;

  constructor() {
    this._view = new ConfirmView();
    this._root = this._view.element;
  }

  init() {

    const btnOk = (new ModalButtonView(`Ок`));
    btnOk.onClick = this.confirm;

    const btnCancel = new ModalButtonView(`Отмена`);
    btnCancel.onClick = this.close;

    const btnClose = (new ModalCLoseButtonView());
    btnClose.onClick = this.close;

    const form = this._root.querySelector(`.modal__inner`);
    const title = this._root.querySelector(`.modal__title`);

    if(form) {
      form.insertBefore(btnClose.element, title);
    } else {
      throw new Error(`ConfirmPresenter::init::form not defined`)
    }

    const wrapper = this._root.querySelector(`.modal__button-wrapper`);

    if(wrapper) {
      wrapper.appendChild(btnOk.element);
      wrapper.appendChild(btnCancel.element);
    } else {
      throw new Error(`ConfirmPresenter::init::wrapper not defined`)
    }

  }

  get element() {
    return this._root;
  }

  close() {}

  confirm() {}

}
