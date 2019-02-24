// Модуль "greeting"

import GreetingView from '../../view/greeting/greeting-view';
import {processResponse} from '../../common/util';

const handleClick = (index) => {
  return () => {
    processResponse(index);
  };
};

export default (_, index) => {
  const greetingView = new GreetingView();
  greetingView.onClick = handleClick(index);

  return greetingView.element;

};
