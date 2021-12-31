import {AbstractView} from '../view/abstract-view.js';

const createShowMoreButton = () => (
  '<button class="films-list__show-more">Show more</button>'
);

export class ShowMoreButtonView extends AbstractView  {

  get template() {
    return createShowMoreButton();
  }

}
