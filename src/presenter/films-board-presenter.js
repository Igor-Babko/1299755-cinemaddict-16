import FilmsListView from '../view/films-list-view.js';
import FilmsListTitleView from '../view/films-list-title-view.js';
import FilmsListContainerView from '../view/films-list-container-view';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import { renderPosition, render, remove } from '../utils/render.js';
import FilmPresenter from './film-presenter.js';
import { updateItem } from '../utils/common.js';

const FILM_COUNT_PER_STEP = 5;

export default class FilmsBoardPresenter {
  #filmsBoardContainer = null;

  #filmsListComponent = new FilmsListView();
  #filmsListContainerComponent = new FilmsListContainerView();
  #showMoreButtonComponent = new ShowMoreButtonView();
  #filmsListTitleComponent = null;

  #films = [];
  #listFilters = [];
  #activeFilter = null;
  #renderedFilmCount = FILM_COUNT_PER_STEP;
  #filmPresenter = new Map;

  constructor(filmsBoardContainer) {
    this.#filmsBoardContainer = filmsBoardContainer;
  }

  init = (films, listFilters) => {
    this.#films = [...films];
    this.#listFilters = [...listFilters];
    this.#activeFilter = this.#listFilters.find((filter) => filter.isChecked);

    render(this.#filmsBoardContainer, this.#filmsListComponent, renderPosition.BEFOREEND);

    this.#renderFilmsBoard();
  };

  #renderFilm = (film) => {
    const filmPresenter = new FilmPresenter(this.#filmsListContainerComponent, this.#handleFilmChange, this.#handleModeChange);
    filmPresenter.init(film);
    this.#filmPresenter.set(film.id, filmPresenter);
  };

  #handleModeChange = () => {
    this.#filmPresenter.forEach((presenter) => presenter.resetView());
  };

  #handleFilmChange = (updatedFilm) => {
    this.#films = updateItem(this.#films, updatedFilm);
    this.#filmPresenter.get(updatedFilm.id).init(updatedFilm);
  };

  #clearFilms = () => {
    this.#filmPresenter.forEach((presenter) => presenter.destroy());
    this.#filmPresenter.clear();
    this.#renderedFilmCount = FILM_COUNT_PER_STEP;
    remove(this.#showMoreButtonComponent);
  };

  #renderFilms = (from, to) => {
    this.#films
      .slice(from, to)
      .forEach((film) => this.#renderFilm(film));
  };

  #handleLoadMoreButtonClick = () => {
    this.#renderFilms(this.#renderedFilmCount, this.#renderedFilmCount + FILM_COUNT_PER_STEP);

    this.#renderedFilmCount += FILM_COUNT_PER_STEP;

    if (this.#renderedFilmCount >= this.#films.length) {
      remove(this.#showMoreButtonComponent);
    }
  };

  #renderLoadMoreButton = () => {
    render(this.#filmsListComponent, this.#showMoreButtonComponent, renderPosition.BEFOREEND);

    this.#showMoreButtonComponent.setClickHandler(this.#handleLoadMoreButtonClick);
  };

  #renderFilmsListTitle = () => {
    this.#filmsListTitleComponent = new FilmsListTitleView(this.#activeFilter);

    render(this.#filmsListComponent, this.#filmsListTitleComponent, renderPosition.AFTERBEGIN);
  };

  #renderFilmsListContainer = () => {
    render(this.#filmsListComponent, this.#filmsListContainerComponent, renderPosition.BEFOREEND);
  };

  #renderFilmsBoard = () => {
    this.#renderFilmsListTitle();

    if (this.#activeFilter.count === 0) {
      return;
    }

    this.#renderFilmsListContainer();
    this.#renderFilms(0, Math.min(this.#films.length, FILM_COUNT_PER_STEP));

    if (this.#films.length > FILM_COUNT_PER_STEP) {
      this.#renderLoadMoreButton();
    }
  };
}
