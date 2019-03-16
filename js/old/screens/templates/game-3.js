// Модуль "game-3"

import {processResponse} from '../../common/util';
import {RESP_OK, RESP_FAIL} from '../../common/constants';
import ThirdScreenView from '../../view/screens/third-screen-view';

const RIGHT_TYPE = `paint`;

const handleOption = (evt, index, images) => {

  const arrElm = images.filter((elm) => elm.src === evt.target.src);

  if (!arrElm || arrElm.length === 0) {
    throw new Error(`Не найден элемент в массиве для src = ${evt.target.src}`);
  }

  const res = arrElm[0].type === RIGHT_TYPE ? RESP_OK : RESP_FAIL;
  const time = 25; // mock data
  const resp = {res, time};

  processResponse(index, resp);


};

const onOptiontClick = (index, images) => {
  return (evt) => {
    handleOption(evt, index, images);
  };
};

export default (type, index, data, header, footer) => {

  const {images} = data;
  const secondScreenView = new ThirdScreenView({type, data, header, footer});
  secondScreenView.onOptiontClick = onOptiontClick(index, images.slice());
  const element = secondScreenView.element;

  return element;

};
