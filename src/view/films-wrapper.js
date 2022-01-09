import {AbstractView} from '../view/abstract-view.js';

const createFilmsWrapper = () => (
  `<section class="films">
  </section>`
);

export class FilmsWrapperView extends AbstractView   {

  get template () {
    return createFilmsWrapper();
  }

}
