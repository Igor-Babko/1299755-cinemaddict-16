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

}
