import {AbstractView} from '../../common/index';

export default class TableView extends AbstractView {
  constructor(id) {
    super();
    this._id = id;
  }

  get template() {
    return `<table class="result__table">
              <tr>
                <td class="result__number">${this._id}</td>
              </tr>
            </table>
    `;
  }
}
