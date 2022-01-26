import FilmsListView from '../view/films-list-view.js';
import FilmsListTitleView from '../view/films-list-title-view.js';
import FilmsListContainerView from '../view/films-list-container-view';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import { RenderPosition, render, remove } from '../utils/render.js';
import FilmPresenter from './film-presenter.js';
import SortView from '../view/sort-view.js';
import { SortType, UpdateType, UserAction } from '../const.js';
import { sortFilmsByDate, sortFilmsByRating } from '../utils/film.js';
import { filter } from '../utils/filter.js';
const FILM_COUNT_PER_STEP = 5;
export default class FilmsBoardPresenter {
  #filmsBoardContainer = null;
  #filmsModel = null;
  #commentsModel = null;
  #filterModel = null;

  #filmsListComponent = null;
  #filmsListContainerComponent = null;
  #showMoreButtonComponent = null;
  #sortComponent = null;
  #filmsListTitleComponent = null;
  #renderedFilmCount = FILM_COUNT_PER_STEP;
  #filmPresenters = new Map;
  #currentSortType = SortType.DEFAULT;
  #openedPopupData = {};

  #isDestroyed = false;

  constructor(filmsBoardContainer, filmsModel, commentsModel, filterModel) {
    this.#filmsBoardContainer = filmsBoardContainer;
    this.#filmsModel = filmsModel;
    this.#commentsModel = commentsModel;
    this.#filterModel = filterModel;
  }

  get films() {
    const filterType = this.#filterModel.filter;
    const films = this.#filmsModel.films;
    const filteredFilms = filter[filterType](films);
    switch (this.#currentSortType) {
      case SortType.DATE:
        return filteredFilms.sort(sortFilmsByDate);
      case SortType.RATING:
        return filteredFilms.sort(sortFilmsByRating);
    }
    return filteredFilms;
  }

  init = () => {
    this.#filmsListComponent = new FilmsListView();
    this.#filmsListContainerComponent = new FilmsListContainerView();

    render(this.#filmsBoardContainer, this.#filmsListComponent, RenderPosition.BEFOREEND);

    this.#renderBoard();

    this.#filmsModel.addObserver(this.#handleFilmModelEvent);
    this.#commentsModel.addObserver(this.#handleCommentModelEvent);
    this.#filterModel.addObserver(this.#handleFilmModelEvent);

    this.#isDestroyed = false;
  };

  destroy = () => {
    this.#clearBoard();

    remove(this.#filmsListContainerComponent);
    remove(this.#filmsListComponent);

    this.#filmsModel.removeObserver(this.#handleFilmModelEvent);
    this.#commentsModel.removeObserver(this.#handleCommentModelEvent);
    // this.#filterModel.removeObserver(this.#handleFilmModelEvent);

    this.#isDestroyed = true;
  };

  #renderBoard = () => {
    const films = this.films;
    const filmCount = films.length;
    this.#renderSort();
    this.#renderFilmsListTitle();
    if (filmCount !== 0) {
      this.#renderFilmsListContainer();
      this.#renderFilms(films.slice(0, Math.min(filmCount, this.#renderedFilmCount)));
      if (filmCount > this.#renderedFilmCount) {
        this.#renderLoadMoreButton();
      }
    }
  };

  #renderSort = () => {
    this.#sortComponent = new SortView(this.#currentSortType);
    this.#sortComponent.setSortTypeChangeHandler(this.#handleSortTypeChange);

    render(this.#filmsListComponent, this.#sortComponent, RenderPosition.BEFOREBEGIN);
  };

  #renderFilmsListTitle = () => {
    this.#filmsListTitleComponent = new FilmsListTitleView({ type: this.#filterModel.filter, count: this.films.length });

    render(this.#filmsListComponent, this.#filmsListTitleComponent, RenderPosition.AFTERBEGIN);
  };

  #renderFilmsListContainer = () => {
    render(this.#filmsListComponent.element.querySelector('.films-list'), this.#filmsListContainerComponent, RenderPosition.BEFOREEND);
  };

  #renderFilms = (films) => {
    films.forEach((film) => this.#renderFilm(film));
  };

  #renderFilm = (film) => {
    const filmPresenter = new FilmPresenter(this.#filmsListContainerComponent, this.#handleViewAction, this.#handleModeChange);
    const comments = [...this.#commentsModel.comments].filter((comment) => film.commentsId.includes(comment.id));
    filmPresenter.init(film, comments);
    // todo
    if (this.#openedPopupData && this.#openedPopupData.id === film.id) {
      filmPresenter.restorePopup(this.#openedPopupData);
    }
    this.#filmPresenters.set(film.id, filmPresenter);
  };

  #renderLoadMoreButton = () => {
    this.#showMoreButtonComponent = new ShowMoreButtonView();
    this.#showMoreButtonComponent.setClickHandler(this.#handleLoadMoreButtonClick);

    render(this.#filmsListComponent.element.querySelector('.films-list'), this.#showMoreButtonComponent, RenderPosition.BEFOREEND);
  };

  #handleLoadMoreButtonClick = () => {
    const filmCount = this.films.length;
    const newRenderedFilmCount = Math.min(filmCount, this.#renderedFilmCount + FILM_COUNT_PER_STEP);
    const films = this.films.slice(this.#renderedFilmCount, newRenderedFilmCount);
    this.#renderFilms(films);
    this.#renderedFilmCount = newRenderedFilmCount;
    if (this.#renderedFilmCount >= filmCount) {
      remove(this.#showMoreButtonComponent);
    }
  };

  #handleModeChange = () => {
    this.#openedPopupData = {};
    this.#filmPresenters.forEach((presenter) => presenter.resetView());
  };

  #handleViewAction = (actionType, updateType, update, openedPopupData) => {
    this.#openedPopupData = openedPopupData;
    switch (actionType) {
      case UserAction.UPDATE_FILM:
        this.#filmsModel.updateFilm(updateType, update);
        break;
      case UserAction.ADD_COMMENT:
        this.#commentsModel.addComment(actionType, update);
        break;
      case UserAction.DELETE_COMMENT:
        this.#commentsModel.deleteComment(actionType, update);
        break;
    }
  };

  #handleCommentModelEvent = (actionType, updateId) => {
    const currentFilm = this.#filmsModel.films.find((film) => film.id === this.#openedPopupData.id);
    let index = null;
    let commentsId = null;
    switch (actionType) {
      case UserAction.ADD_COMMENT:
        delete this.#openedPopupData.commentText;
        delete this.#openedPopupData.commentEmotion;
        this.#filmsModel.updateFilm(UpdateType.PATCH, { ...currentFilm, commentsId: [...currentFilm.commentsId, updateId] });
        break;
      case UserAction.DELETE_COMMENT:
        index = [...currentFilm.commentsId].findIndex((commentId) => commentId === updateId);
        commentsId = [...currentFilm.commentsId.slice(0, index), ...currentFilm.commentsId.slice(index + 1)];
        this.#filmsModel.updateFilm(UpdateType.PATCH, { ...currentFilm, commentsId });
        break;
    }
  };

  #handleFilmModelEvent = (updateType, update) => {
    switch (updateType) {
      case UpdateType.PATCH:
        this.#filmPresenters.get(update.id).init(update, [...this.#commentsModel.comments].filter((comment) => update.commentsId.includes(comment.id)));
        break;
      case UpdateType.MINOR:
        this.#clearBoard();
        this.#renderBoard();
        break;
      case UpdateType.MAJOR:
        if (this.#isDestroyed) {
          this.init();
          return;
        }

        this.#clearBoard({ resetRenderedFilmCount: true, resetSortType: true });
        this.#renderBoard();
        break;
    }
  };

  #handleSortTypeChange = (sortType) => {
    this.#currentSortType = sortType;
    this.#clearBoard({ resetRenderedFilmCount: true });
    this.#renderBoard();
  };

  #clearBoard = ({ resetRenderedFilmCount = false, resetSortType = false } = {}) => {
    this.#filmPresenters.forEach((presenter) => presenter.destroy());
    this.#filmPresenters.clear();

    remove(this.#showMoreButtonComponent);
    remove(this.#sortComponent);
    remove(this.#filmsListTitleComponent);

    if (resetRenderedFilmCount) {
      this.#renderedFilmCount = FILM_COUNT_PER_STEP;
    }
    if (resetSortType) {
      this.#currentSortType = SortType.DEFAULT;
    }
  };
}
