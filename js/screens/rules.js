// Модуль "rules"

import {createElementFromTemplate, showScreeen} from './util';
import {FIRST_GAME} from '../common/constants';
import {initHeader} from './header/index';


export default () => {

  const content = `
  <header class="header">
  </header>
  <section class="rules">
    <h2 class="rules__title">Правила</h2>
    <ul class="rules__description">
      <li>Угадай 10 раз для каждого изображения фото
        <img class="rules__icon" src="img/icon-photo.png" width="32" height="31" alt="Фото"> или рисунок
        <img class="rules__icon" src="img/icon-paint.png" width="32" height="31" alt="Рисунок"></li>
      <li>Фотографиями или рисунками могут быть оба изображения.</li>
      <li>На каждую попытку отводится 30 секунд.</li>
      <li>Ошибиться можно не более 3 раз.</li>
    </ul>
    <p class="rules__ready">Готовы?</p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </section>
  `;
  const element = createElementFromTemplate(content);
  const inputUserName = element.querySelector(`.rules__input`);
  const rulesButton = element.querySelector(`.rules__button`);
  const form = element.querySelector(`.rules__form`);

  initHeader(element.querySelector(`.header`), true);

  form.addEventListener(`submit`, (evt) => {
    evt.preventDefault();
    showScreeen(FIRST_GAME);
    return false;
  });

  inputUserName.addEventListener(`input`, (evt) => {
    rulesButton.disabled = !evt.target.value.trim().length;
  });

  return element;

};

