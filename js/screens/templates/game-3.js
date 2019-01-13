// Модуль "game-3"

import {createElementFromTemplate, showScreeen} from '../util';
import {STAT} from '../../common/constants';
import initHeader from '../header/index';
import initFooter from '../footer/index';


export default (answers) => {

  const content = `
  <header class="header">
  </header>
  <section class="game">
    <p class="game__task">Найдите рисунок среди изображений</p>

    <form class="game__content  game__content--triple">

      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
      
      <div class="game__option  game__option--selected">
        <img src="http://placehold.it/304x455" alt="Option 2" width="304" height="455">
      </div>
      
      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 3" width="304" height="455">
        
      </div>
    </form>


  </section>
  `;

  const element = createElementFromTemplate(content);

  // заголовок
  initHeader(element.querySelector(`.header`), false, answers);

  // footer
  initFooter(element.querySelector(`.game`), answers);


  Array.from(element.querySelectorAll(`.game__option`)).forEach((itr) => {
    itr.addEventListener(`click`, () => {
      showScreeen(STAT);
    });
  });

  return element;

};
