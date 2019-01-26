// модуль процессор
import {initProcessResponse, initReturnProc} from '../screens/util';
import initGame, {SCREENS, initResp} from './game_initialiser';
import initHeader from '../screens/header/index';
import {setFooter as initFooter} from '../screens/footer/index';
import {GREETING, ERROR_LIFES_OVER, STAT} from '../common/constants';
import calcPoints from '../common/score-utils';


const mainElement = document.querySelector(`#main`);

let game = initGame();
let resp = initResp();

const init = () => {

  initProcessResponse(processResponse);

  const ind = game.indexOf(game.filter((itr) => itr.type === GREETING)[0]);
  initReturnProc(ind, processReturnAction);

  // экран интро
  showNextScreeenNew(0);
};

// process response
const processResponse = (index, respData) => {

  console.log(`processResponse::index`, index);
  console.log(`processResponse::respData`, respData);
  console.log(`processResponse::resp`, resp);

  // сразу увеличим индекс
  index = ++index;

  if (respData) {
    // 1. Заливка в массив ответов - первый пустой должен совпадать с номером ответа
    let indEmpty = -1;
    for (let i = 0; i < resp.length; i++) {
      indEmpty = resp[i].res === undefined ? indEmpty = i : indEmpty;
      if (indEmpty >= 0) {
        break;
      }
    }

    if (indEmpty < 0) {
      // это ошибка - не можкет не быть пустого
      throw new Error(`processResponse::не найден пустой объект для записи ответа. indEmpty=${indEmpty}`);
    }

    resp[indEmpty] = respData;

    console.log(`processResponse::indEmpty`, indEmpty);
    console.log(`processResponse::resp`, resp);

    // проверка результата
    // расчет кол-ва ошибок
    const pntState = calcPoints(resp);

    console.log(`processResponse::pntState`, pntState);

    if (pntState < 0 && pntState !== ERROR_LIFES_OVER) {
      // внутренняя ошибка расчета баллов
      throw new Error(`processResponse::ошибка calcPoints(), код ${pntState}`);
    }

    // Необходимость перехода на экран статистики:
    // 1. Число ошибок > макс (проверили на пред шаге и ответ в pntState)
    // 2. Все ответы заполнены - игра пройдена
    const isCallStat = pntState === ERROR_LIFES_OVER || indEmpty === resp.length - 1;

    console.log(`processResponse::pntState`, pntState);
    console.log(`processResponse::indEmpty`, indEmpty);
    console.log(`processResponse::resp.lengtgh`, resp.length);
    console.log(`processResponse::isCallStat`, isCallStat);

    if (isCallStat) {
      // переход на экран ститстики]
      index = game.indexOf(game.filter((itr) => itr.type === STAT)[0]);

      // мутируем resp - добавляем прошлую статистику
      const obj = {
        CURRENT_STAT: resp,
        LAST_STAT: []
      };

      resp = Object.assign({}, obj);
    }

  }

  // 3. Вызов экрана
  showNextScreeenNew(index);

};

// back
const processReturnAction = (returnIndex) => {
  game = initGame();
  resp = initResp();
  showNextScreeenNew(returnIndex);
};


// show screen
const showNextScreeenNew = (index) => {
  // чистим main
  const ln = mainElement.children.length;
  for (let i = 0; i < ln; i++) {
    mainElement.children[0].remove();
  }

  const level = game[index];
  if (!level) {
    throw new Error(`showNextScreeenNew::индекс экрана вышел за пределы массива: ${index}`);
  }

  let {type, data, header, footer, resp: respData} = level;

  const getScreen = SCREENS[type];
  if (!getScreen) {
    throw new Error(`showNextScreeenNew::не найден экран для ключа: ${type}`);
  }

  if (header) {
    // заголовок
    const {onlyButton} = header;
    header = initHeader(null, onlyButton, resp);
  }

  if (footer) {
    footer = initFooter(resp);
  }

  if (respData) {
    respData = resp;
  }

  mainElement.appendChild(getScreen(type, index, data, header, footer, respData));

};

export default init;

// *********************************************** D E P R I C A T E D *************
// (depricated) ф-ия выводит экран
// const showNextScreeen = (key) => {
//   const ln = mainElement.children.length;
//   for (let i = 0; i < ln; i++) {
//     mainElement.children[0].remove();
//   }

//   mainElement.appendChild(SCREENS[key](footerData));

// };
