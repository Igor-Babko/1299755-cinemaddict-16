import AbstractView from './abstract-view.js';

const createUserRankTemplate = (userRank) => `<section class="header__profile profile">
  <p class="profile__rating">${userRank}</p>
  <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
</section>`;

export default class UserRankView extends AbstractView {
  #userRank = null;

  constructor(userRank) {
    super();
    this.#userRank = userRank;
  }

  get template() {
    return createUserRankTemplate(this.#userRank);
  }
}
