import AbstractView from '../../views/abstract-view/index';

class ErrorView extends AbstractView {
  constructor(message) {
    super();
    this._message = message;
  }

  get template() {
    const {status = `unknown`, code = ``} = this._message;
    return ` 
            <section class="modal">
              <div class="modal__inner">
                <h2 class="modal__title">Произошла ошибка!</h2>
                <p class="modal__text modal__text--error">Статус: ${status}.${code}${code ? `.` : ``} Пожалуйста, перезагрузите страницу.</p>
              </div>
            </section>
          `;
  }

}

export default ErrorView;
