import AbstractView from './abstract-view.js';

const watchedFilmCountToUserRank = (count) => {
  let userRank = null;

  if (count >= 21) {
    userRank = 'Movie Buff';
  } else if (count >= 11 && count <= 20) {
    userRank = 'Fan';

  } else if (count >= 1 && count <= 10) {
    userRank = 'Novice';
  }

  return userRank;
};

const createUserRankTemplate = (watchedFilmCount) => {
  const userRank = watchedFilmCountToUserRank(watchedFilmCount);

  return `<section class="header__profile profile">
  <p class="profile__rating">${userRank || ''}</p>
  <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
</section>`;
};

export default class UserRankView extends AbstractView {
  #watchedFilmCount = null;

  constructor(watchedFilmCount) {
    super();
    this.#watchedFilmCount = watchedFilmCount;
  }

  get template() {
    return createUserRankTemplate(this.#watchedFilmCount);
  }
}
