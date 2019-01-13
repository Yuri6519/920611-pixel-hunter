// export {default as headerButton} from './button-back/index';
// export {default as headerTimer} from './timer/index';
// export {default as headerLives} from './lives/index';

import headerButton from './button-back/index';
import headerTimer from './timer/index';
import headerLives from './lives/index';

// инициализация
export const initHeader = (header, onlyButton) => {
  header.appendChild(headerButton());

  if (!onlyButton) {
    header.appendChild(headerTimer());
    header.appendChild(headerLives());
  }
};
