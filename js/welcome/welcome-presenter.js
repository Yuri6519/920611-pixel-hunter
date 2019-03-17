import WelcomeView from './welcome-view';
import {GREETING, RULES, NEXT_LEVEL_SCREEN} from '../common/constants/index';
import GreetingPresenter from './greetings/greeting-presenter';
import RulesPresenter from './rules/rules-presenter';
import ButtonBackView from '../common/views/button-back-view/index';

export default class WelcomePresenter {
  constructor(model) {
    this.model = model;
    this.initMapStruct();

    this._content = new WelcomeView();
    this._root = this._content.element;
  }

  get element() {
    return this._root;
  }

  initMapStruct() {
    if (!this._mapScreensToFunc) {
      this._mapScreensToFunc = {};
      this._mapScreensToFunc[GREETING] = this.processGreeting.bind(this);
      this._mapScreensToFunc[RULES] = this.processRules.bind(this);
      this._mapScreensToFunc[NEXT_LEVEL_SCREEN] = this.invokeNextLevel.bind(this);
    }
  }

  changeRootElement(element) {
    this._root.innerHTML = ``;
    this._root.appendChild(element);
  }

  processGreeting() {
    console.log(`WelcomePresenter::processGreeting::`);

    const greeting = new GreetingPresenter(this.processResponse.bind(this));
    this.changeRootElement(greeting.element);
  }

  processRules() {
    console.log(`WelcomePresenter::processRules::`);

    const rulesView = document.createElement(`div`);
    const buttonBack = new ButtonBackView();
    buttonBack.onClick = this.onButtonBackClick.bind(this);
    rulesView.appendChild(buttonBack.element);

    const rules = new RulesPresenter(this.processResponse.bind(this));
    rulesView.appendChild(rules.element);

    this.changeRootElement(rulesView);
  }

  invokeNextLevel() {
    console.log(`WelcomePresenter::invokeNextLevel::`);
  }

  start() {
    this.model.restart();
    this._addParams = null;
    this.processLevel();
  }

  processLevel() {

    console.log(`WelcomePresenter::processLevel::`);

    const nextScreen = this.model.nextScreen;
    const levelFunc = this._mapScreensToFunc[nextScreen];

    if (levelFunc) {
      levelFunc();
    } else {
      throw new Error(`WelcomePresenter:: bad screen key = ${nextScreen}`);
    }
  }

  processResponse(key, addParams) {
    console.log(`WelcomePresenter::processResponse::id, addParams::`, key, addParams);

    this._addParams = addParams;
    this.model.setState(key);
    this.processLevel();
  }

  onButtonBackClick() {
    this.start();
  }

}
