/*
  Модуль содержит представление первого игрового экрана
*/
import AbstractView from '../../../../../common/views/abstract-view/index';
import initForm from '../../utils/form/index';


class ScreenFirstView extends AbstractView {
  constructor(initData) {
    super();
    this.initData = initData;
  }

  onInputClick() {}

  get template() {
    return `
      <div>
        <section class="game">
          <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
          ${initForm(this.initData)}
        </section>
      </div>
    `;
  }

  bind(_element) {
    const inputs = Array.from(_element.querySelectorAll(`input`));
    for (const inp of inputs) {
      inp.addEventListener(`click`, (evt) => {
        this.onInputClick(evt);
      });

    }
  }

}

export default ScreenFirstView;
