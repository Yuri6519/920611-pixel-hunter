import AbstractView from '../../views/abstract-view/index';

class ConfirmView extends AbstractView {

  get template() {
    return ` 
        <section class="modal">
        <form class="modal__inner">

          <h2 class="modal__title">Подтверждение</h2>
          <p class="modal__text">Вы уверены что хотите начать игру заново?</p>

          <div class="modal__button-wrapper" />

        </form>
      </section>
          `;
  }

}


export default ConfirmView;
