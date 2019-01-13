// Модуль "game-1"

import {createElementFromTemplate, showScreeen} from './util';
import {SECOND_GAME} from '../common/constants';
import {initHeader} from './header/index';


export default () => {
  const content = `
  <header class="header">
  </header>
  <section class="game">
    <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
    <form class="game__content">
      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input class="visually-hidden" name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input class="visually-hidden" name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
          <input class="visually-hidden" name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input class="visually-hidden" name="question2" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    <ul class="stats">
      <li class="stats__result stats__result--wrong"></li>
      <li class="stats__result stats__result--slow"></li>
      <li class="stats__result stats__result--fast"></li>
      <li class="stats__result stats__result--correct"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--unknown"></li>
    </ul>
  </section>
  `;

  const element = createElementFromTemplate(content);

  initHeader(element.querySelector(`.header`));

  const arr = [];

  Array.from(element.querySelectorAll(`.game__answer`)).forEach((itr) => {
    const inp = itr.querySelector(`input`);

    if (!arr.some((it) => it.name === inp.name)) {
      arr.push({
        name: inp.name,
        check: false
      });
    }

    inp.addEventListener(`click`, (evt) => {
      arr.forEach((el) => {
        if (el.name === evt.target.name) {
          el.check = true;
        }
      });

      if (arr.every((it) => it.check)) {
        showScreeen(SECOND_GAME);
      }

    });
  });

  return element;

};
