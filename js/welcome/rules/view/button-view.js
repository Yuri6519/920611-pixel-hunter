/*
  Модуль содержит кнопку для формы
*/
import {AbstractView} from '../../../common/index';

class ButtonView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `<button class="rules__button  continue" type="submit" disabled>Go!</button>`;
  }

}

export default ButtonView;
