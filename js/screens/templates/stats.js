// Модуль "stats"

import {createElementFromTemplate} from '../../common/util';
import {statistic} from '../stat/index';

export default (_, __, ___, header, ____, respData) => {


  const content = `<div/>`;


  const element = createElementFromTemplate(content);

  // заголовок
  element.appendChild(header);

  // статистика
  const stat = statistic(respData);


  element.appendChild(stat);

  return element;

};
