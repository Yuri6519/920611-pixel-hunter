// модуль главного представления игры

import AbstractView from '../abstract-view/index';

export default class HeaderView extends AbstractView {

  get template() {
    return `<header class="header"/>`;
  }

}
