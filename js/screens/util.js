// утилиты
import {GREETING} from '../common/constants';

// ф-ия создает DOM element из строки
export const createElementFromTemplate = (elementString) => {
  const div = document.createElement(`div`);
  div.innerHTML = elementString;
  return div;
};

// ф-ия выводит экран
export let showScreeen;
export const initShowScreen = (fn) => {
  showScreeen = fn;
};

// ф-ия возврата на экран приветствия
export const returnToGreetngScreen = (element) => {
  element.addEventListener(`click`, () => {
    showScreeen(GREETING);
  });
};

