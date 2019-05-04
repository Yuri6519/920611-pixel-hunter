import {RESP_OK, RESP_FAIL, RESP_UNKNOWN} from '../../../../../common/constants/index';

const PAINT_TYPE = `paint`;
const PAINT_STR = `рисунок`;

const PHOTO_TYPE = `photo`;
const PHOTO_STR = `фото`;

export default class ScreenThirdModel {
  constructor(data) {
    this._state = {data, res: {}};
    const {question} = data;
    if (question.indexOf(PAINT_STR) > 0) {
      this._rightType = PAINT_TYPE;
    } else if (question.indexOf(PHOTO_STR) > 0) {
      this._rightType = PHOTO_TYPE;
    }

    if (!this._rightType) {
      throw new Error(`Неверный тип вопроса для игры с тремя экранами: ${question}`);
    }
  }

  get type() {
    return this._rightType;
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
    retVal = type === this._rightType ? RESP_OK : RESP_FAIL;

    return retVal;
  }

  setState(src) {
    this._state.res.src = src;
  }


}
