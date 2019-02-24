import {returnToGreetngScreen} from '../../common/util';

import {ButtonBackView, TimerView, LivesView} from '../../view/header/index';


// инициализация
export default (header, onlyButton, answers) => {

  // кнопка
  const buttonBackView = new ButtonBackView();
  buttonBackView.onClick = returnToGreetngScreen;

  if (!header) {
    header = document.createElement(`header`);
    header.classList.add(`header`);
  }

  header.appendChild(buttonBackView.element);


  if (!onlyButton) {
    // таймер
    const timerView = new TimerView();

    // жизни
    const livesView = new LivesView(answers);

    header.appendChild(timerView.element);
    header.appendChild(livesView.element);
  }

  return header;
};
