/*
  Модуль содержит представление экрана rules
*/
import AbstractView from '../abstract-view';
import getText from './text-view';
import FormView from './form-view';

class RulesView extends AbstractView {
  constructor(header) {
    super();
    this.header = header;
  }

  onSubmit() {}

  render() {
    const self = super.render();

    const form = new FormView();
    form.onSubmit = this.onSubmit;

    const rules = self.querySelector(`.rules`);
    self.querySelector(`div`).insertBefore(this.header, rules);

    rules.appendChild(form.element);

    return self;

  }

  get template() {
    return ` 
    <div>
    <section class="rules">
      ${getText()}
    </section>
  </div>
  `;
  }
}

export default RulesView;
