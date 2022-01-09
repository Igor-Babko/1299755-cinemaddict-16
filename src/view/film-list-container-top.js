import {AbstractView} from '../view/abstract-view.js';

const showTopExtraContainer = () => (
  `<div class="films-list__container film-list__container_top">
  </div>
`);

export class TopFilmListContainerView extends AbstractView {

  get template () {
    return showTopExtraContainer();
  }

}
