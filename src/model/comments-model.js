import AbstractObservable from '../utils/abstract-observable.js';
import { UpdateType } from '../const.js';

export default class CommentsModel extends AbstractObservable {
  #apiService = null;
  #filmsModel = null;
  #comments = [];

  constructor(apiService, filmsModel) {
    super();
    this.#apiService = apiService;
    this.#filmsModel = filmsModel;
  }

  get comments() {
    return this.#comments;
  }

  init = async (filmId) => {
    try {
      this.#comments = await this.#apiService.getComments(filmId);
      return this.#comments;
    } catch (err) {
      this.#comments = [];
    }

    this._notify(UpdateType.INIT);
  };

  addComment = async (updateType, {filmId, comment}) => {
    try {
      const response = await this.#apiService.addComment(filmId, comment);
      this.#comments = response.comments;
      this.#filmsModel.addComment(updateType, filmId, this.#comments);
    } catch (err) {
      throw new Error('Can\'t add comment');
    }
  };

  delete = async (updateType, id) => {
    const index = this.#comments.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new Error('Can\'t delete unexisting comment');
    }

    try {
      await this.#apiService.deleteComment(id);

      this.#comments = [
        ...this.#comments.slice(0, index),
        ...this.#comments.slice(index + 1),
      ];

      this.#filmsModel.deleteComment(updateType, id);
    } catch (err) {
      throw new Error('Can\'t delete comment');
    }
  }
}
