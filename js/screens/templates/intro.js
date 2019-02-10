// Модуль "Интро"

import {createElementFromTemplate, processResponse} from '../../common/util';

const text = `Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.`;

export default (_, index) => {

  const content = `
  <section class="intro">
    <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
    <p class="intro__motto"><sup>*</sup> ${text}</p>
  </section>
  `;

  const element = createElementFromTemplate(content);

  element.querySelector(`.intro__asterisk`).addEventListener(`click`, () => {
    processResponse(index);
  });


  return element;

};
