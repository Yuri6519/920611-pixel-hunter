/*
  Модуль содержит представление экрана статистики
*/
import AbstractView from '../abstract-view';
import {statistic} from '../stat/index';

class StatView extends AbstractView {
  constructor(initData) {
    super();
    this.initData = initData;
  }

  render() {
    const screen = super.render();

    const {header, respData} = this.initData;

    // заголовок
    screen.appendChild(header);

    // статистика
    const stat = statistic(respData);
    screen.appendChild(stat);

    return screen;

  }


  get template() {
    return `<div/>`;
  }

}

export default StatView;
