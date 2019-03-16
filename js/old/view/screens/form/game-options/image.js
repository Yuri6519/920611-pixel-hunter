// import {resize} from '../../../common/index';

export default (placeholder, src, alt, width, height) => {

  const img = document.createElement(`img`);

  // img.addEventListener(`load`, (evt) => {
  //   imgW = evt.target.width;
  //   imgH = evt.target.height;
  // });

  img.src = src;

  // const {width: imgWidth, height: imgHeight} = resize({width, height}, {width: img.width, height: img.height});

  // return `<img src="${src ? src : placeholder}" alt="${alt}" width="${imgWidth}" height="${imgHeight}">`;

  return `<img src="${src ? src : placeholder}" alt="${alt}" width="${width}" height="${height}">`;
};
