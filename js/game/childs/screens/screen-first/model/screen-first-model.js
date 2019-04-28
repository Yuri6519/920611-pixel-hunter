import {RESP_OK, RESP_FAIL, RESP_UNKNOWN} from '../../../../../common/constants/index';

export default class ScreenFirstModel {
  constructor(data) {
    this._state = {data, res: {}};
  }

  get data() {
    return this._state.data;
  }

  get result() {
    let retVal = RESP_UNKNOWN;
    const {data: {images}, res} = this._state;
    for (const img of images) {
      const {src, type} = img;
      const resSrc = res[src];
      if (resSrc === undefined) {
        retVal = RESP_UNKNOWN;
        break;
      } else {
        if (retVal !== RESP_FAIL) {
          retVal = type === resSrc ? RESP_OK : RESP_FAIL;
        }
      }
    }
    return retVal;
  }

  setState(src, value) {
    this._state.res[src] = value;
  }


}
