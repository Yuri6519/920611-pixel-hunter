/*
  Модуль содержит представление таймера на заголовке
*/
import {AbstractView} from '../../../../common/index';
import {MAX_TIME_FOR_ONE_LEVEL} from '../../../../common/constants/index';

class TimerView extends AbstractView {
  private _time: number;
  
  constructor(time?: number) {
    super();
    this._time = (time === undefined) || (time === null) ? MAX_TIME_FOR_ONE_LEVEL : time;
  }

  get template() {
    return `<div class="game__timer">${this._time}</div>`;
  }

}

export default TimerView;
