// Модуль "game-2"

import {processResponse} from '../../common/util';
import {RESP_OK, RESP_FAIL} from '../../common/constants';
import SecondScreenView from '../../view/screens/second-screen-view';

const handleInput = (evt, index, images) => {
  if (!images[0]) {
    throw new Error(`handleInput::неверный параметр images - is empty`);
  }

  // получаем время
  const res = evt.target.value === images[0].type ? RESP_OK : RESP_FAIL;
  const time = 15; // mock data
  const resp = {res, time};

  processResponse(index, resp);


};

const onInputClick = (index, images) => {
  return (evt) => {
    handleInput(evt, index, images);
  };
};

export default (type, index, data, header, footer) => {

  const {images} = data;
  const secondScreenView = new SecondScreenView({type, data, header, footer});
  secondScreenView.onInputClick = onInputClick(index, images.slice());
  const element = secondScreenView.element;

  return element;

};
