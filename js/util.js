// утилиты

const mainElement = document.querySelector(`#main`);

// ф-ия создает DOM element из строки
export const createElementFromTemplate = (elementString) => {
  const div = document.createElement(`div`);
  div.innerHTML = elementString;
  return div;
};

// ф-ия выводит экран
export const showScreeen = (element) => {
  const ln = mainElement.children.length;
  for (let i = 0; i < ln; i++) {
    mainElement.children[0].remove();
  }

  mainElement.appendChild(element);

};

// ф-ия возврата на экран приветствия
export const returnToGreetngScreen = (element, greetingScreen) => {
  element.addEventListener(`click`, () => {
    showScreeen(greetingScreen());
  });
};
