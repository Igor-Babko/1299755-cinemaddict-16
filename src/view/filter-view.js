import { FilterType } from '../const.js';
import AbstractView from './abstract-view.js';
const createFilterCountTemplate = (count) => `<span class="main-navigation__item-count">${count}</span>`;
const createFilterItemTemplate = (filter, currentFilterType) => {
  const { type, name, count } = filter;
  const filterCountTemplate = (type === FilterType.ALL) ? '' : createFilterCountTemplate(count);
  const filterActiveClassName = (type === currentFilterType) ? 'main-navigation__item--active' : '';

  return `<a href="#${type}" class="main-navigation__item ${filterActiveClassName}" data-filter-type="${type}" data-menu-item="${type}">${name} ${filterCountTemplate}</a>`;
};

const createFilterTemplate = (filterItems, currentFilterType) => {
  const filterItemsTemplate = filterItems
    .map((filter) => createFilterItemTemplate(filter, currentFilterType))
    .join('\n');

  return `<div class="main-navigation__items">
    ${filterItemsTemplate}
  </div>`;
};

export default class FilterView extends AbstractView {
  #filters = null;
  #currentFilterType = null;
  constructor(filters, currentFilterType) {
    super();
    this.#filters = filters;
    this.#currentFilterType = currentFilterType;
  }

  get template() {
    return createFilterTemplate(this.#filters, this.#currentFilterType);
  }

  removeActiveClass = () => {
    this.element.querySelector('.main-navigation__item--active').classList.remove('main-navigation__item--active');
  }

  setFilterTypeChangeHandler = (callback) => {
    this._callback.filterTypeChange = callback;

    this.element.addEventListener('click', this.#filterTypeChangeHandler);
  };

  #filterTypeChangeHandler = (evt) => {
    evt.preventDefault();

    if (!evt.target.classList.contains('main-navigation__item')) {
      return;
    }

    this._callback.filterTypeChange(evt.target.dataset.filterType);
  };
}
