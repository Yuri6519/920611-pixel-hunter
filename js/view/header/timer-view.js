/*
  Модуль содержит представление таймера на заголовке
*/
import AbstractView from '../abstract-view';

class TimerView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `<div class="game__timer">NN</div>`;
  }

}

export default TimerView;
