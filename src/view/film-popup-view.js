import { EMOTIONS } from '../const.js';
import { formatReleaseDate, formatRuntime } from '../utils/film.js';
import SmartView from './smart-view.js';

const createFilmPopupGenresTemplate = (genres) => genres.map((genre) => `<span class="film-details__genre">${genre}</span>`).join('\n');

const createFilmPopupCommentsTemplate = (comments) => comments.map((commentItem) => {
  const { emotion, comment, author, date } = commentItem;
  return `<li class="film-details__comment">
    <span class="film-details__comment-emoji">
      <img src="./images/emoji/${emotion}.png" width="55" height="55" alt="emoji-${emotion}">
    </span>
    <div>
      <p class="film-details__comment-text">${comment}</p>
      <p class="film-details__comment-info">
        <span class="film-details__comment-author">${author}</span>
        <span class="film-details__comment-day">${date}</span>
        <button class="film-details__comment-delete">Delete</button>
      </p>
    </div>
  </li>`;
}).join('\n');

const createFilmPopupEmotionsTemplate = (emotions, commentEmotion) => emotions.map((emotion) => {
  const isChecked = (emotion === commentEmotion) ? 'checked' : '';

  return `<input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-${emotion}" value="${emotion}" ${isChecked}>
  <label class="film-details__emoji-label" for="emoji-${emotion}">
    <img src="./images/emoji/${emotion}.png" width="30" height="30" alt="emoji">
  </label>`;
}).join('\n');


const createFilmPopupTemplate = (data) => {
  const {
    commentsId,
    comments,
    title,
    alternativeTitle,
    totalRating,
    poster,
    ageRating,
    director,
    writers,
    actors,
    releaseDate,
    releaseCountry,
    runtime,
    genres,
    description,
    isWatchlist,
    isWatched,
    isFavorite,
    commentText,
    commentEmotion,
  } = data;

  const writersList = writers.join(', ');
  const actorsList = actors.join(', ');
  const humanizedRuntime = formatRuntime(runtime);
  const humanizedReleaseDate = formatReleaseDate(releaseDate);
  const genresTemplate = createFilmPopupGenresTemplate(genres);
  const commentCount = commentsId.length;

  const watchlistClassName = isWatchlist
    ? 'film-details__control-button--watchlist film-details__control-button--active'
    : 'film-details__control-button--watchlist';
  const watchedClassName = isWatched
    ? 'film-details__control-button--watched film-details__control-button--active'
    : 'film-details__control-button--watched';
  const favoriteClassName = isFavorite
    ? 'film-details__control-button--favorite film-details__control-button--active'
    : 'film-details__control-button--favorite';

  const commentsTemplate = createFilmPopupCommentsTemplate(comments);

  const commentEmotionTemplate = (commentEmotion) ? `<img src="images/emoji/${commentEmotion}.png" width="55" height="55" alt="emoji-${commentEmotion}">` : '';

  const emotionsTemplate = createFilmPopupEmotionsTemplate(EMOTIONS, commentEmotion);

  return `<section class="film-details">
    <form class="film-details__inner" action="" method="get">
      <div class="film-details__top-container">
        <div class="film-details__close">
          <button class="film-details__close-btn" type="button">close</button>
        </div>
        <div class="film-details__info-wrap">
          <div class="film-details__poster">
            <img class="film-details__poster-img" src="./images/posters/${poster}" alt="">
            <p class="film-details__age">${ageRating}</p>
          </div>
          <div class="film-details__info">
            <div class="film-details__info-head">
              <div class="film-details__title-wrap">
                <h3 class="film-details__title">${title}</h3>
                <p class="film-details__title-original">${alternativeTitle}</p>
              </div>
              <div class="film-details__rating">
                <p class="film-details__total-rating">${totalRating}</p>
              </div>
            </div>
            <table class="film-details__table">
              <tbody><tr class="film-details__row">
                <td class="film-details__term">Director</td>
                <td class="film-details__cell">${director}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Writers</td>
                <td class="film-details__cell">${writersList}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Actors</td>
                <td class="film-details__cell">${actorsList}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Release Date</td>
                <td class="film-details__cell">${humanizedReleaseDate}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Runtime</td>
                <td class="film-details__cell">${humanizedRuntime}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Country</td>
                <td class="film-details__cell">${releaseCountry}</td>
              </tr>
              <tr class="film-details__row">
                <td class="film-details__term">Genres</td>
                <td class="film-details__cell">
                  ${genresTemplate}
                </td>
              </tr>
            </tbody></table>
            <p class="film-details__film-description">
              ${description}
            </p>
          </div>
        </div>
        <section class="film-details__controls">
          <button type="button" class="film-details__control-button ${watchlistClassName}" id="watchlist" name="watchlist">Add to watchlist</button>
          <button type="button" class="film-details__control-button ${watchedClassName}" id="watched" name="watched">Already watched</button>
          <button type="button" class="film-details__control-button ${favoriteClassName}" id="favorite" name="favorite">Add to favorites</button>
        </section>
      </div>
      <div class="film-details__bottom-container">
        <section class="film-details__comments-wrap">
          <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${commentCount}</span></h3>
          <ul class="film-details__comments-list">
            ${commentsTemplate}
          </ul>
          <div class="film-details__new-comment">
            <div class="film-details__add-emoji-label">
              ${commentEmotionTemplate}
            </div>
            <label class="film-details__comment-label">
              <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment">${commentText}</textarea>
            </label>
            <div class="film-details__emoji-list">
              ${emotionsTemplate}
            </div>
          </div>
        </section>
      </div>
    </form>
  </section>`;
};

export default class FilmPopupView extends SmartView {
  constructor(film, comments) {
    super();
    this._data = FilmPopupView.parseFilmToData({ ...film, comments });

    this.#setInnerHandlers();
  }

  get template() {
    return createFilmPopupTemplate(this._data);
  }

  reset = (film, comments) => {
    this._data = FilmPopupView.parseFilmToData({ ...film, comments });
    this.updateData(this._data);
  };

  restoreHandlers = () => {
    this.setCloseClickHandler(this._callback.closeClick);
    this.setFavoriteClickHandler(this._callback.favoriteClick);
    this.setWatchedClickHandler(this._callback.watchedClick);
    this.setWatchListClickHandler(this._callback.watchListClick);
    this.setCommentAddHandler(this._callback.commentAdd);
    this.#setInnerHandlers();
  };

  setCloseClickHandler = (callback) => {
    this._callback.closeClick = callback;
    this.element.querySelector('.film-details__close-btn').addEventListener('click', this.#closeClickHandler);
  };

  setWatchListClickHandler = (callback) => {
    this._callback.watchListClick = callback;
    this.element.querySelector('.film-details__control-button--watchlist').addEventListener('click', this.#watchListClickHandler);
  };

  setWatchedClickHandler = (callback) => {
    this._callback.watchedClick = callback;
    this.element.querySelector('.film-details__control-button--watched').addEventListener('click', this.#watchedClickHandler);
  };

  setFavoriteClickHandler = (callback) => {
    this._callback.favoriteClick = callback;
    this.element.querySelector('.film-details__control-button--favorite').addEventListener('click', this.#favoriteClickHandler);
  };

  setCommentAddHandler = (callback) => {
    this._callback.commentAdd = callback;
    this.element.querySelector('.film-details__comment-input').addEventListener('keydown', this.#commentAddHandler);
  };

  #setInnerHandlers = () => {
    this.element.querySelector('.film-details__emoji-list').addEventListener('change', this.#commentEmotionChangeHandler);
    this.element.querySelector('.film-details__comment-input').addEventListener('input', this.#commentTextInputHandler);
  };

  #closeClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.closeClick();
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
  };

  #commentEmotionChangeHandler = (evt) => {
    evt.preventDefault();
    this.updateData({ commentEmotion: evt.target.value });
  };

  #commentTextInputHandler = (evt) => {
    this.updateData({ commentText: evt.target.value }, true);
  };

  #commentAddHandler = (evt) => {
    if (!this._data.commentEmotion || !this._data.commentText) {
      return;
    }

    if (evt.code === 'Enter' && (evt.ctrlKey || evt.metaKey)) {
      const comment = {
        emotion: this._data.commentEmotion,
        comment: this._data.commentText,
      };

      this._callback.commentAdd(comment);
    }
  };

  static parseFilmToData = (film) => ({ ...film, commentText: '', commentEmotion: null });
}
