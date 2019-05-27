import WelcomeView from './welcome-view';
import {GREETING, RULES} from '../common/constants/index';
import GreetingPresenter from './greetings/greeting-presenter';
import RulesPresenter from './rules/rules-presenter';
import ButtonBackView from '../common/views/button-back-view/index';
import {Appl} from '../common/utils/index';
import {AbstractPresenter} from '../common/index';


export default class WelcomePresenter extends AbstractPresenter {
  private _view: WelcomeView;

  constructor(model) {
    super(model);
    this._view = new WelcomeView();
    this._root = this._view.element;
  }

  initMapStruct() {
    super.initMapStruct();
    this._mapScreensToFunc[GREETING] = this.processGreeting.bind(this);
    this._mapScreensToFunc[RULES] = this.processRules.bind(this);
  }

  processGreeting() {
    const greeting = new GreetingPresenter(this.processResponse.bind(this));
    this.changeRootElement(greeting.element);
  }

  processRules() {
    const rulesView = document.createElement(`div`);
    const buttonBack = new ButtonBackView();
    buttonBack.onClick = this.onButtonBackClick.bind(this);
    rulesView.appendChild(buttonBack.element);

    const rules = new RulesPresenter(this.processResponse.bind(this));
    rulesView.appendChild(rules.element);

    this.changeRootElement(rulesView);
  }

  invokeNextLevel() {
    Appl.showGame(this._respParams.inputText);
  }

  onButtonBackClick() {
    this.start();
  }

}
