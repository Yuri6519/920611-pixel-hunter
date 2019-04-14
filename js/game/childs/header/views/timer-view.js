/*
  Модуль содержит представление таймера на заголовке
*/
import {AbstractView} from '../../../../common/index';

const INITIAL_TIME = 0;

class TimerView extends AbstractView {
  constructor(time) {
    super();
    this._time = time || INITIAL_TIME;
  }

  get template() {
    return `<div class="game__timer">${this._time}</div>`;
  }

}

export default TimerView;
