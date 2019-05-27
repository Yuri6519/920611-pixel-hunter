/*
  Модуль содержит представление изображений количества жизней на заголовке
*/
import {AbstractView} from '../../../../common/index';
import {MAX_LIFES_COUNT} from '../../../../common/constants/index';

const SRC_EMPTY = `empty`;
const SRC_FULL = `full`;
const ALT_EMPTY = `Missed Life`;
const ALT_FULL = `Life`;


class LivesView extends AbstractView {
  private _count: number;
  
  constructor(count?: number) {
    super();
    this._count = count !== undefined ? count : MAX_LIFES_COUNT;
  }

  get template() {
    let livesCount = this._count;
    let imgStr = ``;

    for (let i = 1; i <= MAX_LIFES_COUNT; i++) {
      const src = livesCount > 0 ? SRC_FULL : SRC_EMPTY;
      const alt = livesCount > 0 ? ALT_FULL : ALT_EMPTY;
      imgStr += `<img src="img/heart__${src}.svg" class="game__heart" alt="${alt}" width="31" height="27">`;
      livesCount--;
    }

    return `<div class="game__lives">${imgStr}</div>`;

  }

}

export default LivesView;
