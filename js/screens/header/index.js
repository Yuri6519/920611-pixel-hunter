import headerButton from './button-back/index';
import headerTimer from './timer/index';
import headerLives from './lives/index';

// инициализация
export default (header, onlyButton, answers) => {
  header.appendChild(headerButton());

  if (!onlyButton) {
    header.appendChild(headerTimer());
    header.appendChild(headerLives(answers));
  }
};
