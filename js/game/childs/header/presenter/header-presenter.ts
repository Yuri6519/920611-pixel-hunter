
import ButtonBackView from '../../../../common/views/button-back-view/index';
import {HeaderView} from '../../../../common/index';
import TimerView from '../views/timer-view';
import LivesView from '../views/lives-view';
import {HEADER_KEY_TIMER, HEADER_KEY_LIVES} from '../../../../common/constants/index';
import HeaderModel from '../model/header-model'

export default class HeaderPresenter {
  private _model: HeaderModel;
  private _view: HeaderView;
  private _root: HTMLElement;
  private _btnElement: HTMLElement;
  private _timerElement: HTMLElement;
  private _livesCountElement: HTMLElement;
  private _renderObjects: object;

  constructor(model: HeaderModel, onButtonBackClick: any) {
    this._model = model;

    this._view = new HeaderView();
    this._root = this._view.element;

    const btnView = new ButtonBackView();
    btnView.onClick = onButtonBackClick;
    this._btnElement = btnView.element;

    this._timerElement = new TimerView().element;
    this._livesCountElement = new LivesView().element;

    const element = this._root.querySelector(`.header`);
    if (element) {
      element.appendChild(this._btnElement);
      element.appendChild(this._timerElement);
      element.appendChild(this._livesCountElement);
    } else {
      throw new Error(`HeaderPresenter::constructor:: class header not found`);
    }

    this._renderObjects = {
      [HEADER_KEY_TIMER]: this.renderTimer.bind(this),
      [HEADER_KEY_LIVES]: this.renderLives.bind(this),
    };

  }

  get element() {
    return this._root;
  }

  get time() {
    return this._model.time;
  }

  get lives() {
    return this._model.lives;
  }

  update(newState) {
    const {setState, renderKeys} = this._model;
    setState.call(this._model, newState);
    for (const key in renderKeys) {
      if (renderKeys[key]) {
        this._renderObjects[key]();
      }
    }

  }

  renderTimer() {
    this._timerElement.innerHTML = ``;
    this._timerElement.appendChild(new TimerView(this.time).element);
  }

  renderLives() {
    this._livesCountElement.innerHTML = ``;
    this._livesCountElement.appendChild(new LivesView(this.lives).element);
  }


}
