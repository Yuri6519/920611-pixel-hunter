/*
  Модуль содержит представление экрана intro
*/
import AbstractView from '../common/views/abstract-view/index';

const text = `Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.`;

class IntroView extends AbstractView {
  private _loaded: boolean;
  
  constructor(loaded: boolean = false) {
    super();
    this._loaded = loaded;
  }

  onClick() {}

  getLoading() {
    let res = ``;
    if (!this._loaded) {
      res = `<div id="loading" hidden>Загрузка данных...</div>`;
    } else {
      res = `
      <div id="loading" style="text-align: center">Данные загружены:
        <div>для начала игры нажмите на звездочку</div>
        <div>или дождитесь автоматического перехода через 2 сек...</div>
      </div>
      `;
    }

    return res;
  }

  get template() {
    return ` 
            <section class="intro">
                ${this.getLoading()}
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
