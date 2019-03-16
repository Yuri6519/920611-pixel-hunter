/*
  Модуль содержит представление экрана intro
*/
import AbstractView from '../abstract-view';

const text = `Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.`;

class IntroView extends AbstractView {
  constructor() {
    super();
  }

  onClick() {}

  get template() {
    return ` <section class="intro">
              <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
              <p class="intro__motto"><sup>*</sup> ${text}</p>
             </section>`;
  }

  bind(_element) {
    const asterisk = _element.querySelector(`.intro__asterisk`);
    asterisk.addEventListener(`click`, () => {
      this.onClick();
    });
  }

}

export default IntroView;
