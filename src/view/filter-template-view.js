import {
  createElement
} from '../render.js';

const createFilterItemTemplate = (filter) => {
  const {
    name,
    count
  } = filter;

  return `<a href="#isWachList" class="main-navigation__item">${name} <span class="main-navigation__item-count">${count}</span></a>`;
};

const createFilterTemplate = (filterItems) => {
  const filterItemsTemplate = filterItems
    .map((filter, index) => createFilterItemTemplate(filter, index === 0))
    .join('');
  return `<nav class="main-navigation">
  <div class="main-navigation__items">
    <a href="#all" class="main-navigation__item">All movies</a>
    ${filterItemsTemplate};
  </div>
  <a href="#stats" class="main-navigation__additional main-navigation__additional--active">Stats</a>
</nav>`;
};


export class CreateFilterTemplateView {
  #element = null;
  #filter = null;

  constructor(filter) {
    this.#filter = filter;
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template() {
    return createFilterTemplate(this.#filter);
  }

  removeElement() {
    this.#element = null;
  }
}
