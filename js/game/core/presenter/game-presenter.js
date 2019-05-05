import GameView from '../view/index';
import {AbstractPresenter} from '../../../common/index';
import {HeaderPresenter, HeaderModel} from '../../childs/header/index';
import {FooterPresenter} from '../../childs/footer/index';
import points from '../../../common/utils/score-utils';
import {ScreenFirstModel, ScreenFirstPresenter} from '../../childs/screens/index';
import {ScreenSecondModel, ScreenSecondPresenter} from '../../childs/screens/index';
import {ScreenThirdModel, ScreenThirdPresenter} from '../../childs/screens/index';
import {Appl} from '../../../common/utils/index';
import {
  FIRST_GAME,
  SECOND_GAME,
  THIRD_GAME,
  MAX_LEVELS,
  ERROR_LIFES_OVER,
  NEXT_LEVEL_SCREEN,
  MAX_TIME_FOR_ONE_LEVEL,
  RESP_FAIL} from '../../../common/constants/index';

const ONE_SECOND = 1000;

export default class GamePresenter extends AbstractPresenter {
  constructor(model) {
    super(model);

    this._timer = null;

    this._view = new GameView();
    this._root = this._view.element;

    this._header = new HeaderPresenter(new HeaderModel(), this.onButtonBackClick.bind(this));
    this._headerElement = this._header.element;
    this._root.appendChild(this._headerElement);

    const gameSection = document.createElement(`section`);
    gameSection.classList.add(`game`);

    this._gameElement = document.createElement(`div`);
    gameSection.appendChild(this._gameElement);

    this._footer = new FooterPresenter(MAX_LEVELS);
    this._footerElement = this._footer.element;
    gameSection.appendChild(this._footerElement);

    this._root.appendChild(gameSection);

  }

  onButtonBackClick() {
    this.stopTimer();
    Appl.showWelcome();
  }

  get data() {
    return this.model.currentLevelData;
  }

  get resp() {
    // дополнить до MAX_LEVELS
    const {resp} = this.model;
    const result = resp.slice(0);
    const count = MAX_LEVELS - result.length;
    for (let i = 0; i < count; i++) {
      result.push({});
    }
    return result;
  }

  _tick() {

    console.log(`HEREREE::`);

    this.model.tick();
    this._header.update({time: (MAX_TIME_FOR_ONE_LEVEL - this.model.time)});

    if (this.model.time > MAX_TIME_FOR_ONE_LEVEL) {
      this.processResponse(RESP_FAIL);
    } else {
      this._timer = setTimeout(() => this._tick(), ONE_SECOND);
    }
  }

  stopTimer() {
    clearInterval(this._timer);
  }

  initMapStruct() {
    super.initMapStruct();
    this._mapScreensToFunc[FIRST_GAME] = this.processFirstGame.bind(this);
    this._mapScreensToFunc[SECOND_GAME] = this.processSecondGame.bind(this);
    this._mapScreensToFunc[THIRD_GAME] = this.processThirdGame.bind(this);
  }

  showLevel(Model, Presenter) {
    const presenter = new Presenter(new Model(this.data));
    presenter.processResponse = this.processResponse.bind(this);
    const level = presenter.element;
    this._gameElement.innerHTML = ``;
    this._gameElement.appendChild(level);
  }

  getLives(resp) {
    const {RES_STATUS: resState, RES_LIFE_NUMBER: result} = points(resp);
    return resState < 0 ? resState : result;
  }

  processResponse(res) {
    // 1. Остановить таймер
    this.stopTimer();

    // 2. Получить время из модели
    const time = this.model.time;

    // 3. Сформировать новый state для модели
    this.model.setState(
        {
          time: -1,
          respParams: {res, time},
        }
    );

    // 4. Получить массив ответов = this.resp

    // 5. Посчитать жизни
    const lives = this.getLives(this.resp);

    // ПРИНЯТЬ РЕШЕНИЕ НА ВЫХОД В СТАТИСТИКУ, ЕСЛИ ЖИЗНЕЙ НЕ ОСТАЛОСЬ
    let next = null;
    if (lives === ERROR_LIFES_OVER) {

      // переход на статистику
      next = NEXT_LEVEL_SCREEN;

    } else if (lives < 0) {
      throw new Error(`GamePresenter::processResponse::pointScore ERROR::code = ${lives}`);
    }

    // 5. Изменить заголовок
    this._header.update({time: MAX_TIME_FOR_ONE_LEVEL, lives});

    // 6. Изменить футер
    this._footer.update(this.resp);


    // 7. Перейти на новый уровень
    this.processLevel(next);

  }

  processFirstGame() {
    this.showLevel(ScreenFirstModel, ScreenFirstPresenter);
    this._tick();

    // remove!!!
    this.invokeNextLevel();

  }

  processSecondGame() {
    this.showLevel(ScreenSecondModel, ScreenSecondPresenter);
    this._tick();

    // remove!!!
    this.invokeNextLevel();

  }

  processThirdGame() {
    this.showLevel(ScreenThirdModel, ScreenThirdPresenter);
    this._tick();

    // remove!!!
    this.invokeNextLevel();

  }

  invokeNextLevel() {
    // Appl.showStatistics(this.resp, this.model.userName);

    // mock - data
    this.stopTimer();
    const footerDataHistoryOK = [
      {res: 1, time: 1},
      {res: 1, time: 2},
      {res: 1, time: 9},
      {res: 1, time: 8},
      {res: 1, time: 15},
      {res: 1, time: 15},
      {res: 0, time: 15},
      {res: 1, time: 25},
      {res: 1, time: 30},
      {res: 0, time: 25},
    ];

    Appl.showStatistics(footerDataHistoryOK, `testUser`);


  }


}
