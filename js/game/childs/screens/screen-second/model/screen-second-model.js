import {RESP_OK, RESP_FAIL, RESP_UNKNOWN} from '../../../../../common/constants/index';

export default class ScreenSecondModel {
  constructor(data) {
    this._state = {data, res: {}};
  }

  get data() {
    return this._state.data;
  }

  get result() {
    let retVal = RESP_UNKNOWN;

    const {data: {images} = {}, res: {value} = {}} = this._state;
    const {type} = images[0];
    retVal = type === value ? RESP_OK : RESP_FAIL;

    return retVal;
  }

  setState(value) {
    this._state.res.value = value;
  }


}
