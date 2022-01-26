import { MenuItem } from '../const.js';
import AbstractView from './abstract-view.js';

const createSiteMenuTemplate = () => `<nav class="main-navigation">
  <a href="${MenuItem.STATISTICS}" class="main-navigation__additional" data-menu-item="${MenuItem.STATISTICS}">Stats</a>
</nav>`;

export default class SiteMenuView extends AbstractView {
  get template() {
    return createSiteMenuTemplate();
  }

  setMenuClickHandler = (callback) => {
    this._callback.menuClick = callback;

    this.element.addEventListener('click', this.#menuClickHandler);
  };

  #menuClickHandler = (evt) => {
    evt.preventDefault();

    if (evt.target.tagName !== 'A') {
      return;
    }

    this.element.querySelectorAll('.main-navigation__additional').forEach((element) => element?.classList.remove('main-navigation__additional--active'));

    if (evt.target.classList.contains('main-navigation__additional')) {
      evt.target.classList.add('main-navigation__additional--active');
    }

    this._callback.menuClick(evt.target.dataset.menuItem);
  };
}
