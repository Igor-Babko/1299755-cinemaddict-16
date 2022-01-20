import AbstractView from './abstract-view.js';

const createFilmsTotalCountTemplate = (count) => `<p>${count} movies inside</p>`;

export default class FilmsTotalCountView extends AbstractView {
  #count = null;

  constructor(count) {
    super();
    this.#count = count;
  }

  get template() {
    return createFilmsTotalCountTemplate(this.#count);
  }
}
