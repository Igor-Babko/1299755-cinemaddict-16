import {createElement} from '../render.js';


const phrasesEmptyFilters = {
  all: 'There are no movies in our database',
  watchlist: 'There are no movies to watch now',
  history: 'There are no watched movies now',
  favorites:'There are no favorite movies now'
};

const createNoFilmsTemplate = () => (
  `<section class="films">
<section class="films-list">
  <h2 class="films-list__title">There are no movies in our database</h2>
  </section>
  </section>`
);

export class NoFilmsView {
  #element = null;

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {
    return createNoFilmsTemplate();
  }

  removeElement() {
    this.#element = null;
  }
}
