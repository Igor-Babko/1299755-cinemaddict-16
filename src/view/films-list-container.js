import {AbstractView} from './abstract-view.js';

const createFilmsListWrapper = () => (
  '<div class="films-list__container"></div>'

);

export class FilmsListContainertView extends AbstractView {
  get template () {
    return createFilmsListWrapper();
  }
}
