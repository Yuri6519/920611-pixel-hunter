// Модуль "Интро"

import {createElementFromTemplate, returnToGreetngScreen} from './util';

export default () => {

  const content = `
  <section class="intro">
    <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </section>
  `;

  const element = createElementFromTemplate(content);

  returnToGreetngScreen(element.querySelector(`.intro__asterisk`));

  return element;

};
