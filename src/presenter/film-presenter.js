import FilmCardView from '../view/film-card-view.js';
import FilmPopupView from '../view/film-popup-view.js';
import { renderPosition, render, replace, remove } from '../utils/render.js';
import { generateComment } from '../mock/comment.js';
import { nanoid } from 'nanoid';
import { UpdateType, UserAction } from '../const.js';
const Mode = {
  DEFAULT: 'DEFAULT',
  POPUP: 'POPUP'
};
export default class FilmPresenter {
  #filmsListContainer = null;
  #changeData = null;
  #changeMode = null;
  #filmCardComponent = null;
  #filmPopupComponent = null;

  #film = null;
  #comments = null;
  #mode = Mode.DEFAULT;

  constructor(filmsListContainer, changeData, changeMode) {
    this.#filmsListContainer = filmsListContainer;
    this.#changeData = changeData;
    this.#changeMode = changeMode;
  }

  init = (film, comments) => {
    this.#film = film;
    this.#comments = comments;

    this.#renderFilm();
    this.#setEventHandlers();
  };

  destroy = () => {
    remove(this.#filmCardComponent);
    remove(this.#filmPopupComponent);
  };

  resetView = () => {
    if (this.#mode !== Mode.DEFAULT) {
      this.#filmPopupComponent.restore(this.#film, this.#comments);
      this.#closePopup();
    }
  };

  #renderFilm = () => {
    const prevFilmCardComponent = this.#filmCardComponent;
    const prevFilmPopupComponent = this.#filmPopupComponent;
    this.#filmCardComponent = new FilmCardView(this.#film);

    if (this.#mode === Mode.POPUP) {
      replace(this.#filmCardComponent, prevFilmCardComponent);
      this.#filmPopupComponent.updateData({ ...this.#film, comments: this.#comments });
      return;
    }

    this.#filmPopupComponent = new FilmPopupView(this.#film, this.#comments);

    if (prevFilmCardComponent === null && prevFilmPopupComponent === null) {
      render(this.#filmsListContainer, this.#filmCardComponent, renderPosition.BEFOREEND);
      return;
    }
    if (this.#mode === Mode.DEFAULT) {
      replace(this.#filmCardComponent, prevFilmCardComponent);
    }
  };

  #setEventHandlers = () => {
    this.#filmCardComponent.setLinkClickHandler(this.#handleLinkClick);
    this.#filmCardComponent.setWatchListClickHandler(this.#handleWatchListClick);
    this.#filmCardComponent.setWatchedClickHandler(this.#handleWatchedClick);
    this.#filmCardComponent.setFavoriteClickHandler(this.#handleFavoriteClick);
    this.#filmPopupComponent.setWatchListClickHandler(this.#handleWatchListClick);
    this.#filmPopupComponent.setWatchedClickHandler(this.#handleWatchedClick);
    this.#filmPopupComponent.setFavoriteClickHandler(this.#handleFavoriteClick);
    this.#filmPopupComponent.setCloseClickHandler(this.#handleCloseClick);
    this.#filmPopupComponent.setCommentAddHandler(this.#handleCommentAdd);
    this.#filmPopupComponent.setCommentDeleteHandler(this.#handleCommentDelete);
  };

  // todo
  restorePopup = (state) => {
    this.#filmPopupComponent.restore({...state, ...this.#film}, this.#comments);
    this.#showPopup();
    this.#filmPopupComponent.restoreScrollPosition();
  };

  #showPopup = () => {
    this.#changeMode();
    document.body.classList.add('hide-overflow');
    document.addEventListener('keydown', this.#onEscKeyDown);
    render(document.body, this.#filmPopupComponent, renderPosition.BEFOREEND);
    this.#mode = Mode.POPUP;
  };

  #closePopup = () => {
    document.body.classList.remove('hide-overflow');
    document.removeEventListener('keydown', this.#onEscKeyDown);
    this.#filmPopupComponent.element.remove();
    this.#mode = Mode.DEFAULT;
  };

  #onEscKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.#filmPopupComponent.restore(this.#film, this.#comments);
      this.#closePopup();
    }
  };

  #handleLinkClick = () => {
    if (this.#mode === Mode.POPUP) {
      return;
    }
    this.#showPopup();
  };

  #handleCloseClick = () => {
    this.#closePopup();
  };

  #handleWatchListClick = () => {
    this.#changeData(UserAction.UPDATE_FILM, UpdateType.MINOR, { ...this.#film, isWatchlist: !this.#film.isWatchlist }, (this.#mode === Mode.POPUP) && this.#filmPopupComponent.state);
  };

  #handleWatchedClick = () => {
    this.#changeData(UserAction.UPDATE_FILM, UpdateType.MINOR, { ...this.#film, isWatched: !this.#film.isWatched }, (this.#mode === Mode.POPUP) && this.#filmPopupComponent.state);
  };

  #handleFavoriteClick = () => {
    this.#changeData(UserAction.UPDATE_FILM, UpdateType.MINOR, { ...this.#film, isFavorite: !this.#film.isFavorite }, (this.#mode === Mode.POPUP) && this.#filmPopupComponent.state);
  };

  #handleCommentAdd = (comment) => {
    const newComment = { ...generateComment(nanoid()), ...comment };
    this.#changeData(UserAction.ADD_COMMENT, UpdateType.MINOR, newComment, (this.#mode === Mode.POPUP) && this.#filmPopupComponent.state);
  };

  #handleCommentDelete = (commentId) => {
    this.#changeData(UserAction.DELETE_COMMENT, UpdateType.MINOR, commentId, (this.#mode === Mode.POPUP) && this.#filmPopupComponent.state);
  }
}
