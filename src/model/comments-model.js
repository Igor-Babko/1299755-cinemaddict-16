import AbstractObservable from '../utils/abstract-observable.js';

export default class CommentsModel extends AbstractObservable {
  #comments = [];
  set comments(comments) {
    this.#comments = [...comments];
  }

  get comments() {
    return this.#comments;
  }

  addComment = (actionType, comment) => {
    this.#comments = [
      comment, ...this.#comments
    ];

    this._notify(actionType, comment.id);
  };

  deleteComment = (actionType, commentId) => {
    const index = this.#comments.findIndex((comment) => comment.id === commentId);

    if (index === -1) {
      throw new Error('Can\'t delete unexisting task');
    }
    this.#comments = [
      ...this.#comments.slice(0, index), ...this.#comments.slice(index + 1)
    ];

    this._notify(actionType, commentId);
  };
}
