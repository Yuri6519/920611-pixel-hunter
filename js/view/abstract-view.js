import {createElementFromTemplate} from '../common/util';

class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Нельзя создать объект от класса AbstractView, можно только отнаследоваться`);
    }
  }

  get template() {
    throw new Error(`Метод template абстрактный и должен быть переопределен`);
  }

  render() {
    return createElementFromTemplate(this.template);
  }

  bind(_element) {}

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bind(this._element);
    }

    return this._element;
  }

}

export default AbstractView;
