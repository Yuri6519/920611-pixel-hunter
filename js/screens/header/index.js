import headerButton from './button-back/index';
import headerTimer from './timer/index';
import headerLives from './lives/index';

// инициализация
export default (header, onlyButton, answers) => {
  if (!header) {
    header = document.createElement(`header`);
    header.classList.add(`header`);

  }

  header.appendChild(headerButton());

  if (!onlyButton) {
    header.appendChild(headerTimer());
    header.appendChild(headerLives(answers));
  }

  return header;
};
