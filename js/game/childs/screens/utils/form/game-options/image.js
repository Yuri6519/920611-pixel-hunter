import {resize} from '../../../../../../common//index';
import gameData from '../../../../../../data/index';

export default (_, src, alt, width, height) => {
  const img = gameData.getImage(src);

  if (!img) {
    throw new Error(`Не удалось получить из хранилища картинку для url = ${src}`);
  }

  const {width: imgWidth, height: imgHeight} = resize({width, height}, {width: img.width, height: img.height});

  img.width = imgWidth;
  img.height = imgHeight;
  img.alt = alt;

  return img.outerHTML;

};
