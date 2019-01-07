export default class ParentScreen {

  constructor(clbForward, clbBack, elString = ``, clbFrwParam = ``, clbBackParam = `greeting`) {
    this.callbackForward = clbForward;
    this.callbackBack = clbBack || clbForward;
    this.elementString = elString || `<div></div>`;
    this.element = this.createElementFromTemplate();
    this.clbFrwParam = clbFrwParam;
    this.clbBackParam = clbBackParam;
  }

  createElementFromTemplate() {
    const div = document.createElement(`div`);
    div.innerHTML = this.elementString;
    return div;
  }

  get screen() {
    return this.element;
  }

}
