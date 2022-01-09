import { СreateMovieCardView } from "../view/movie-card-view.js";
import { render, renderTemplate, RenderPosition } from "../utils/render.js";


export class MoviePresenter {
  #film = null;
  #container = null;
  #createMovieCardComponent = null;

  init(container, film) {
    this.#container = container;
    this.#film = film;
    this.#renderCard();
  }

  #renderCard = () => {
    this.#createMovieCardComponent = new СreateMovieCardView(this.#film);
    const filmComponent = this.#createMovieCardComponent.element;
    render(this.#container, filmComponent, RenderPosition.BEFOREEND);
    // const popupComponent = this.#popupFilmDetailsComponent;
  }
}
