// Модуль "Интро"

import IntroView from '../../view/intro/intro-view';
import {processResponse} from '../../common/util';

const handleClick = (index) => {
  return () => {
    processResponse(index);
  };
};

export default (_, index) => {
  const introView = new IntroView();
  introView.onClick = handleClick(index);
  return introView.element;
};
