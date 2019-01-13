import {FIRST_GAME, SECOND_GAME, THIRD_GAME} from '../../common/constants';
import renderGameOptions from './game-options/index';

const mapTypeToClassName = {
  [FIRST_GAME]: ``,
  [SECOND_GAME]: `game__content--wide`,
  [THIRD_GAME]: `game__content--triple--wide`,
};

export default (data) => {
  if (!data) {
    throw new Error(`FORM::не переданы данные`);
  }

  if (typeof data !== `object`) {
    throw new Error(`FORM::переданы неверные данные. Вместо объекта передан тип: ${typeof data }`);
  }

  if (!data.type || mapTypeToClassName[data.type === undefined]) {
    throw new Error(`FORM::передан неверный тип: ${data.type}`);
  }

  const className = mapTypeToClassName[data.type];

  const formContent = renderGameOptions(data.type, data.images);

  const content = `<form class="game__content ${className}">${formContent}</form>`;

  return content;
};
