/*
  Модуль содержит поле ввода для формы
*/
import {AbstractView} from '../../../common/index';

type OnInput = (param?: any) => void

class InputView extends AbstractView {
  private placeHolder;
  constructor(placeHolder) {
    super();
    this.placeHolder = placeHolder;
  }

  onInput: OnInput;

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
