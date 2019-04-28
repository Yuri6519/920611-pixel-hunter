/*
  Модуль содержит форму
*/
import {AbstractView} from '../../../common/index';
import InputView from './input-view';
import ButtonView from './button-view';

const INPUT_PLACE_HOLDER = `Ваше Имя`;

class FormView extends AbstractView {
  constructor() {
    super();
    this.userName = ``;
  }

  onSubmit() {}

  onInput(button) {
    return (value) =>{
      const btn = button.querySelector(`.rules__button`);
      btn.disabled = !value.trim().length;
      this.userName = value;
    };
  }

  render() {
    const form = super.render();
    const input = new InputView(INPUT_PLACE_HOLDER);
    const button = new ButtonView();
    input.onInput = this.onInput(button.element);
    const formElement = form.querySelector(`.rules__form`);
    formElement.appendChild(input.element);
    formElement.appendChild(button.element);
    return form;
  }

  get template() {
    return `<form class="rules__form" />`;
  }

  bind(_element) {
    _element.addEventListener(`submit`, (evt) => {
      evt.preventDefault();
      this.onSubmit(this.userName);
    });
  }

}

export default FormView;
