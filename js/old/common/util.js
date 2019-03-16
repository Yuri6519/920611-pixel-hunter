// утилиты

// ф-ия создает DOM element из строки
export const createElementFromTemplate = (elementString) => {
  const div = document.createElement(`div`);
  div.innerHTML = elementString;
  return div;
};

export let processResponse;
export const initProcessResponse = (fn) => {
  processResponse = fn;
};

let returnProc;
export const initReturnProc = (index, fn) => {
  returnProc = () => fn(index);
};

// ф-ия возврата на экран приветствия
export const returnToGreetngScreen = () => {
  returnProc();
};

