// Модуль "game-3"

import {createElementFromTemplate, processResponse} from '../util';
import initForm from '../form/index';
import {RESP_OK, RESP_FAIL} from '../../common/constants';

const RIGHT_TYPE = `paint`;

export default (type, index, data, header, footer) => {

  const content = `
  <div>
    <section class="game">
      <p class="game__task">Найдите рисунок среди изображений</p>
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

  Array.from(element.querySelectorAll(`.game__option`)).forEach((itr) => {
    itr.addEventListener(`click`, (evt) => {
      const {images} = data;
      const arrElm = images.filter((elm) => elm.src === evt.target.src);

      if (!arrElm || arrElm.length === 0) {
        throw new Error(`Не найден элемент в массиве для src = ${evt.target.src}`);
      }

      const res = arrElm[0].type === RIGHT_TYPE ? RESP_OK : RESP_FAIL;
      const time = 15; // mock data
      const resp = {res, time};

      processResponse(index, resp);

    });
  });

  return element;

};
