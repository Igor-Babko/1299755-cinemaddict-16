import { FilterType } from '../const.js';
import AbstractView from './abstract-view.js';
const filterNameToEmptyDescriptionMap = {
  [FilterType.ALL]: 'There are no movies in our database',
  [FilterType.WATCHLIST]: 'There are no movies to watch now',
  [FilterType.HISTORY]: 'There are no watched movies now',
  [FilterType.FAVORITES]: 'There are no favorite movies now',
  LOADING : 'Loading...'
};

const createFilmsListTitleTemplate = (activeFilter) => {
  const { type, count } = activeFilter;
  const titleText = (count !== 0) ? 'All movies. Upcoming' : filterNameToEmptyDescriptionMap[type];
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
