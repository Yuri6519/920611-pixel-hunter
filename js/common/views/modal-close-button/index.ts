/*
  Модуль содержит представление кнопки закрытия на модальном окне
*/
import AbstractView from '../abstract-view/index';

class ModalCLoseButtonView extends AbstractView {

  get template() {
    return `
      <button class="modal__close" type="button">
        <span class="visually-hidden">Закрыть</span>
      </button>
    `;
  }

  onClick() {}

  bind(_element) {
    const elm = _element.querySelector(`.modal__close`);
    elm.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.onClick();
    });
  }

}

export default ModalCLoseButtonView;
