/*
  Модуль содержит представление экрана rules
*/
import {AbstractView} from '../../../common/index';
import getText from './text-view';
import FormView from './form-view';

class RulesView extends AbstractView {

  onSubmit() {}

  render() {
    const self = super.render();
    const form = new FormView();
    form.onSubmit = this.onSubmit;
    const rules = self.querySelector(`.rules`);
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
