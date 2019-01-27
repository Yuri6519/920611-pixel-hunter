import indicator from './indicator';
import * as col from './columns';

import {
  LIFE_SCORE,
  CORRECT_ANSWER_POINTS
} from '../../common/constants';

const FAIL = `fail`;

const getTable = () => {
  const tbl = document.createElement(`table`);
  tbl.classList.add(`result__table`);
  return tbl;
};

const getIndicatorLine = (indc, index, resPoints, resTotal, resVictory) => {
  const tr = document.createElement(`tr`);
  const tdRes = col.resultColumn(index);

  const tdInd = col.indicatortColumn(resVictory);
  tdInd.appendChild(indc);

  const tdPnt = resVictory ? col.resultPointsColumn(resPoints) : null;
  const tdTotal = col.resultTotalColumn(resTotal, resVictory);
  const tdFinal = resVictory ? null : col.resultTotalFInalColumn(FAIL, resVictory);

  tr.appendChild(tdRes);
  tr.appendChild(tdInd);

  if (tdPnt) {
    tr.appendChild(tdPnt);
  }

  tr.appendChild(tdTotal);

  if (tdFinal) {
    tr.appendChild(tdFinal);
  }

  return tr;

};

const getLine = (quantity, mode, points, total, resVictory) => {
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
};

const getFinalLine = (text, resVictory) => {
  const tr = document.createElement(`tr`);
  tr.appendChild(col.resultTotalFInalColumn(text, resVictory));
  return tr;
};

export default ({stat, pntState, index}) => {

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
  } = pntState;


  // индикатор
  const elmIndicator = indicator(stat);


  // в зависимости от результата игры строим таблицу
  const resVictory = resStatus === 0;
  const table = getTable();
  const indicatorLine = getIndicatorLine(elmIndicator, index, CORRECT_ANSWER_POINTS, resOkScore, resVictory);

  table.appendChild(indicatorLine);

  if (resVictory) {
    // fast
    const fastScore = getLine(resSpeedNum, `fast`, LIFE_SCORE, resSpeed, resVictory);
    if (fastScore) {
      table.appendChild(fastScore);
    }
    // alive
    const lifeScore = getLine(resLifeNum, `alive`, LIFE_SCORE, resLife, resVictory);
    if (lifeScore) {
      table.appendChild(lifeScore);
    }
    // slow
    const slowScore = getLine(resSlowNum, `slow`, LIFE_SCORE, resSlow, resVictory);
    if (slowScore) {
      table.appendChild(slowScore);
    }
    // final
    const finalScore = getFinalLine(resTotal, resVictory);
    if (finalScore) {
      table.appendChild(finalScore);
    }
  }

  return table;

};
