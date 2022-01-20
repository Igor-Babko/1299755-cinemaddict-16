import AbstractView from './abstract-view.js';

const filterNameToEmptyDescriptionMap = {
  all: 'There are no movies in our database',
  watchList: 'There are no movies to watch now',
  history: 'There are no watched movies now',
  favorites: 'There are no favorite movies now',
};

const createFilmsListTitleTemplate = (activeFilter) => {
  const { name, count } = activeFilter;
  const titleText = (count !== 0) ? 'All movies. Upcoming' : filterNameToEmptyDescriptionMap[name];
  const hiddenClassName = (count !== 0) ? 'visually-hidden' : '';

  return `<h2 class="films-list__title ${hiddenClassName}">${titleText}</h2>`;
};

export default class FilmsListTitleView extends AbstractView {
  #activeFilter = null;

  constructor(activeFilter) {
    super();
    this.#activeFilter = activeFilter;
  }

  get template() {
    return createFilmsListTitleTemplate(this.#activeFilter);
  }
}
