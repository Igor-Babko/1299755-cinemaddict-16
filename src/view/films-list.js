import {AbstractView} from '../view/abstract-view.js';

const createFilmsListWrapper = () => (
  '<div class="films-list__container"></div>'

);

export class FilmsListView extends AbstractView {
  get template () {
    return createFilmsListWrapper();
  }
}
