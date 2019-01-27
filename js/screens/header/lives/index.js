import {createElementFromTemplate} from '../../util';
import {MAX_LIFES_COUNT, MAX_QUESTIONS} from '../../../common/constants';

const SRC_EMPTY = `empty`;
const SRC_FULL = `full`;
const ALT_EMPTY = `Missed Life`;
const ALT_FULL = `Life`;


export default (answers) => {

  if (!answers || answers.length !== MAX_QUESTIONS) {
    throw new Error(`SCREEN::HEADER::Не верно определен массив ответов::${answers}`);
  }

  let errLivesCount = answers.filter((itr) => (itr.res === 0)).length;

  let imgStr = ``;

  for (let i = 1; i <= MAX_LIFES_COUNT; i++) {
    const src = errLivesCount > 0 ? SRC_EMPTY : SRC_FULL;
    const alt = errLivesCount > 0 ? ALT_EMPTY : ALT_FULL;
    imgStr += `<img src="img/heart__${src}.svg" class="game__heart" alt="${alt}" width="31" height="27">`;
    errLivesCount--;
  }

  const content = `<div class="game__lives">${imgStr}</div>`;

  const element = createElementFromTemplate(content);

  return element;

};

