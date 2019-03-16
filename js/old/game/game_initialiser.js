import * as mock from '../data/mock-data';
import {consts as c} from '../common/index';
import {
  introScreen,
  greetingScreen,
  rulesScreen,
  gameFirstScreen,
  gameSecondScreen,
  gameThirdScreen,
  statScreen,
} from '../screens/templates/index';

export const SCREENS = {
  [c.INTRO]: introScreen,
  [c.GREETING]: greetingScreen,
  [c.RULES]: rulesScreen,
  [c.FIRST_GAME]: gameFirstScreen,
  [c.SECOND_GAME]: gameSecondScreen,
  [c.THIRD_GAME]: gameThirdScreen,
  [c.STAT]: statScreen,
};

const res = [];

const getScreen = (type, data, header, footer, resp) => {
  return {type, data, header, footer, resp};
};

export const getGameScreens = () => {
  // const arr = [c.FIRST_GAME, c.SECOND_GAME, c.THIRD_GAME];
  // for (let i = 1; i <= 10; i++) {
  //   let ind = Math.floor(Math.random() * (arr.length) - 0) + 0;
  //   ind = ind >= arr.length ? arr.length - 1 : ind;
  //   res.push(getScreen(arr[ind], null, true));
  // }

  // моковые данные
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

export const initResp = () => {
  return [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  // return mock.footerData.slice(0);
};

export const initHistory = (mode) => {
  if (!mode) {
    return [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  }

  if (mode === 1) {
    return mock.footerDataHistoryFail.slice(0);
  } else {
    return mock.footerDataHistoryOK.slice(0);

  }

};


export default () => {

  res.push(getScreen(c.INTRO));
  res.push(getScreen(c.GREETING));
  res.push(getScreen(c.RULES, null, {onlyButton: true}));


  // res.push(getScreen(c.STAT, null, {onlyButton: true}, null, true));


  getGameScreens();

  res.push(getScreen(c.STAT, null, {onlyButton: true}, null, true));

  return res;
};
