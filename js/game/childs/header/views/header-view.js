// модуль главного представления игры

import {AbstractView} from '../../../../common/index';

export default class HeaderView extends AbstractView {

  get template() {
    return `<header class="header"/>`;
  }

}
