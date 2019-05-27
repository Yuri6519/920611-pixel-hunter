import {NEXT_LEVEL_SCREEN} from '../constants/index';

type setStateParam = {key: any, respParams: any}

export type AbstrModel = {
  nextScreen?: any, 
  restart?: () => {},
  setState?: (param: setStateParam) => {},
}

export default class AbstractPresenter {
  protected model: any;
  protected _root: HTMLElement;
  protected _respParams: any;
  protected _mapScreensToFunc: object;

  constructor(model: AbstrModel) {
    this.model = model;
    this.initMapStruct();
  }

  get element() {
    return this._root;
  }

  initMapStruct() {
    if (!this._mapScreensToFunc) {
      this._mapScreensToFunc = {};
      this._mapScreensToFunc[NEXT_LEVEL_SCREEN] = this.invokeNextLevel.bind(this);
    }
  }

  changeRootElement(element) {
    this._root.innerHTML = ``;
    this._root.appendChild(element);
  }

  invokeNextLevel() {}

  processLevel(next?: any) {
    const nextScreen = next || this.model.nextScreen;
    const levelFunc = this._mapScreensToFunc[nextScreen];

    if (levelFunc) {
      levelFunc();
    } else {
      throw new Error(`WelcomePresenter:: bad screen key = ${nextScreen}`);
    }
  }

  beforeStart() {}
  afterStart() {}

  start() {
    this.beforeStart();
    this.model.restart();
    this._respParams = null;
    this.processLevel();
    this.afterStart();
  }

  processResponse(key: any, respParams: any) {
    this._respParams = respParams;
    this.model.setState({key, respParams: this._respParams });
    this.processLevel();
  }


}
