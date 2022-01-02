import {AbstractView} from '../view/abstract-view.js';

const createShowMoreButton = () => (
  '<button class="films-list__show-more">Show more</button>'
);

export class ShowMoreButtonView extends AbstractView  {

  get template() {
    return createShowMoreButton();
  }

  setClickHandler = (callback) => {
    this._callback.click = callback;
    this.element.querySelector('.films-list__show-more').addEventListener('click', this.#clickHandler);
  }

  #clickHandler = (evt) => {
    evt.preventDefault();
    this._callback.click();
  }
}
