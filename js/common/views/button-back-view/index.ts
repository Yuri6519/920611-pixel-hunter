/*
  Модуль содержит представление кнопки на заголовке
*/
import AbstractView from '../abstract-view/index';

class ButtonBackView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    const content = `
    <button class="back">
      <span class="visually-hidden">Вернуться к началу</span>
      <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
        <use xlink:href="img/sprite.svg#arrow-left"></use>
      </svg>
      <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
        <use xlink:href="img/sprite.svg#logo-small"></use>
      </svg>
    </button>
    `;

    return content;

  }

  onClick() {}

  bind(_element) {
    const backElm = _element.querySelector(`.back`);
    backElm.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      this.onClick();
    });

  }
}

export default ButtonBackView;
