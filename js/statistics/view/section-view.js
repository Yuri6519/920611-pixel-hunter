// модуль представления секции статистики

import {AbstractView} from '../../common/index';

export default class SectionView extends AbstractView {
  constructor(title) {
    super();
    this._title = title;
  }

  get template() {
    return `<section class="result">
            <h2 class="result__title">${this._title}</h2>
          </section>`;
  }

}
