import FilmsListView from '../view/films-list-view.js';
import FilmsListTitleView from '../view/films-list-title-view.js';
import FilmsListContainerView from '../view/films-list-container-view';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import { renderPosition, render, remove } from '../utils/render.js';
import FilmPresenter from './film-presenter.js';
import { updateItem } from '../utils/common.js';
import SortView from '../view/sort-view.js';
import { SortType } from '../const.js';
import { sortFilmsByDate, sortFilmsByRating } from '../utils/film.js';
const FILM_COUNT_PER_STEP = 5;
export default class FilmsBoardPresenter {
  #filmsBoardContainer = null;
  #filmsListComponent = new FilmsListView();
  #filmsListContainerComponent = new FilmsListContainerView();
  #showMoreButtonComponent = new ShowMoreButtonView();
  #sortComponent = new SortView();
  #filmsListTitleComponent = null;

  #films = [];
  #activeFilter = {};
  #renderedFilmCount = FILM_COUNT_PER_STEP;
  #filmPresenter = new Map;
  #currentSortType = SortType.DEFAULT;
  #sourcedFilms = [];
  constructor(filmsBoardContainer) {
    this.#filmsBoardContainer = filmsBoardContainer;
  }

  init = (films, activeFilter) => {
    this.#films = [...films];
    this.#sourcedFilms = [...films];
    this.#activeFilter = activeFilter;

    render(this.#filmsBoardContainer, this.#filmsListComponent, renderPosition.BEFOREEND);

    this.#renderFilmsBoard();
  };

  #renderFilmsBoard = () => {
    this.#sortComponent.init(this.#currentSortType);
    this.#renderSort();
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

  #renderSort = () => {
    render(this.#filmsBoardContainer, this.#sortComponent, renderPosition.BEFOREBEGIN);
    this.#sortComponent.setSortTypeChangeHandler(this.#handleSortTypeChange);
  };

  #renderFilmsListTitle = () => {
    this.#filmsListTitleComponent = new FilmsListTitleView(this.#activeFilter);

    render(this.#filmsListComponent, this.#filmsListTitleComponent, renderPosition.AFTERBEGIN);
  };

  #renderFilmsListContainer = () => {
    render(this.#filmsListComponent, this.#filmsListContainerComponent, renderPosition.BEFOREEND);
  };

  #renderFilms = (from, to) => {
    this.#films
      .slice(from, to)
      .forEach((film) => this.#renderFilm(film));
  };

  #renderFilm = (film) => {
    const filmPresenter = new FilmPresenter(this.#filmsListContainerComponent, this.#handleFilmChange, this.#handleModeChange);
    filmPresenter.init(film);
    this.#filmPresenter.set(film.id, filmPresenter);
  };

  #renderLoadMoreButton = () => {
    render(this.#filmsListComponent, this.#showMoreButtonComponent, renderPosition.BEFOREEND);
    this.#showMoreButtonComponent.setClickHandler(this.#handleLoadMoreButtonClick);
  };

  #handleLoadMoreButtonClick = () => {
    this.#renderFilms(this.#renderedFilmCount, this.#renderedFilmCount + FILM_COUNT_PER_STEP);

    this.#renderedFilmCount += FILM_COUNT_PER_STEP;

    if (this.#renderedFilmCount >= this.#films.length) {
      remove(this.#showMoreButtonComponent);
    }
  };

  #handleModeChange = () => {
    this.#filmPresenter.forEach((presenter) => presenter.resetView());
  };

  #handleFilmChange = (updatedFilm) => {
    this.#films = updateItem(this.#films, updatedFilm);
    this.#sourcedFilms = updateItem(this.#sourcedFilms, updatedFilm);
    this.#filmPresenter.get(updatedFilm.id).init(updatedFilm);
  };

  #handleSortTypeChange = (sortType) => {
    this.#sortFilms(sortType);
    this.#clearFilmsBoard();
    this.#renderFilmsBoard();
  };

  #sortFilms = (sortType) => {
    switch (sortType) {
      case SortType.DATE:
        this.#films.sort(sortFilmsByDate);
        break;
      case SortType.RATING:
        this.#films.sort(sortFilmsByRating);
        break;
      default:
        this.#films = [...this.#sourcedFilms];
    }
    this.#currentSortType = sortType;
  };

  #clearFilmsBoard = () => {
    this.#filmPresenter.forEach((presenter) => presenter.destroy());
    this.#filmPresenter.clear();
    this.#renderedFilmCount = FILM_COUNT_PER_STEP;
    remove(this.#showMoreButtonComponent);
    remove(this.#sortComponent);
  };
}
