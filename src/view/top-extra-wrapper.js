import {createElement} from '../render.js';

const showTopExtraWrapper = () => (
  `<section class="films-list films-list--extra">
  <h2 class="films-list__title">Top rated</h2>
  <div class="films-list__container film-list__container_top">
  </div>
</section>
`);

export class TopExtraWrapperView {
  #element = null;

  get element (){
    if(!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template () {
    return showTopExtraWrapper();
  }

  removeElement() {
    this.#element = null;
  }
}
