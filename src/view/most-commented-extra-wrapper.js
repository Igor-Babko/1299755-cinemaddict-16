import {AbstractView} from '../view/abstract-view.js';

const showMostCommentedExtraWrapper = () => (
  `<section class="films-list films-list--extra">
  <h2 class="films-list__title">Most commented</h2>
  <div class="films-list__container film-list__container_most_commented">
  </div>
</section>`
);

export class MostCommentedExtraWrapperView extends AbstractView  {

  get template () {
    return showMostCommentedExtraWrapper();
  }

}
