import calcPoints from '../../common/score-utils';
import {CURRENT_STAT} from '../../common/constants';
import getTable from './table';

const TITLE_VICTORY = `Победа!`;
const TITLE_FAIL = `Поражение :( `;

const section = (title) => {
  const element = document.createElement(`section`);
  element.classList.add(`result`);
  const header = document.createElement(`h2`);
  header.classList.add(`result__title`);
  header.innerText = title;
  element.appendChild(header);
  return element;
};


export default (data) => {
  let statistic;
  let index = 0;

  if (typeof data !== `object`) {
    throw new Error(`STAT::data не является объектом: ${data}`);
  } else {
    for (const key in data) {
      if (typeof key === `string`) {
        const stat = data[key];

        if (Array.isArray(stat)) {

          // score
          const pntState = calcPoints(stat);

          const {RES_STATUS: resStatus} = pntState;

          // текущая статистика
          if (key === CURRENT_STAT) {
            // создаем элемент
            const title = resStatus === 0 ? TITLE_VICTORY : TITLE_FAIL;
            statistic = section(title);
          }

          if (!statistic) {
            throw new Error(`STAT::не удалось создать элемент <section>`);
          }

          // таблица
          index++;
          const table = getTable({stat, pntState, index});
          statistic.appendChild(table);

        } else {
          throw new Error(`STAT::данные не является массивом: ${stat}`);
        }
      } else {
        throw new Error(`STAT::ключ не является строкой: ${key}`);
      }
    }

  }

  return statistic;

};
