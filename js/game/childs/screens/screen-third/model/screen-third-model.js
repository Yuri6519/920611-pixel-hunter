import {RESP_OK, RESP_FAIL, RESP_UNKNOWN} from '../../../../../common/constants/index';

const RIGHT_TYPE = `paint`;

export default class ScreenThirdModel {
  constructor(data) {
    this._state = {data, res: {}};
  }

  get data() {
    return this._state.data;
  }

  get result() {
    let retVal = RESP_UNKNOWN;
    const {data: {images} = {}, res: {src} = {}} = this._state;

    const arrElm = images.filter((elm) => elm.src === src);

    if (!arrElm || arrElm.length === 0) {
      throw new Error(`ScreenThirdModel::Не найден элемент в массиве для src = ${src}`);
    }

    const {type} = arrElm[0];
    retVal = type === RIGHT_TYPE ? RESP_OK : RESP_FAIL;

    return retVal;
  }

  setState(src) {
    this._state.res.src = src;
  }


}
