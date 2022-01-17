import {
  AbstractView
} from '../view/abstract-view.js';
import {
  MenuItem
} from '../const';

const menuActiveClass = 'main-navigation__item--active';

const createFilterItemTemplate = (filter, currentFilterType) => {
  const {
    type,
    name,
    count
  } = filter;

  return (
    `<a href="#${type}" class="main-navigation__item ${type === currentFilterType ? `${menuActiveClass}` : ''}">${name}${type !== MenuItem.ALL_MOVIES ? `<span class="main-navigation__item-count">${count}</span>` : ''} </a>`
  );
};

const createFilterTemplate = (filters, currentFilterType) => filters.map((filter) => createFilterItemTemplate(filter, currentFilterType)).join('');

export class SiteMenu extends AbstractView {
  constructor(filters, currentFilterType) {
    super();
    this._filters = filters;
    this._currentFilter = currentFilterType;
    this._filterElements = this.getElement().querySelectorAll('.main-navigation__item');
    this._statsElement = this.getElement().querySelector('.main-navigation__additional');

    this._menuClickHandler = this._menuClickHandler.bind(this);
  }

  getTemplate() {
    return `<nav class="main-navigation">
      <div class="main-navigation__items">
        ${createFilterTemplate(this._filters, this._currentFilter)}
      </div>
      <a href="#${MenuItem.STATS}" class="main-navigation__additional">Stats</a>
    </nav>`;
  }

  _menuClickHandler(evt) {
    evt.preventDefault();

    if (evt.target.classList.contains('main-navigation__item')) {
      this._statsElement.classList.remove(`${menuActiveClass}`);
      const filterType = evt.target.hash.replace(/[#]/g, '');
      this._callback.menuClick(filterType);
    }

    if (evt.target === this._statsElement) {
      this._filterElements.forEach((element) => element.classList.remove(`${menuActiveClass}`));
      this._statsElement.classList.add(`${menuActiveClass}`);
      const menuItem = evt.target.hash.replace(/[#]/g, '');
      this._callback.menuClick(menuItem);
    }
  }

  setMenuClickHandler(callback) {
    this._callback.menuClick = callback;
    this.getElement().addEventListener('click', this._menuClickHandler);
  }
}

// const createFilterItemTemplate = (filter) => {
//   const {
//     name,
//     count
//   } = filter;

//   return `<a href="#isWachList" class="main-navigation__item">${name} <span class="main-navigation__item-count">${count}</span></a>`;
// };

// const createFilterTemplate = (filterItems) => {
//   const filterItemsTemplate = filterItems
//     .map((filter, index) => createFilterItemTemplate(filter, index === 0))
//     .join('');
//   return `<nav class="main-navigation">
//   <div class="main-navigation__items">
//     <a href="#all" class="main-navigation__item">All movies</a>
//     ${filterItemsTemplate}
//   </div>
//   <a href="#stats" class="main-navigation__additional main-navigation__additional--active">Stats</a>
// </nav>`;
// };


// export class CreateFilterTemplateView extends AbstractView  {
//   #filter = null;

//   constructor(filter) {
//     super();
//     this.#filter = filter;
//   }

//   get template() {
//     return createFilterTemplate(this.#filter);
//   }

//   setClickHandler = (callback) => {
//     this._callback.click = callback;
//     this.element.querySelector('.main-navigation__item').addEventListener('click', this.#clickHandler);
//   }

//   #clickHandler = (evt) => {
//     evt.preventDefault();
//     this._callback.click();
//   }

// }
