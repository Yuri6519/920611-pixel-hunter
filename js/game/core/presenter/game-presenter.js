import GameView from '../view/index';
import {FIRST_GAME, SECOND_GAME, THIRD_GAME, MAX_LEVELS} from '../../../common/constants/index';
import {AbstractPresenter} from '../../../common/index';
import {HeaderPresenter, HeaderModel} from '../../childs/header/index';
import {FooterPresenter} from '../../childs/footer/index';

export default class GamePresenter extends AbstractPresenter {
  constructor(model) {
    super(model);

    this._timer = null;

    this._view = new GameView();
    this._root = this._view.element;

    this._headerElement = new HeaderPresenter(new HeaderModel()).element;
    this._root.appendChild(this._headerElement);

    const gameSection = document.createElement(`section`);
    gameSection.classList.add(`game`);

    this._gameElement = document.createElement(`div`);
    gameSection.appendChild(this._gameElement);

    this._footerElement = new FooterPresenter(MAX_LEVELS).element;
    gameSection.appendChild(this._footerElement);

    this._root.appendChild(gameSection);

  }

  get data() {
    return this.model.currentLevelData;
  }

  get resp() {
    return this.model.resp;
  }

  initMapStruct() {
    super.initMapStruct();
    this._mapScreensToFunc[FIRST_GAME] = this.processFirstGame.bind(this);
    this._mapScreensToFunc[SECOND_GAME] = this.processSecondGame.bind(this);
    this._mapScreensToFunc[THIRD_GAME] = this.processThirdGame.bind(this);
  }

  showLevel(level) {
    this._gameElement.innerHTML = ``;
    this._gameElement.appendChild(level);
  }

  processFirstGame() {
    console.log(`GamePresenter::processFirstGame::data::`, this.data);
    console.log(`GamePresenter::processFirstGame::resp::`, this.resp);


  }

  processSecondGame() {
    console.log(`GamePresenter::processSecondGame::data::`, this.data);
    console.log(`GamePresenter::processSecondGame::resp::`, this.resp);
  }

  processThirdGame() {
    console.log(`GamePresenter::processThirdGame::data::`, this.data);
    console.log(`GamePresenter::processThirdGame::resp::`, this.resp);
  }

  invokeNextLevel() {
    console.log(`GamePresenter::invokeNextLevel::this::`, this);
  }


}
