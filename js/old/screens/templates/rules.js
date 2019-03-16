// Модуль "rules"

import RulesView from '../../view/rules/rules-view';
import {processResponse} from '../../common/util';

const handleSubmit = (index) => {
  return () => {
    processResponse(index);
  };
};

export default (__, index, _, header) => {
  const rulesView = new RulesView(header);
  rulesView.onSubmit = handleSubmit(index);
  return rulesView.element;
};

