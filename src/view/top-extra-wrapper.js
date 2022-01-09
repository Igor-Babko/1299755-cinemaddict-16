import {AbstractView} from '../view/abstract-view.js';

const showTopExtraWrapper = () => (
  `<section class="films-list films-list--extra">
  <h2 class="films-list__title">Top rated</h2>
</section>
`);

export class TopExtraWrapperView extends AbstractView {

  get template () {
    return showTopExtraWrapper();
  }

}
