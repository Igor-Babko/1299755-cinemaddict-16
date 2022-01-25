import { SortType } from '../const.js';
import AbstractView from './abstract-view.js';
const createSortTemplate = (sortType) => {
  const sortDefaultClassName = (SortType.DEFAULT === sortType) ? 'sort__button--active' : '';
  const sortDateClassName = (SortType.DATE === sortType) ? 'sort__button--active' : '';
  const sortRatingClassName = (SortType.RATING === sortType) ? 'sort__button--active' : '';
  return `<ul class="sort">
    <li><a href="#" class="sort__button ${sortDefaultClassName}" data-sort-type="${SortType.DEFAULT}">Sort by default</a></li>
    <li><a href="#" class="sort__button ${sortDateClassName}" data-sort-type="${SortType.DATE}">Sort by date</a></li>
    <li><a href="#" class="sort__button ${sortRatingClassName}" data-sort-type="${SortType.RATING}">Sort by rating</a></li>
  </ul>`;
};
export default class SortView extends AbstractView {
  #sortType = null;

  constructor(sortType) {
    super();
    this.#sortType = sortType;
  }

  get template() {
    return createSortTemplate(this.#sortType);
  }

  setSortTypeChangeHandler = (callback) => {
    this._callback.sortTypeChange = callback;
    this.element.addEventListener('click', this.#sortTypeChangeHandler);
  };

  #sortTypeChangeHandler = (evt) => {
    if (evt.target.tagName !== 'A') {
      return;
    }
    evt.preventDefault();
    this._callback.sortTypeChange(evt.target.dataset.sortType);
  };
}
