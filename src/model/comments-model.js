import AbstractObservable from '../utils/abstract-observable.js';
import { UpdateType } from '../const.js';

export default class CommentsModel extends AbstractObservable {
  #apiService = null;
  #comments = [];

  constructor(apiService) {
    super();
    this.#apiService = apiService;
  }

  get comments() {
    return this.#comments;
  }

  init = async (filmId) => {
    try {
      this.#comments = await this.#apiService.getComments(filmId);
    } catch (err) {
      this.#comments = [];
    }

    this._notify(UpdateType.INIT);
  };

  addComment = async (filmId, comment) => {
    try {
      const response = await this.#apiService.addComment(filmId, comment);
      this.#comments = response.comments;
      this._notify();
    } catch (err) {
      return  new Error('Can\'t add comment');
    }
  };

  deleteComment = async (commentId) => {
    const index = this.#comments.findIndex((comment) => comment.id === commentId);

    if (index === -1) {
      throw new Error('Can\'t delete unexisting comment');
    }

    try {
      await this.#apiService.deleteComment(commentId);
      this.#comments = [
        ...this.#comments.slice(0, index),
        ...this.#comments.slice(index + 1)
      ];

      this._notify();
    } catch (err) {
      throw new Error('Can\'t delete comment');
    }
  };
}
