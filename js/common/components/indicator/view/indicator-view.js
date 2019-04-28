/*
  Модуль содержит представление индикатора
*/
import AbstractView from '../../../views/abstract-view/index';


class IndicatorView extends AbstractView {
  constructor(classes = []) {
    super();
    this.classes = classes;
  }

  get template() {
    let li = ``;

    if (this.classes && this.classes instanceof Array && this.classes.length > 0) {
      li = this.classes.map((className) => {
        return `<li class="stats__result stats__result--${className}"></li>`;
      }).join(``);
    }
    return `<ul class="stats">${li}</ul>`;
  }

}

export default IndicatorView;
