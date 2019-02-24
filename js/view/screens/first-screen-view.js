/*
  Модуль содержит представление первого игрового экрана
*/
import AbstractView from '../abstract-view';
import initForm from './form/index';


class FirstScreenView extends AbstractView {
  constructor(initData) {
    super();
    this.initData = initData;
  }

  onInputClick() {}

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

export default FirstScreenView;
