import AbstractView from './abstract-view.js';

const createFilmsListTemplate = () => `
  <section class="films">
    <section class="films-list"></section>
  </section>
`;

export default class FilmsListView extends AbstractView {
  get template() {
    return createFilmsListTemplate();
  }
}
