import {
  createElement
} from '../render.js';

const createShowMoreButton = () => (
  '<button class="films-list__show-more">Show more</button>'
);

export class ShowMoreButtonView {
  #element = null;

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template() {
    return createShowMoreButton();
  }

  removeElement() {
    this.#element = null;
  }
}
