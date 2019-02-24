// Модуль "stats"
import {StatView} from '../../view/stat/index';

export default (_, __, ___, header, ____, respData) => {
  const statView = new StatView({header, respData});
  const element = statView.element;
  return element;

};
