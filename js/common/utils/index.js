// утилиты

// ф-ия создает DOM element из строки
export const createElementFromTemplate = (elementString) => {
  const div = document.createElement(`div`);
  div.innerHTML = elementString;
  return div;
};

let Appl;
export const initAppl = (Application) => {
  Appl = Application;
};


export {Appl};
export {default as resize} from './resize';
export {default as points} from './score-utils';
