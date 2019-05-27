import TableView from './table-view';
import {IndicatorPresenter, IndicatorModel} from '../../common/components/indicator/index';
import {MAX_LEVELS, LIFE_SCORE, CORRECT_ANSWER_POINTS} from '../../common/constants/index';
import * as col from './columns';

const FAIL = `fail`;

export default class TablePresenter {
  private model: any;
  private _view: TableView;
  private _root: any;

  constructor(model) {
    this.model = model;
    this._view = new TableView(this.id);
    this._root = this._view.element.querySelector(`.result__table`);
  }

  get element() {
    return this._root;
  }

  get stat() {
    return this.model.stat;
  }

  get points() {
    return this.model.points;
  }

  get id() {
    return this.model.id;
  }

  createIndicatorLine(resVictory, resOkScore) {
    const indicator = new IndicatorPresenter(new IndicatorModel(MAX_LEVELS));
    indicator.update(this.stat);

    const tdInd = col.indicatortColumn(resVictory);
    tdInd.appendChild(indicator.element);

    const tdPnt = resVictory ? col.resultPointsColumn(CORRECT_ANSWER_POINTS) : null;
    const tdTotal = col.resultTotalColumn(resOkScore, resVictory);
    const tdFinal = resVictory ? null : col.resultTotalFInalColumn(FAIL, resVictory);

    const tr = this._root.querySelector(`tr`);

    if (tr) {
      tr.appendChild(tdInd);

      if (tdPnt) {
        tr.appendChild(tdPnt);
      }

      tr.appendChild(tdTotal);

      if (tdFinal) {
        tr.appendChild(tdFinal);
      }
    }

  }

  getLine(quantity, mode, points, total, resVictory) {
    // вовращаем только, если количество больше нуля
    if (!quantity) {
      return null;
    }

    const tr = document.createElement(`tr`);
    tr.appendChild(document.createElement(`td`));
    tr.appendChild(col.resultExtraColumn(null, mode));
    tr.appendChild(col.resultExtraSpanColumn(quantity, mode));
    tr.appendChild(col.resultPointsColumn(points));
    tr.appendChild(col.resultTotalColumn(total, resVictory));
    return tr;
  }

  getFinalLine(text, resVictory) {
    const tr = document.createElement(`tr`);
    tr.appendChild(col.resultTotalFInalColumn(text, resVictory));
    return tr;
  }

  init() {
    const {
      RES_RIGHT_ANSWER: resOkScore,
      RES__BONUS_LIFE: resLife,
      RES__BONUS_LIFE_NUMBER: resLifeNum,
      RES_BONUS_SPEED: resSpeed,
      RES_BONUS_SPEED_NUMBER: resSpeedNum,
      RES_FINE_SLOW: resSlow,
      RES_FINE_SLOW_NUMBER: resSlowNum,
      RES_TOTAL: resTotal,
      RES_STATUS: resStatus
    } = this.points;

    // в зависимости от результата игры строим таблицу
    const resVictory = resStatus === 0;

    // 1. Индикатор
    this.createIndicatorLine(resVictory, resOkScore);

    if (resVictory) {
      // fast
      const fastScore = this.getLine(resSpeedNum, `fast`, LIFE_SCORE, resSpeed, resVictory);
      if (fastScore) {
        this._root.appendChild(fastScore);
      }
      // alive
      const lifeScore = this.getLine(resLifeNum, `alive`, LIFE_SCORE, resLife, resVictory);
      if (lifeScore) {
        this._root.appendChild(lifeScore);
      }
      // slow
      const slowScore = this.getLine(resSlowNum, `slow`, LIFE_SCORE, resSlow, resVictory);
      if (slowScore) {
        this._root.appendChild(slowScore);
      }
      // final
      const finalScore = this.getFinalLine(resTotal, resVictory);
      if (finalScore) {
        this._root.appendChild(finalScore);
      }
    }


  }


}
