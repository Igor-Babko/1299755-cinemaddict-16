import FilmCardView from '../view/film-card-view.js';
import FilmPopupView from '../view/film-popup-view.js';
import { RenderPosition, render, replace, remove } from '../utils/render.js';
import { AUTHORIZATION, END_POINT, PopupState, UpdateType, UserAction } from '../const.js';
import dayjs from 'dayjs';
import CommentsModel from '../model/comments-model.js';
import ApiService from '../api-service.js';

const Mode = {
  DEFAULT: 'DEFAULT',
  POPUP: 'POPUP',
};
export default class FilmPresenter {
  #filmsListContainer = null;
  #changeData = null;
  #changeMode = null;
  #filmCardComponent = null;
  #filmPopupComponent = null;
  #apiService = null;
  #film = null;

  #commentsModel = new CommentsModel(new ApiService(END_POINT, AUTHORIZATION));
  #mode = Mode.DEFAULT;

  constructor(filmsListContainer, changeData, changeMode) {
    this.#filmsListContainer = filmsListContainer;
    this.#changeData = changeData;
    this.#changeMode = changeMode;
    this.#apiService = new ApiService(END_POINT, AUTHORIZATION);
  }

  get comments() {
    return this.#commentsModel.comments;
  }

  init = (film) => {
    this.#film = film;

    this.#renderFilm();
  };

  destroy = () => {
    remove(this.#filmCardComponent);
    remove(this.#filmPopupComponent);
  };

  resetView = () => {
    if (this.#mode !== Mode.DEFAULT) {
      this.#filmPopupComponent.restore(this.#film, this.comments);
      this.#closePopup();
    }
  };

  #renderFilm = () => {
    const prevFilmCardComponent = this.#filmCardComponent;
    this.#filmCardComponent = new FilmCardView(this.#film);
    this.#setCardEventHandlers();

    if (this.#mode === Mode.POPUP) {
      replace(this.#filmCardComponent, prevFilmCardComponent);
      this.#filmPopupComponent.updateData({
        ...this.#film,
        comments: this.comments,
      });
      return;
    }

    if (prevFilmCardComponent === null) {
      render(
        this.#filmsListContainer,
        this.#filmCardComponent,
        RenderPosition.BEFOREEND
      );
      return;
    }
    if (this.#mode === Mode.DEFAULT) {
      replace(this.#filmCardComponent, prevFilmCardComponent);
    }
  };

  #setCardEventHandlers = () => {
    this.#filmCardComponent.setLinkClickHandler(this.#handleLinkClick);
    this.#filmCardComponent.setWatchListClickHandler(
      this.#handleWatchListClick
    );
    this.#filmCardComponent.setWatchedClickHandler(this.#handleWatchedClick);
    this.#filmCardComponent.setFavoriteClickHandler(this.#handleFavoriteClick);
  };

  #setPopupEventHandlers = () => {
    this.#filmPopupComponent.setWatchListClickHandler(
      this.#handleWatchListClick
    );
    this.#filmPopupComponent.setWatchedClickHandler(this.#handleWatchedClick);
    this.#filmPopupComponent.setFavoriteClickHandler(this.#handleFavoriteClick);
    this.#filmPopupComponent.setCloseClickHandler(this.#handleCloseClick);
    this.#filmPopupComponent.setCommentAddHandler(this.#handleCommentAdd);
    this.#filmPopupComponent.setCommentDeleteHandler(this.#handleCommentDelete);
  };

  // todo
  restorePopup = async (state) => {
    await this.#showPopup();
    this.#filmPopupComponent.restore(
      { ...state, ...this.#film },
      this.comments
    );
    this.#filmPopupComponent.restoreScrollPosition();
  };

  #showPopup = async () => {
    this.#changeMode(this.#film.id);

    document.body.classList.add('hide-overflow');
    document.addEventListener('keydown', this.#EscKeyDownHandler);

    this.#commentsModel.addObserver(this.#handleCommentModelEvent);
    await this.#commentsModel.init(this.#film.id);
  };

  #renderPopup = () => {
    this.#filmPopupComponent = new FilmPopupView(this.#film, this.comments);

    this.#setPopupEventHandlers();
    render(document.body, this.#filmPopupComponent, RenderPosition.BEFOREEND);
    this.#mode = Mode.POPUP;
  };

  #handleCommentModelEvent = (updateType) => {
    switch (updateType) {
      case UpdateType.INIT:
        this.#renderPopup();
        break;
      default:
        this.#film = {
          ...this.#film,
          commentsId: [...this.comments].map((comment) => comment.id),
        };
        this.#renderFilm();
        this.#filmPopupComponent.restore(this.#film, this.comments);
        break;
    }
  };

  #closePopup = () => {
    document.body.classList.remove('hide-overflow');
    document.removeEventListener('keydown', this.#EscKeyDownHandler);
    this.#filmPopupComponent.element.remove();
    this.#mode = Mode.DEFAULT;
  };

  #EscKeyDownHandler = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.#filmPopupComponent.restore(this.#film, this.comments);
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
    this.#changeData(
      UserAction.UPDATE_FILM,
      UpdateType.MINOR,
      { ...this.#film, isWatchlist: !this.#film.isWatchlist },
      this.#mode === Mode.POPUP && this.#filmPopupComponent.state
    );
  };

  #handleWatchedClick = () => {
    this.#changeData(
      UserAction.UPDATE_FILM,
      UpdateType.MINOR,
      {
        ...this.#film,
        isWatched: !this.#film.isWatched,
        watchingDate: dayjs().format(),
      },
      this.#mode === Mode.POPUP && this.#filmPopupComponent.state
    );
  };

  #handleFavoriteClick = () => {
    this.#changeData(
      UserAction.UPDATE_FILM,
      UpdateType.MINOR,
      { ...this.#film, isFavorite: !this.#film.isFavorite },
      this.#mode === Mode.POPUP && this.#filmPopupComponent.state
    );
  };

  #handleCommentAdd = (comment) => {
    this.#filmPopupComponent.setState(PopupState.DISABLED);
    this.#apiService.addComment(this.#film.id, comment)
      .then(({comments})=>{
        this.#commentsModel.addComment(comments);
      })
      .catch((err)=> {
        this.#filmPopupComponent.shakeInputForm();
        throw new Error(err);
      })
      .finally(() => {
        setTimeout(()=>this.#filmPopupComponent.setState(PopupState.DEFAULT), 300);
      });
  };

  #handleCommentDelete = async (commentId) => {
    this.#filmPopupComponent.setState(PopupState.DELETE, commentId);
    await this.#apiService.deleteComment(commentId);
    this.#commentsModel.deleteComment(commentId);
    this.#filmPopupComponent.setState(PopupState.DEFAULT);
  };
}
