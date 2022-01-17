import {AbstractView} from '../view/abstract-view.js';

const menuActiveClass = 'main-navigation__item--active';

const createSortFilmsTemplate = () => (
  `<ul class="sort">
  <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
  <li><a href="#" class="sort__button">Sort by date</a></li>
  <li><a href="#" class="sort__button">Sort by rating</a></li>
</ul>`
);

export class SortFilmsView extends AbstractView  {

  get template () {
    return createSortFilmsTemplate();
  }

  setClickHandler = (callback) => {
    this._callback.click = callback;
    this.element.querySelector('.sort__button').addEventListener('click', this.#clickHandler);

  }

  #clickHandler = (evt) => {
    evt.preventDefault();
    this._callback.click();
  }

}

