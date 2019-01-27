export default (frame, given) => {

  if (!frame || !given) {
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

  return {width, height};

};
