// Модуль "game-2"

import {createElementFromTemplate, showScreeen} from '../util';
import {THIRD_GAME} from '../../common/constants';
import initHeader from '../header/index';
import initFooter from '../footer/index';


export default (answers) => {

  const content = `
  <header class="header">
  </header>
  <section class="game">
    <p class="game__task">Угадай, фото или рисунок?</p>

    <form class="game__content  game__content--wide">

      <div class="game__option">

        <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">

        <label class="game__answer game__answer--photo">
          <input class="visually-hidden" name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>

        <label class="game__answer game__answer--paint">
          <input class="visually-hidden" name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
        
      </div>
    </form>


  </section>
  `;

  const element = createElementFromTemplate(content);

  // заголовок
  initHeader(element.querySelector(`.header`), false, answers);

  // footer
  initFooter(element.querySelector(`.game`), answers);


  Array.from(element.querySelectorAll(`.game__answer`)).forEach((itr) => {
    const inp = itr.querySelector(`input`);

    inp.addEventListener(`click`, () => {
      showScreeen(THIRD_GAME);
    });
  });

  return element;

};

