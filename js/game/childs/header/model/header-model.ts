import {HEADER_KEY_TIMER, HEADER_KEY_LIVES, MAX_LIFES_COUNT, MAX_TIME_FOR_ONE_LEVEL} from '../../../../common/constants/index';

type HeaderState =  {
  time: number,
  lives: number,
};

type HeaderInitialRenderKeys = {
  [HEADER_KEY_TIMER]: boolean,
  [HEADER_KEY_LIVES]: boolean,
};

const initialState = {
  time: MAX_TIME_FOR_ONE_LEVEL,
  lives: MAX_LIFES_COUNT,
};

const initialRenderKeys = {
  [HEADER_KEY_TIMER]: false,
  [HEADER_KEY_LIVES]: false,
};

export default class HeaderModel {
  private _state: HeaderState;
  private _renderKeys: HeaderInitialRenderKeys;

  constructor() {
    this._state = initialState;
    this._renderKeys = initialRenderKeys;
  }

  setState(state: HeaderState) {
    const {time: newTime, lives: newLives} = this._state;
    const {time, lives = newLives} = state;
    this._renderKeys[HEADER_KEY_TIMER] = time !== newTime;
    this._renderKeys[HEADER_KEY_LIVES] = lives !== newLives;
    this._state = {time, lives};
  }

  get renderKeys() {
    return this._renderKeys;
  }

  get time() {
    return this._state.time;
  }

  get lives() {
    return this._state.lives;
  }


}
