import * as mock from '../../data/mock-data';
import {consts as c} from '../../common/index';


const getScreen = (type, data) => {
  return {type, data};
};

export const getGameScreens = () => {
  // моковые данные
  const res = [];

  res.push(getScreen(c.FIRST_GAME, mock.firstGameDataOne));
  res.push(getScreen(c.FIRST_GAME, mock.firstGameDataTwo));
  res.push(getScreen(c.FIRST_GAME, mock.firstGameDataOne));
  //
  res.push(getScreen(c.SECOND_GAME, mock.secondGameDataOne));
  res.push(getScreen(c.SECOND_GAME, mock.secondGameDataTwo));
  res.push(getScreen(c.SECOND_GAME, mock.secondGameDataOne));
  //
  res.push(getScreen(c.THIRD_GAME, mock.thirdGameDataOne));
  res.push(getScreen(c.THIRD_GAME, mock.thirdGameDataTwo));
  res.push(getScreen(c.THIRD_GAME, mock.thirdGameDataOne));
  //
  res.push(getScreen(c.FIRST_GAME, mock.firstGameDataOne));

  return res;

};


