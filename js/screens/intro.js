import ParentScreen from './parent';

const CONTENT_ = `
<section class="intro">
  <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
  <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
</section>
`;

export class IntroScreen extends ParentScreen {
  constructor(clbForward, clbFrwParam) {
    super(clbForward, null, CONTENT_, clbFrwParam);

    this.element.querySelector(`.intro__asterisk`).addEventListener(`click`, () => {
      this.callbackForward(this.clbFrwParam);
    });
  }

}

