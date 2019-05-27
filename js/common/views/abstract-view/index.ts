import {createElementFromTemplate} from '../../utils/index';

abstract class AbstractView {
  private _element: HTMLElement;
  abstract get template();

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
