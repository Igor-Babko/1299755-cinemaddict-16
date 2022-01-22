import dayjs from 'dayjs';
import { formatRuntime } from '../utils/film.js';
import AbstractView from './abstract-view.js';

const createFilmCardTemplate = (film) => {
  const {
    commentsId,
    filmInfo: {
      title,
      totalRating,
      poster,
      releaseDate,
      runtime,
      genres,
      description,
    },
    userDetails: {
      isWatchlist,
      isWatched,
      isFavorite,
    },
  } = film;

  const year = dayjs(releaseDate).format('YYYY');
  const humanizedRuntime = formatRuntime(runtime);
  const genre = genres[0];
  const shortDescription = (description.length > 140) ? `${description.slice(0, 139)}...` : description;
  const commentCount = commentsId.length;

  const watchlistClassName = isWatchlist
    ? 'film-card__controls-item--add-to-watchlist film-card__controls-item--active'
    : 'film-card__controls-item--add-to-watchlist';

  const watchedClassName = isWatched
    ? 'film-card__controls-item--mark-as-watched film-card__controls-item--active'
    : 'film-card__controls-item--mark-as-watched';

  const favoriteClassName = isFavorite
    ? 'film-card__controls-item--favorite film-card__controls-item--active'
    : 'film-card__controls-item--favorite';

  return `<article class="film-card">
    <a class="film-card__link">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${totalRating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${year}</span>
        <span class="film-card__duration">${humanizedRuntime}</span>
        <span class="film-card__genre">${genre}</span>
      </p>
      <img src="./images/posters/${poster}" alt="" class="film-card__poster">
      <p class="film-card__description">${shortDescription}</p>
      <span class="film-card__comments">${commentCount} comments</span>
    </a>
    <div class="film-card__controls">
      <button class="film-card__controls-item ${watchlistClassName}" type="button">Add to watchlist</button>
      <button class="film-card__controls-item ${watchedClassName}" type="button">Mark as watched</button>
      <button class="film-card__controls-item ${favoriteClassName}" type="button">Mark as favorite</button>
    </div>
  </article>`;
};

export default class FilmCardView extends AbstractView {
  #film = null;

  constructor(film) {
    super();
    this.#film = film;
  }

  get template() {
    return createFilmCardTemplate(this.#film);
  }

  setLinkClickHandler = (callback) => {
    this._callback.linkClick = callback;
    this.element.querySelector('.film-card__link').addEventListener('click', this.#linkClickHandler);
  };

  setWatchListClickHandler = (callback) => {
    this._callback.watchListClick = callback;
    this.element.querySelector('.film-card__controls-item--add-to-watchlist').addEventListener('click', this.#watchListClickHandler);
  };

  setWatchedClickHandler = (callback) => {
    this._callback.watchedClick = callback;
    this.element.querySelector('.film-card__controls-item--mark-as-watched').addEventListener('click', this.#watchedClickHandler);
  };

  setFavoriteClickHandler = (callback) => {
    this._callback.favoriteClick = callback;
    this.element.querySelector('.film-card__controls-item--favorite').addEventListener('click', this.#favoriteClickHandler);
  };

  #linkClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.linkClick();
  };

  #watchListClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.watchListClick();
  };

  #watchedClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.watchedClick();
  };

  #favoriteClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.favoriteClick();
  }
}
