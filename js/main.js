'use strict';

(function () {

  const RIGHT_ARROW = 39;
  const LEFT_ARROW = 37;
  const RIGHT_ARROW_PCT = `->`;
  const LEFT_ARROW_PCT = `<-`;

  // главный элемент
  const elMain = document.querySelector(`#main`);

  const cloneTemplate = (tmpl) => {
    const div = document.createElement(`div`);
    const content = tmpl.content.cloneNode(true);
    div.appendChild(content);
    return div.cloneNode(true);
  };

  const arrOfTempl = Array.from(document.querySelectorAll(`template`)).map(
      (itr) => ({
        id: itr.id,
        content: cloneTemplate(itr)
      })
  );

  let curScreen = 1;
  const showPicture = (index) => {
    index = index < 0 ? arrOfTempl.length - 1 : index;
    index = index >= arrOfTempl.length ? 0 : index;
    curScreen = index;

    const ln = elMain.children.length;
    for (let i = 0; i < ln; i++) {
      elMain.children[0].remove();
    }

    elMain.appendChild(arrOfTempl[curScreen].content.cloneNode(true));

  };

  const getScreen = (keyCode) => {
    if (keyCode === RIGHT_ARROW) {
      showPicture(curScreen + 1);
    } else if (keyCode === LEFT_ARROW) {
      showPicture(curScreen - 1);
    }
  };

  document.addEventListener(`keydown`, (evt) => {
    getScreen(evt.keyCode);
  });

  const addButtons = () => {
    const div = document.createElement(`div`);
    div.classList.add(`arrows__wrap`);

    const style = document.createElement(`style`);
    style.innerHTML = `
        .arrows__wrap {
          position: absolute;
          top: 95px;
          left: 50%;
          margin-left: -56px;
        }
        .arrows__btn {
          background: none;
          border: 2px solid black;
          padding: 5px 20px;
        }`;
    div.appendChild(style);

    const addOneBtn = (text) => {
      const btn = document.createElement(`button`);
      btn.classList.add(`arrows__btn`);
      btn.textContent = text;

      btn.addEventListener(`click`, () => {
        let keyCode = text === LEFT_ARROW_PCT ? LEFT_ARROW : RIGHT_ARROW;
        getScreen(keyCode);
      });

      return btn;
    };

    div.appendChild(addOneBtn(LEFT_ARROW_PCT));
    div.appendChild(addOneBtn(RIGHT_ARROW_PCT));

    document.body.appendChild(div);

  };

  // вставим кнопки
  addButtons();

  // покажем экраны
  showPicture(curScreen);

})();
