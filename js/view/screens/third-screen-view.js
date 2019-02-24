/*
  Модуль содержит представление третьего игрового экрана
*/
import AbstractView from '../abstract-view';
import initForm from './form/index';


class ThirdScreenView extends AbstractView {
  constructor(initData) {
    super();
    this.initData = initData;
  }

  onOptiontClick() {}

  render() {
    const screen = super.render();

    const game = screen.querySelector(`.game`);

    const {header, footer} = this.initData;

    // заголовок
    screen.querySelector(`div`).insertBefore(header, game);

    // footer
    game.appendChild(footer);

    return screen;

  }

  get template() {
    return `
    <div>
      <section class="game">
        <p class="game__task">Найдите рисунок среди изображений</p>
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

export default ThirdScreenView;
