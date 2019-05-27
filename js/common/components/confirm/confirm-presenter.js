import ConfirmView from './confirm-view';
import ModalButtonView from '../../views/modal-button-view';
import ModalCLoseButtonView from '../../views/modal-close-button';

export default class ConfirmPresenter {
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
    form.insertBefore(btnClose.element, title);

    const wrapper = this._root.querySelector(`.modal__button-wrapper`);
    wrapper.appendChild(btnOk.element);
    wrapper.appendChild(btnCancel.element);

  }

  get element() {
    return this._root;
  }

  close() {}

  confirm() {}

}
