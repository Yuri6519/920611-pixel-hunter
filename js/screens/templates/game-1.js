// Модуль "game-1"

import {createElementFromTemplate, processResponse} from '../../common/util';
import initForm from '../form/index';
import {RESP_OK, RESP_FAIL} from '../../common/constants';

const responses = {};

const onInputClick = (evt, index) => {
  // запоминаем выбор пользователя
  responses[evt.target.name].checkValue = evt.target.value;

  // проверка на все ответы
  let res;
  for (const key in responses) {
    if (responses[key].checkValue) {

      if (res === undefined || res === RESP_OK) {
        // переопределяем
        res = responses[key].checkValue === responses[key].type ? RESP_OK : RESP_FAIL;
      }
    } else {
      res = undefined;
      break;
    }
  }

  if (res !== undefined) {
    // получаем время
    const time = 9; // mock data
    const resp = {res, time};
    processResponse(index, resp);
  }
};

export default (type, index, data, header, footer) => {

  const content = `
  <div>
    <section class="game">
      <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
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
    const srcImg = itr.querySelector(`img`).src;

    const {images} = data;
    let typeImg;
    for (const obj of images) {
      typeImg = !typeImg && obj.src === srcImg ? obj.type : typeImg;
    }

    if (!typeImg) {
      throw new Error(`Не найден image gпо src = ${srcImg}`);
    }

    Array.from(itr.querySelectorAll(`.game__answer`)).forEach((elm) => {

      const inp = elm.querySelector(`input`);

      responses[inp.name] = {
        type: typeImg,
        checkValue: undefined,
      };

      inp.addEventListener(`click`, (evt) => {
        onInputClick(evt, index);
      });

    });

  });

  return element;

};

