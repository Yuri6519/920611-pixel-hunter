// модуль представления секции статистики

import {AbstractView} from '../../common/index';

export default class SectionView extends AbstractView {
  private _title: string;

  constructor(title: string) {
    super();
    this._title = title;
  }

  get template() {
    return `<section class="result">
            <h2 class="result__title">${this._title}</h2>
          </section>`;
  }

}
