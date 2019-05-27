import {resize} from '../../../../../../common//index';
import gameData from '../../../../../../data/index';

type ResResize = number|{width: number, height: number}

export default (_, src, alt, width, height) => {
  const img = gameData.getImage(src);

  if (!img) {
    throw new Error(`Не удалось получить из хранилища картинку для url = ${src}`);
  }

  const resResize: ResResize = resize({width, height}, {width: img.width, height: img.height});

  if (typeof resResize === 'object') {
  }

  let imgWidth: number = width;
  let imgHeight: number = height;
  if (typeof resResize === `object`) {
    imgWidth = resResize.width;
    imgHeight = resResize.height;
  } else {
    throw new Error(`Не удалось посчитать результат. Код ошибки: ${resResize}`)
  }

  img.width = imgWidth;
  img.height = imgHeight;
  img.alt = alt;

  return img.outerHTML;

};
