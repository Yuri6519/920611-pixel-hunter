import * as mock from '../../data/mock-data';
import {consts as c} from '../../common/index';


const getScreen = (type, data, header, footer, resp) => {
  return {type, data, header, footer, resp};
};

export const getGameScreens = () => {
  // моковые данные
  const res = [];

  res.push(getScreen(c.FIRST_GAME, mock.firstGameDataOne, {}, true));
  res.push(getScreen(c.FIRST_GAME, mock.firstGameDataTwo, {}, true));
  res.push(getScreen(c.FIRST_GAME, mock.firstGameDataOne, {}, true));
  //
  res.push(getScreen(c.SECOND_GAME, mock.secondGameDataOne, {}, true));
  res.push(getScreen(c.SECOND_GAME, mock.secondGameDataTwo, {}, true));
  res.push(getScreen(c.SECOND_GAME, mock.secondGameDataOne, {}, true));
  //
  res.push(getScreen(c.THIRD_GAME, mock.thirdGameDataOne, {}, true));
  res.push(getScreen(c.THIRD_GAME, mock.thirdGameDataTwo, {}, true));
  res.push(getScreen(c.THIRD_GAME, mock.thirdGameDataOne, {}, true));
  //
  res.push(getScreen(c.FIRST_GAME, mock.firstGameDataOne, {}, true));

};


