import FilmCardView from '../view/film-card-view.js';
import FilmPopupView from '../view/film-popup-view.js';
import { renderPosition, render, replace, remove } from '../utils/render.js';

export default class FilmPresenter {
  #filmsListContainer = null;
  #changeData = null;

  #filmCardComponent = null;
  #filmPopupComponent = null;

  #film = null;

  constructor(filmsListContainer, changeData) {
    this.#filmsListContainer = filmsListContainer;
    this.#changeData = changeData;
  }

  init = (film) => {
    this.#film = film;

    const prevFilmCardComponent = this.#filmCardComponent;
    const prevFilmPopupComponent = this.#filmPopupComponent;

    this.#filmCardComponent = new FilmCardView(this.#film);
    this.#filmPopupComponent = new FilmPopupView(this.#film);

    this.#filmCardComponent.setLinkClickHandler(this.#handleLinkClick);
    this.#filmCardComponent.setWatchListClickHandler(this.#handleWatchListClick);
    this.#filmCardComponent.setWatchedClickHandler(this.#handleWatchedClick);
    this.#filmCardComponent.setFavoriteClickHandler(this.#handleFavoriteClick);
    this.#filmPopupComponent.setWatchListClickHandler(this.#handleWatchListClick);
    this.#filmPopupComponent.setWatchedClickHandler(this.#handleWatchedClick);
    this.#filmPopupComponent.setFavoriteClickHandler(this.#handleFavoriteClick);
    this.#filmPopupComponent.setCloseClickHandler(this.#handleCloseClick);

    if (prevFilmCardComponent === null && prevFilmPopupComponent === null) {
      render(this.#filmsListContainer, this.#filmCardComponent, renderPosition.BEFOREEND);
      return;
    }

    if (this.#filmsListContainer.element.contains(prevFilmCardComponent.element)) {
      replace(this.#filmCardComponent, prevFilmCardComponent);
    }

    if (document.body.contains(prevFilmPopupComponent.element)) {
      replace(this.#filmPopupComponent, prevFilmPopupComponent);
    }
  };

  destroy = () => {
    remove(this.#filmCardComponent);
    remove(this.#filmPopupComponent);
  };

  #showPopup = () => {
    document.body.classList.add('hide-overflow');
    render(document.body, this.#filmPopupComponent, renderPosition.BEFOREEND);
  };

  #closePopup = () => {
    document.body.classList.remove('hide-overflow');
    this.#filmPopupComponent.element.remove();
  };

  #onEscKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.#closePopup();
    }
  };

  #handleLinkClick = () => {
    this.#showPopup();
    document.addEventListener('keydown', this.#onEscKeyDown, { once: true });
  };

  #handleCloseClick = () => {
    this.#closePopup();
    document.removeEventListener('keydown', this.#onEscKeyDown);
  };

  #handleWatchListClick = () => {
    this.#changeData({ ...this.#film, userDetails: { ...this.#film.userDetails, isWatchlist: !this.#film.userDetails.isWatchlist } });
  };

  #handleWatchedClick = () => {
    this.#changeData({ ...this.#film, userDetails: { ...this.#film.userDetails, isWatched: !this.#film.userDetails.isWatched } });
  };

  #handleFavoriteClick = () => {
    this.#changeData({ ...this.#film, userDetails: { ...this.#film.userDetails, isFavorite: !this.#film.userDetails.isFavorite } });
  };
}
