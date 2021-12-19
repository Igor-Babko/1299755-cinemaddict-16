import {createElement} from '../render.js';

const createFilmsListWrapper = () => (
  '<div class="films-list__container"></div>'

);

export class FilmsListView {
  #element = null;

  get element (){
    if(!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template () {
    return createFilmsListWrapper();
  }

  removeElement() {
    this.#element = null;
  }
}
