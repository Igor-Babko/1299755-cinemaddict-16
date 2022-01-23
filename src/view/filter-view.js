import AbstractView from './abstract-view.js';
const createFilterCountTemplate = (count) => `<span class="main-navigation__item-count">${count}</span>`;

const createFilterItemTemplate = (filter) => {
  const { name, count, isChecked } = filter;
  const filterName = (name === 'all') ? 'All movies' : name[0].toUpperCase() + name.slice(1).toLowerCase();
  const filterCountTemplate = (name === 'all') ? '' : createFilterCountTemplate(count);
  const filterActiveClassName = (isChecked) ? 'main-navigation__item--active' : '';

  return `<a href="#${name}" class="main-navigation__item ${filterActiveClassName}">${filterName} ${filterCountTemplate}</a>`;
};

const createFilterTemplate = (filterItems) => {
  const filterItemsTemplate = filterItems
    .map((filter) => createFilterItemTemplate(filter))
    .join('\n');
  return `<nav class="main-navigation">
  <div class="main-navigation__items">
    ${filterItemsTemplate}
  </div>
  <a href="#stats" class="main-navigation__additional">Stats</a>
</nav>`;
};
export default class FilterView extends AbstractView {
  #filters = null;
  constructor(filters) {
    super();
    this.#filters = filters;
  }

  get template() {
    return createFilterTemplate(this.#filters);
  }
}
