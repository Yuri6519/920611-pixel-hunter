/*
  Модуль содержит представление первого игрового экрана
*/
import AbstractView from '../../../../../common/views/abstract-view/index';
import initForm from '../../utils/form/index';


class ScreenThirdView extends AbstractView {
  constructor(initData) {
    super();
    this.initData = initData;
  }

  onOptiontClick() {}

  get template() {
    const {question} = this.initData;
    return `
    <div>
      <section class="game">
        <p class="game__task">${question}</p>
        ${initForm(this.initData)}
      </section>
    </div>
    `;
  }

  bind(_element) {
    const options = Array.from(_element.querySelectorAll(`.game__option`));
    for (const option of options) {
      option.addEventListener(`click`, (evt) => {
        this.onOptiontClick(evt);
      });

    }
  }

}

export default ScreenThirdView;
