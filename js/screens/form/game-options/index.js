import {FIRST_GAME, SECOND_GAME, THIRD_GAME} from '../../../common/constants';
import renderImage from './image';
import renderLabel from './label';

const IMAGE_ALT = `Option`;
const LABEL_TYPE_PHOTO = `photo`;
const LABEL_TYPE_PAINT = `paint`;
const LABEL_SPAN_PHOTO = `Фото`;
const LABEL_SPAN_PAINT = `Рисунок`;
const LABEL_NAME = `question`;


const mapTypeToOptiondata = {
  [FIRST_GAME]: {
    count: 2,
    image: {
      placeholder: `http://placehold.it/468x458`,
      src: undefined,
      alt: IMAGE_ALT,
      width: 468,
      height: 458,
    },
    label: [
      {
        type: LABEL_TYPE_PHOTO,
        name: LABEL_NAME,
        span: LABEL_SPAN_PHOTO,
      },
      {
        type: LABEL_TYPE_PAINT,
        name: LABEL_NAME,
        span: LABEL_SPAN_PAINT,
      }
    ]
  },

  [SECOND_GAME]: {
    count: 1,
    image: {
      placeholder: `http://placehold.it/705x455`,
      src: undefined,
      alt: IMAGE_ALT,
      width: 705,
      height: 455,
    },
    label: [
      {
        type: LABEL_TYPE_PHOTO,
        name: LABEL_NAME,
        span: LABEL_SPAN_PHOTO,
      },
      {
        type: LABEL_TYPE_PAINT,
        name: LABEL_NAME,
        span: LABEL_SPAN_PAINT,
      }
    ]
  },

  [THIRD_GAME]: {
    count: 3,
    image: {
      placeholder: `http://placehold.it/304x455`,
      src: undefined,
      alt: IMAGE_ALT,
      width: 304,
      height: 455,
    },

  },
};

const render = (obj, data) => {
  if (!obj) {
    throw new Error(`game-options::render::не найден объект в mapTypeToOptiondata по переданному ключу`);
  }

  const {count, image, label} = obj;
  if (!count || count <= 0) {
    throw new Error(`GAME-OPTION::render::неверное значение параметр count: ${count}`);
  }

  if (!image) {
    throw new Error(`GAME-OPTION::render:: не передан параметр image`);
  }

  if (!data) {
    data = []; // {src: ``, type: `paint`}
  }

  let res = ``;
  for (let i = 0; i < count; i++) {
    // image
    let {placeholder, src, alt, width, height} = image;
    src = data[i].src ? data[i].src : undefined;
    alt = `${IMAGE_ALT} ${i + 1}`;

    const img = renderImage(placeholder, src, alt, width, height);

    let lbl = ``;
    if (label) {
      lbl = label.map((itr) => {
        let {type, name, span} = itr;
        name = `${name}${i + 1}`;
        return renderLabel(type, name, span);
      }).join(``);
    }

    res += `<div class="game__option">${img}${lbl}</div>`;
  }

  return res;
};

export default (type, data) => {

  const content = render(mapTypeToOptiondata[type], data);

  return content;
};
