import StatView from '../view/stat-view';
import ButtonBackView from '../../common/views/button-back-view/index';
import {Appl} from '../../common/utils/index';
import {HeaderView} from '../../common/index';
import SectionView from '../view/section-view';
import calcPoints from '../../common/utils/score-utils';
import {CURRENT_STAT} from '../../common/constants/index';
import {TableModel, TablePresenter} from '../table/index';

const TITLE_VICTORY = `Победа!`;
const TITLE_FAIL = `Поражение :( `;

export default class StatPresenter {
  private model: any;
  private _view: StatView
  private _root: HTMLElement;
  private _loader: HTMLElement;
  private _headerElement: HTMLElement;
  private _loadInterval: any;
  private _section: HTMLElement|null;

  constructor(model) {
    this.model = model;
    this._view = new StatView();
    this._root = this._view.element;

    const buttonBack = new ButtonBackView();
    buttonBack.onClick = this.onButtonBackClick.bind(this);

    const header = new HeaderView().element;
    const headerElement: HTMLElement|null = header.querySelector(`.header`);
    if (headerElement) {
      headerElement.appendChild(buttonBack.element);
    } else {
      throw new Error(`StatPresenter::constructor:: class header not found`);
    }

    this._loader = document.createElement(`div`);
    this._loader.hidden = true;
    this._loader.style.position = `absolute`;
    this._loader.innerText = `Загрузка статистики`;
    this._root.appendChild(this._loader);

    this._headerElement = headerElement;

  }

  get element() {
    return this._root;
  }

  get userName() {
    return this.model.userName;
  }

  onButtonBackClick() {
    Appl.showWelcome();
  }

  startLoader() {
    this._loader.hidden = false;
    this._loadInterval = setInterval(() => {
      const {innerText} = this._loader;
      const pnt = `.`;
      this._loader.innerText = `${innerText}${pnt}`;
    }, 500);
  }

  stopLoader() {
    clearInterval(this._loadInterval);
    this._loader.hidden = true;
  }

  init() {
    this.startLoader();

    // имитация долгой загрузки с сервера
    setTimeout(() => {
      this.model.init()
      .then(() => this.fillStatistics())
      .catch((error) => Appl.showError(error))
      .then(() => this.stopLoader());
    }, 1000);
  }

  fillStatistics() {
    const data = this.model.data;
    let index = 0;
    if (typeof data !== `object`) {
      throw new Error(`STAT::data не является объектом: ${data}`);
    } else {

      this._root.innerHTML = ``;
      this._root.appendChild(this._headerElement);

      for (const key in data) {
        if (typeof key === `string`) {
          const stat = data[key];

          if (Array.isArray(stat)) {
            // score
            const points = calcPoints(stat);

            const {RES_STATUS: resStatus} = points;

            // текущая статистика
            if (key === CURRENT_STAT) {
              // создаем элемент
              let title = resStatus === 0 ? TITLE_VICTORY : TITLE_FAIL;
              title = `Игрок ${this.userName}: ${title}`
              const section = new SectionView(title);
              this._section = section.element.querySelector(`.result`);
              if (this._section) {
                this._root.appendChild(this._section);
              }
            }

            if (!this._section) {
              throw new Error(`STAT::не удалось создать элемент <section>`);
            }

            // таблица
            index++;
            const table = new TablePresenter(new TableModel({stat, points, id: index}));
            table.init();
            this._section.appendChild(table.element);

          } else {
            throw new Error(`STAT::данные не являются массивом: ${stat}`);
          }
        } else {
          throw new Error(`STAT::ключ не является строкой: ${key}`);
        }
      }

    }

  }

}

