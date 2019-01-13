import {createElementFromTemplate} from '../../util';

export default () => {

  const content = `<div class="game__timer">NN</div>`;

  const element = createElementFromTemplate(content);

  return element;

};
