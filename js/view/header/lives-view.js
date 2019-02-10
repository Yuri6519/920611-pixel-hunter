/*
  Модуль содержит представление изображений количества жизней на заголовке
*/
import AbstractView from '../abstract-view';
import {MAX_LIFES_COUNT, MAX_QUESTIONS} from '../../common/constants';

const SRC_EMPTY = `empty`;
const SRC_FULL = `full`;
const ALT_EMPTY = `Missed Life`;
const ALT_FULL = `Life`;


class LivesView extends AbstractView {
  constructor(answers) {
    super();

    if (!answers || answers.length !== MAX_QUESTIONS) {
      throw new Error(`SCREEN::HEADER::Не верно определен массив ответов::${answers}, length=${answers.length}`);
    }

    this._answers = answers;
  }

  get template() {
    let errLivesCount = this._answers.filter((itr) => (itr.res === 0)).length;

    let imgStr = ``;

    for (let i = 1; i <= MAX_LIFES_COUNT; i++) {
      const src = errLivesCount > 0 ? SRC_EMPTY : SRC_FULL;
      const alt = errLivesCount > 0 ? ALT_EMPTY : ALT_FULL;
      imgStr += `<img src="img/heart__${src}.svg" class="game__heart" alt="${alt}" width="31" height="27">`;
      errLivesCount--;
    }

    return `<div class="game__lives">${imgStr}</div>`;

  }

}

export default LivesView;
