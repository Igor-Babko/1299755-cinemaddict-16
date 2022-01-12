import { СreateMovieCardView } from '../view/movie-card-view.js';
import { render, renderTemplate, RenderPosition } from '../utils/render.js';
import { PopupFilmDetailsView } from '../view/information-popup-view.js';


const body = document.querySelector('body');


export class MoviePresenter {
  #film = null;
  #container = null;
  #createMovieCardComponent = null;
  #popupFilmDetailsComponent = null;


  init(container, film) {
    this.#container = container;
    this.#film = film;
    this.#popupFilmDetailsComponent = new PopupFilmDetailsView(this.#film);
    this.#renderCard();
  }

  #renderCard = () => {

    this.#createMovieCardComponent = new СreateMovieCardView(this.#film);
    const filmComponent = this.#createMovieCardComponent.element;
    const popupComponent = this.#popupFilmDetailsComponent;

// const filmComponent = this.#createMovieCardComponent.render(card);
// #renderCard = (filmListElement, card) => {
        this.#createMovieCardComponent.setClickHandler(() => {
          body.appendChild(popupComponent.element);
          document.addEventListener('keydown', keyDownEscHandler);
          popupComponent.element.querySelector('.film-details__close-btn').addEventListener('click', closePopupHandler);

          function closePopupHandler() {
            body.removeChild(popupComponent.element);
            document.removeEventListener('keydown', keyDownEscHandler);
            popupComponent.element
              .querySelector('.film-details__close-btn')
              .removeEventListener('click', closePopupHandler);
          }

          function keyDownEscHandler(evt) {
            if (evt.key === 'Escape') {
              evt.preventDefault();
              closePopupHandler();
            }
          }
        });
        // filmComponent.setClickHandler();

    render(this.#container, filmComponent, RenderPosition.BEFOREEND);



      //   render(filmListElement, filmComponent, RenderPosition.BEFOREEND);
      // };
  }
}
