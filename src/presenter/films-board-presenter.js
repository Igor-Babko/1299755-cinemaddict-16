import FilmsListView from '../view/films-list-view.js';
import FilmsListTitleView from '../view/films-list-title-view.js';
import FilmsListContainerView from '../view/films-list-container-view';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import { renderPosition, render, remove } from '../utils/render.js';
import FilmPresenter from './film-presenter.js';
import SortView from '../view/sort-view.js';
import { SortType, UpdateType, UserAction } from '../const.js';
import { sortFilmsByDate, sortFilmsByRating } from '../utils/film.js';
const FILM_COUNT_PER_STEP = 5;
export default class FilmsBoardPresenter {
  #filmsBoardContainer = null;
  #filmsModel = null;
  #commentsModel = null;
  #filmsListComponent = new FilmsListView();
  #filmsListContainerComponent = new FilmsListContainerView();
  #showMoreButtonComponent = null;
  #sortComponent = null;
  #filmsListTitleComponent = null;
  #activeFilter = {};
  #renderedFilmCount = FILM_COUNT_PER_STEP;
  #filmPresenters = new Map;
  #currentSortType = SortType.DEFAULT;
  #openedPopupData = {};
  constructor(filmsBoardContainer, filmsModel, commentsModel) {
    this.#filmsBoardContainer = filmsBoardContainer;
    this.#filmsModel = filmsModel;
    this.#commentsModel = commentsModel;

    this.#filmsModel.addObserver(this.#handleFilmModelEvent);
    this.#commentsModel.addObserver(this.#handleCommentModelEvent);
  }

  get films() {
    switch (this.#currentSortType) {
      case SortType.DATE:
        return [...this.#filmsModel.films].sort(sortFilmsByDate);
      case SortType.RATING:
        return [...this.#filmsModel.films].sort(sortFilmsByRating);
    }
    return this.#filmsModel.films;
  }

  init = (activeFilter) => {
    this.#activeFilter = activeFilter;
    render(this.#filmsBoardContainer, this.#filmsListComponent, renderPosition.BEFOREEND);
    this.#renderBoard();
  };

  #renderBoard = () => {
    const films = this.films;
    const filmCount = films.length;
    this.#renderSort();
    this.#renderFilmsListTitle();
    if (this.#activeFilter.count !== 0) {
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
    render(this.#filmsBoardContainer, this.#sortComponent, renderPosition.BEFOREBEGIN);
  };

  #renderFilmsListTitle = () => {
    this.#filmsListTitleComponent = new FilmsListTitleView(this.#activeFilter);
    render(this.#filmsListComponent, this.#filmsListTitleComponent, renderPosition.AFTERBEGIN);
  };

  #renderFilmsListContainer = () => {
    render(this.#filmsListComponent, this.#filmsListContainerComponent, renderPosition.BEFOREEND);
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
    render(this.#filmsListComponent, this.#showMoreButtonComponent, renderPosition.BEFOREEND);
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
    this.#filmPresenters.forEach((presenter) => presenter.resetView());
  };

  #handleViewAction = (actionType, updateType, update, openedPopupData) => {
    this.#openedPopupData = openedPopupData;
    switch (actionType) {
      case UserAction.UPDATE_FILM:
        this.#filmsModel.updateFilm(updateType, update);
        break;
      case UserAction.ADD_COMMENT:
        this.#commentsModel.addComment(actionType,  update);
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
        this.#filmsModel.updateFilm(UpdateType.MINOR, { ...currentFilm, commentsId: [...currentFilm.commentsId, updateId] });
        break;
      case UserAction.DELETE_COMMENT:
        index = [...currentFilm.commentsId].findIndex((commentId) => commentId === updateId);
        commentsId = [...currentFilm.commentsId.slice(0, index), ...currentFilm.commentsId.slice(index + 1)];
        this.#filmsModel.updateFilm(UpdateType.MINOR, { ...currentFilm, commentsId });
        break;
    }

  };

  #handleFilmModelEvent = (updateType) => {
    switch (updateType) {
      case UpdateType.MINOR:
        this.#clearBoard();
        this.#renderBoard();
        break;
      case UpdateType.MAJOR:
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
    if (resetRenderedFilmCount) {
      this.#renderedFilmCount = FILM_COUNT_PER_STEP;
    }
    if (resetSortType) {
      this.#currentSortType = SortType.DEFAULT;
    }
  };
}
