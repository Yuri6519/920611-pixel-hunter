import GameView from '../view/index';
import {FIRST_GAME, SECOND_GAME, THIRD_GAME} from '../../common/constants/index';
import {AbstractPresenter} from '../../common/index';

export default class GamePresenter extends AbstractPresenter {
  constructor(model) {
    super(model);

    this._timer = null;

    this._content = new GameView();
    this._root = this._content.element;

  }

  initMapStruct() {
    super.initMapStruct();
    this._mapScreensToFunc[FIRST_GAME] = this.processFirstGame.bind(this);
    this._mapScreensToFunc[SECOND_GAME] = this.processSecondGame.bind(this);
    this._mapScreensToFunc[THIRD_GAME] = this.processThirdGame.bind(this);
  }

  get data() {
    return this.model.currentLevelData;
  }

  get resp() {
    return this.model.resp;
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
