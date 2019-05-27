type fn = (frame: any, given: any) => (number|{width: number, height: number})

const adjustValues = (frameWidth, frameHeight, width, height, kt) => {
  let newWidth = width;
  let newHeight = height;

  if (newWidth > frameWidth) {
    newWidth = frameWidth;
    newHeight = frameWidth / kt;
  }

  if (newHeight > frameHeight) {
    newHeight = frameHeight;
    newWidth = frameHeight * kt;
  }

  return {newWidth, newHeight};
};

const resize: fn = (frame, given) => {

  if (!frame || !given) {
    // throw new Error(`resize: Неверные входные данные`);
    return -1;
  }

  const {width: frameWidth, height: frameHeight} = frame;
  let {width, height} = given;

  const kt = width / height;

  if (frameWidth === frameHeight) {
    if (kt === 1) {
      width = frameWidth;
      height = frameHeight;
    } else if (kt > 1) {
      width = frameWidth;
      height = frameHeight / kt;
    } else if (kt < 1) {
      width = frameWidth * kt;
      height = frameHeight;
    }
  } else if (frameWidth > frameHeight) {
    if (kt === 1) {
      width = frameHeight;
      height = frameHeight;
    } else if (kt > 1) {
      width = frameWidth;
      height = frameWidth / kt;
    } else if (kt < 1) {
      width = frameHeight * kt;
      height = frameHeight;
    }
  } else if (frameHeight > frameWidth) {
    if (kt === 1) {
      width = frameWidth;
      height = frameWidth;
    } else if (kt > 1) {
      width = frameWidth;
      height = frameWidth / kt;
    } else if (kt < 1) {
      width = frameHeight * kt;
      height = frameHeight;
    }
  }

  const {newWidth, newHeight} = adjustValues(frameWidth, frameHeight, width, height, kt);

  return {width: Math.floor(newWidth), height: Math.floor(newHeight)};

};

export default resize;
