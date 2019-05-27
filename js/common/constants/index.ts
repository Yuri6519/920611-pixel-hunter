// screens
export const INTRO = `intro`;
export const GREETING = `greeting`;
export const RULES = `rules`;
export const FIRST_GAME = `game-1`;
export const SECOND_GAME = `game-2`;
export const THIRD_GAME = `game-3`;
export const STAT = `stats`;
export const NO_LEVEL_SCREEN = `no_level_screen`;
export const NEXT_LEVEL_SCREEN = `next_level_screen`;

// score
export const TIME_FAST = 10;
export const TIME_SLOW = 20;
export const MAX_LIFES_COUNT = 3;
export const MAX_LEVELS = 10;
export const LIFE_SCORE = 50;
export const CORRECT_ANSWER = 1;
export const CORRECT_ANSWER_POINTS = 100;
export const ERROR_LIFES_OVER = -999;

// responses
export const RESP_OK = 1;
export const RESP_FAIL = 0;
export const RESP_UNKNOWN = -1;

// answer selectors
export const RES_STATUS = `RES_STATUS`;
export const RES_RIGHT_ANSWER = `RES_RIGHT_ANSWER`;
export const RES_BONUS_SPEED = `RES_BONUS_SPEED`;
export const RES_BONUS_SPEED_NUMBER = `RES_BONUS_SPEED_NUMBER`;
export const RES__BONUS_LIFE = `RES__BONUS_LIFE`;
export const RES__BONUS_LIFE_NUMBER = `RES__BONUS_LIFE_NUMBER`;
export const RES_FINE_SLOW = `RES_FINE_SLOW`;
export const RES_FINE_SLOW_NUMBER = `RES_FINE_SLOW_NUMBER`;
export const RES_TOTAL = `RES_TOTAL`;
export const RES_LIFE_NUMBER = `RES_LIFE_NUMBER`;

// stat selectors
export const CURRENT_STAT = `CURRENT_STAT`;
export const STAT_NEXT = `STAT_`;

// header constants
export const HEADER_KEY_TIMER = `timer`;
export const HEADER_KEY_LIVES = `lives`;

// timer
export const MAX_TIME_FOR_ONE_LEVEL = 30;

// settings
export const REG_WORK = `work`;
export const REG_TEST = `test`;

// timer
export const ATTENTION_TIME = 5;

// just as an instance of inerface
export type GameState = {resp: Array<any>, time: number}
type RespParams = {res: number, time: number}
type SetState = {time: number, respParams: RespParams}

export interface IGameModel{
  userName: string;
  time: number;
  resp: [];
  currentLevel: number;
  currentLevelData: any;
  nextScreen: string;
  levelCount: number;
  state: GameState;
  
  tick()
  restart()
  setState(param: SetState) 

}