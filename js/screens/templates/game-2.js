// Модуль "game-2"

import {createElementFromTemplate, processResponse} from '../util';
import initForm from '../form/index';
import {RESP_OK, RESP_FAIL} from '../../common/constants';


export default (type, index, data, header, footer) => {

  const content = `
  <div>
    <section class="game">
      <p class="game__task">Угадай, фото или рисунок?</p>
      ${initForm(data, type)}
    </section>
  </div>
  `;

  const element = createElementFromTemplate(content);

  const game = element.querySelector(`.game`);

  // заголовок
  element.querySelector(`div`).insertBefore(header, game);

  // footer
  game.appendChild(footer);

  Array.from(element.querySelectorAll(`.game__answer`)).forEach((itr) => {
    const inp = itr.querySelector(`input`);

    inp.addEventListener(`click`, (evt) => {

      // получаем время
      const res = evt.target.value === data.images[0].type ? RESP_OK : RESP_FAIL;
      const time = 15; // mock data
      const resp = {res, time};

      processResponse(index, resp);

    });
  });

  return element;

};
