import AbstractObservable from '../utils/abstract-observable.js';

export default class FilmsModel extends AbstractObservable {
  #films = [];
  set films(films) {
    this.#films = [...films];
  }

  get films() {
    return this.#films;
  }

  updateFilm = (updateType, update) => {
    const index = this.#films.findIndex((film) => film.id === update.id);
    if (index === -1) {
      throw new Error('Can\'t update unexisting task');
    }
    this.#films = [
      ...this.#films.slice(0, index), update, ...this.#films.slice(index + 1)
    ];
    this._notify(updateType, update);
  };
}
