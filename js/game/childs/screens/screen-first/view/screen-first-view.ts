/*
  Модуль содержит представление первого игрового экрана
*/
import AbstractView from '../../../../../common/views/abstract-view/index';
import initForm from '../../utils/form/index';

interface IView{
  question?: string;
  images: any; 
  type: any;
  modelType: any;
}

type InputClick = (evt?: any) => {}

class ScreenFirstView extends AbstractView {
  private initData: IView;

  constructor(initData: IView) {
    super();
    this.initData = initData;
  }

  onInputClick: InputClick;

  get template() {
    const {images, type, modelType} = this.initData
    const {question} = this.initData;
    return `
      <div>
        <section class="game">
          <p class="game__task">${question}</p>
          ${initForm({images, type, modelType} )}
        </section>
      </div>
    `;
  }

  bind(_element: HTMLElement) {
    const inputs = Array.from(_element.querySelectorAll(`input`));
    for (const inp of inputs) {
      inp.addEventListener(`click`, (evt) => {
        this.onInputClick(evt);
      });

    }
  }

}

export default ScreenFirstView;
