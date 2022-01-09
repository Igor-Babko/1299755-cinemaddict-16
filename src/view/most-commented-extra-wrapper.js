import {AbstractView} from '../view/abstract-view.js';

const showMostCommentedExtraWrapper = () => (
  `<section class="films-list films-list--extra">
  <h2 class="films-list__title">Most commented</h2>
  </div>
</section>`
);

export class MostCommentedExtraWrapperView extends AbstractView  {

  get template () {
    return showMostCommentedExtraWrapper();
  }

}
