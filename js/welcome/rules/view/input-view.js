/*
  Модуль содержит поле ввода для формы
*/
import {AbstractView} from '../../../common/index';

class InputView extends AbstractView {
  constructor(placeHolder) {
    super();
    this.placeHolder = placeHolder;
  }

  onInput() {}

  get template() {
    return `<input class="rules__input" type="text" placeholder="${this.placeHolder}">`;
  }

  bind(_element) {
    _element.addEventListener(`input`, (evt) => {
      this.onInput(evt.target.value);
    });
  }

}

export default InputView;
