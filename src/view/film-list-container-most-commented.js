import {AbstractView} from '../view/abstract-view.js';

const showMostCommentedExtraContainer = () => (
  `<div class="films-list__container film-list__container_most_commented">
  </div>`
);

export class MostCommentedExtraContainerView extends AbstractView  {

  get template () {
    return showMostCommentedExtraContainer();
  }
}
