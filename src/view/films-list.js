import {AbstractView} from '../view/abstract-view.js';

const createFilmsWrapper = () => (
  `<section class="films-list">
  <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
  </section>`
);

export class FilmsListView extends AbstractView   {

  get template () {
    return createFilmsWrapper();
  }

}
