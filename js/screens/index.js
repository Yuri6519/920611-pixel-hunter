import {IntroScreen} from './intro';
import {GreetingScreen} from './greeting';
import {RuleScreen} from './rules';
import {GameFirstScreen} from './game-1';
import {GameSecondScreen} from './game-2';
import {GameThirdScreen} from './game-3';
import {StatScreen} from './stats';

const screens = [];
const mainElement = document.querySelector(`#main`);
//
const _INTRO = `intro`;
const _GREETING = `greeting`;
const _RULES = `rules`;
const _GAME_1 = `game-1`;
const _GAME_2 = `game-2`;
const _GAME_3 = `game-3`;
const _STATS = `stats`;

// ф-ия выводит экран
const switchScreeen = (id) => {
  const element = screens.filter((itr) => {
    return itr.id === id;
  })[0].obj.screen;

  const ln = mainElement.children.length;
  for (let i = 0; i < ln; i++) {
    mainElement.children[0].remove();
  }

  mainElement.appendChild(element);

};

const returnToGreetengScreen = () => {
  initScreens(_GREETING);
};

const initScreens = (id = _INTRO) => {
  screens.splice(0);

  // intro
  screens.push({
    id: _INTRO,
    obj: new IntroScreen(switchScreeen, _GREETING)
  });

  // greeting
  screens.push({
    id: _GREETING,
    obj: new GreetingScreen(switchScreeen, _RULES)
  });

  // rules
  screens.push({
    id: _RULES,
    obj: new RuleScreen(switchScreeen, _GAME_1, returnToGreetengScreen)
  });

  // game-1
  screens.push({
    id: _GAME_1,
    obj: new GameFirstScreen(switchScreeen, _GAME_2, returnToGreetengScreen)
  });

  // game-2
  screens.push({
    id: _GAME_2,
    obj: new GameSecondScreen(switchScreeen, _GAME_3, returnToGreetengScreen)
  });

  // game-3
  screens.push({
    id: _GAME_3,
    obj: new GameThirdScreen(switchScreeen, _STATS, returnToGreetengScreen)
  });

  // stats
  screens.push({
    id: _STATS,
    obj: new StatScreen(returnToGreetengScreen)
  });

  // после инициализации выводим intro
  switchScreeen(id);

};

export default initScreens;
