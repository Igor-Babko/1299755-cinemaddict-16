import {
  createElement
} from '../render.js';

const showFooterStatistic = (moviesCount) => `<section class="footer__statistics">
<p>${moviesCount.length} movies inside</p>
</section>`;

export class FooterStatisticView {
  #element = null;
  #count = null;

  constructor(count) {
    this.#count = count;
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template() {
    return showFooterStatistic(this.#count);
  }

  removeElement() {
    this.#element = null;
  }
}
