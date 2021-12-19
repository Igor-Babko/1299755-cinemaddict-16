import {createElement} from '../render.js';

const createFilmsWrapper = () => (
  `<section class="films">
<section class="films-list">
  <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
  </section>
  </section>`
);

export class FilmsWrapperView {
  #element = null;

  get element (){
    if(!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template () {
    return createFilmsWrapper();
  }

  removeElement() {
    this.#element = null;
  }
}
