import {HEADER_KEY_TIMER, HEADER_KEY_LIVES, MAX_LIFES_COUNT, MAX_TIME_FOR_ONE_LEVEL} from '../../../../common/constants/index';

const initialState = {
  time: MAX_TIME_FOR_ONE_LEVEL,
  lives: MAX_LIFES_COUNT,
};

const initialRenderKeys = {
  [HEADER_KEY_TIMER]: false,
  [HEADER_KEY_LIVES]: false,
};

export default class HeaderModel {
  constructor() {
    this._state = initialState;
    this._renderKeys = initialRenderKeys;
  }

  setState(state) {
    if (!state || typeof state !== `object`) {
      throw new Error(`HeaderModel::setState:: bad new state::`, state);
    }

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
