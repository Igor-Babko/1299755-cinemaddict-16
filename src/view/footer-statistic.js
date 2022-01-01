import {AbstractView} from '../view/abstract-view.js';

const showFooterStatistic = (moviesCount) => `<section class="footer__statistics">
<p>${moviesCount.length} movies inside</p>
</section>`;

export class FooterStatisticView extends AbstractView {

  #count = null;

  constructor(count) {
    super();
    this.#count = count;
  }

  get template() {
    return showFooterStatistic(this.#count);
  }

  setClickHandler = (callback) => {
    this._callback.click = callback;
    this.element.querySelector('.footer__statistics').addEventListener('click', this.#clickHandler);
  }

  #clickHandler = (evt) => {
    evt.preventDefault();
    this._callback.click();
  }

}
