import {FIRST_GAME, SECOND_GAME, THIRD_GAME} from '../../../../../common/constants/index';
import renderGameOptions from './game-options/index';

const GAME_1_IMG_COUNT = 2;
const GAME_2_IMG_COUNT = 1;
const GAME_3_IMG_COUNT = 3;

const mapTypeToClassName = {
  [GAME_1_IMG_COUNT]: {class: ``, game: FIRST_GAME},
  [GAME_2_IMG_COUNT]: {class: `game__content--wide`, game: SECOND_GAME},
  [GAME_3_IMG_COUNT]: {class: `game__content--triple`, game: THIRD_GAME},
};

// формируем форму в зависимости от переданных данных
export default ({images, type, modelType}) => {
  if (!images) {
    throw new Error(`FORM::не переданы данные`);
  }

  if (typeof images !== `object` || !(images instanceof Array)) {
    throw new Error(`FORM::переданы неверные данные. Вместо объекта (массива) передан тип: ${typeof images }`);
  }

  const className = images && mapTypeToClassName[images.length] ? mapTypeToClassName[images.length].class : undefined;
  const game = images && mapTypeToClassName[images.length] ? mapTypeToClassName[images.length].game : undefined;

  if (!game || className === undefined) {
    throw new Error(`FORM:: не передан или неверный тип данных images: ${images}`);
  }

  if (game !== type) {
    throw new Error(`FORM:: переданный тип не соответствует данным. Передан ${type}, ожидается ${game}`);
  }

  const formContent = renderGameOptions(game, images, modelType);

  const content = `<form class="game__content ${className}">${formContent}</form>`;

  return content;
};
