import {createElement} from '../render.js';

const createSortFilmsTemplate = () => (
  `<ul class="sort">
  <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
  <li><a href="#" class="sort__button">Sort by date</a></li>
  <li><a href="#" class="sort__button">Sort by rating</a></li>
</ul>`
);

export class SortFilmsView {
  #element = null;

  get element (){
    if(!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template () {
    return createSortFilmsTemplate();
  }

  removeElement() {
    this.#element = null;
  }
}

