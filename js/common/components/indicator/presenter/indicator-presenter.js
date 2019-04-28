import IndicatorView from '../view/indicator-view';
import {
  TIME_FAST,
  TIME_SLOW,
  CORRECT_ANSWER} from '../../../constants/index';

const CLASS_UNKNOWN = `unknown`;
const CLASS_WRONG = `wrong`;
const CLASS_SLOW = `slow`;
const CLASS_FAST = `fast`;
const CLASS_CORRECT = `correct`;

export default class IndicatorPresenter {
  constructor(model) {
    this._model = model;

    this._view = new IndicatorView(this.classes);
    this._root = this._view.element;

  }

  get element() {
    return this._root;
  }

  get classes() {
    return this._model.classes;
  }

  update(data) {
    if (data && data instanceof Array) {
      const classes = data.map((itr) => {
        let result = CLASS_UNKNOWN;
        const time = itr.time;
        const res = itr.res;

        if (time !== undefined && res !== undefined) {
          result = res === CORRECT_ANSWER ? CLASS_CORRECT : CLASS_WRONG;
          if (result === CLASS_CORRECT) {
            result = time < TIME_FAST ? CLASS_FAST : result;
            result = result === CLASS_CORRECT && time > TIME_SLOW ? CLASS_SLOW : result;
          }
        }
        return result;
      });

      this._model.setState(classes);

      this.renderIndicator();

    }
  }

  renderIndicator() {
    this._root.innerHTML = ``;
    this._root.appendChild(new IndicatorView(this.classes).element);
  }


}
