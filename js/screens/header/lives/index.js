import {createElementFromTemplate} from '../../util';

export default () => {

  const content = `<div class="game__lives">
  <img src="img/heart__empty.svg" class="game__heart" alt=" Missed Life" width="31" height="27">
  <img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">
  <img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">
</div>
`;

  const element = createElementFromTemplate(content);

  return element;

};
