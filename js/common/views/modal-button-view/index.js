/*
  Модуль содержит представление кнопки на модальном окне
*/
import AbstractView from '../abstract-view/index';

class ModalButtonView extends AbstractView {
  constructor(title) {
    super();
    this.title = title;
  }

  get template() {
    return `<button class="modal__btn">${this.title}</button>`;
  }

  onClick() {}

  bind(_element) {
    const elm = _element.querySelector(`.modal__btn`);
    elm.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.onClick();
    });
  }

}

export default ModalButtonView;
