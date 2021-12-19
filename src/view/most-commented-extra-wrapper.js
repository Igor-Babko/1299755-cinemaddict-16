import {createElement} from '../render.js';
const showMostCommentedExtraWrapper = () => (
  `<section class="films-list films-list--extra">
  <h2 class="films-list__title">Most commented</h2>
  <div class="films-list__container film-list__container_most_commented">
  </div>
</section>`
);

export class MostCommentedExtraWrapperView {
  #element = null;

  get element (){
    if(!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template () {
    return showMostCommentedExtraWrapper();
  }

  removeElement() {
    this.#element = null;
  }
}
