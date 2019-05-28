/*
  Модуль содержит представление таймера на заголовке
*/
import {AbstractView} from '../../../../common/index';
import {MAX_TIME_FOR_ONE_LEVEL, ATTENTION_TIME} from '../../../../common/constants/index';

class TimerView extends AbstractView {
  constructor(time) {
    super();
    this._time = (time === undefined) || (time === null) ? MAX_TIME_FOR_ONE_LEVEL : time;
  }

  get color() {
    const res = this._time > ATTENTION_TIME ? `#00222d` : `#da3232`;
    return res;
  }

  get time() {
    return this._time;
  }

  get template() {
    return `<div class="game__timer" style="color:${this.color}" >${this.time}</div>`;
  }

}

export default TimerView;
