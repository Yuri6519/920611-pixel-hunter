// Модуль "game-1"

import {processResponse} from '../../common/util';
import {RESP_OK, RESP_FAIL} from '../../common/constants';
import FirstScreenView from '../../view/screens/first-screen-view';

let responses = {};

const handleInput = (evt, index, images) => {
  let src = evt.target.parentNode;
  src = src ? src.parentNode : null;
  src = src ? src.querySelector(`img`) : null;
  src = src ? src.src : null;

  if (!src) {
    throw new Error(`Невреная структура элемента input: ${evt.target}`);
  }

  // запомним выбор пользователя
  const value = evt.target.value;

  for (const itr of images) {
    if (itr.src === src) {
      const {type} = itr;
      responses[src] = {type, value};
    }
  }

  // проверим
  let res = images.every((itr) => {
    const {src: imgSrc} = itr;
    return responses[imgSrc];
  });

  if (res) {
    for (const key in responses) {
      if (typeof key === `string`) {
        const {type, value: resValue} = responses[key];
        res = type === resValue ? RESP_OK : RESP_FAIL;
        if (res === RESP_FAIL) {
          break;
        }
      }
    }

    // получаем время
    const time = 9; // mock data
    const resp = {res, time};
    processResponse(index, resp);

  }

};

const onInputClick = (index, images) => {
  return (evt) => {
    handleInput(evt, index, images);
  };
};

export default (type, index, data, header, footer) => {

  responses = {};

  const {images} = data;
  const firstScreenView = new FirstScreenView({type, data, header, footer});
  firstScreenView.onInputClick = onInputClick(index, images.slice());
  const element = firstScreenView.element;

  return element;

};

