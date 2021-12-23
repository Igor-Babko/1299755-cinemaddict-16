import {
  createElement
} from '../render.js';

const createMovieCard = (card) => {
  const {
    name,
    poster,
    description,
    year,
    genre,
    rating,
    duration
  } = card;


  return `<article class="film-card">
  <a class="film-card__link">
    <h3 class="film-card__title">${name}</h3>
    <p class="film-card__rating">${rating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${year}</span>
      <span class="film-card__duration">${duration}</span>
      <span class="film-card__genre">${genre}</span>
    </p>
    <img src=${poster} alt class="film-card__poster">
    <p class="film-card__description">${description}</p>
    <span class="film-card__comments">0 comments</span>
  </a>
  <div class="film-card__controls">
    <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
    <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
    <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
  </div>
</article>`;
};

export class СreateMovieCardView {
  #element = null;
  #card = null;

  constructor(card) {
    this.#card = card;
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  get template() {
    return createMovieCard(this.#card);
  }

  removeElement() {
    this.#element = null;
  }
}
