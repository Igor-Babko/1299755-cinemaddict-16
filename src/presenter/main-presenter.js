import {
  showMostCommentedExtraWrapper,
  showTopExtraWrapper,
} from "../view/top-extra-wrapper.js";
import { PopupFilmDetailsView } from "../view/information-popup-view.js";
import {
  ShowStatisticView,
  sortFilms,
  createFilmsWrapper,
  ShowFooterStatistic,
  createFilterTemplate,
} from "../view/menu-view.js";
import { СreateMovieCardView } from "../view/movie-card-view.js";
import { ShowUserRankView } from "../view/rank-view.js";
import { createCard } from "../mock/film.js";
import { generateFilter } from "../mock/filter.js";
import { AbstractView } from "../view/abstract-view.js";
import { render, renderTemplate, RenderPosition } from "../utils/render.js";
import { SortFilmsView } from "../view/sortFilms.js";
import { FilmsWrapperView } from "../view/films-wrapper.js";
import { FooterStatisticView } from "../view/footer-statistic.js";
import { MostCommentedExtraWrapperView } from "../view/most-commented-extra-wrapper.js";
import { TopExtraWrapperView } from "../view/top-extra-wrapper.js";
import { ShowMoreButtonView } from "../view/show-more-button.js";
import { FilmsListContainertView } from "../view/films-list-container.js";
import { CreateFilterTemplateView } from "../view/filter-template-view.js";
import { NoFilmsView } from "../view/no-films-view.js";
import { FilmsListView } from "../view/films-list.js";
import { MostCommentedExtraContainerView } from "../view/film-list-container-most-commented.js";
import { TopFilmListContainerView } from "../view/film-list-container-top.js";
import { MoviePresenter } from './movie-presenter.js';

const fiveFilms = 5;
const mockCount = 20;
const cardCount = 5;
let openedFilms = 5;
// const mocks = [];

const body = document.querySelector("body");
const siteMainElement = document.querySelector(".main");
const siteHeaderElement = document.querySelector(".header");
const siteFooterElement = document.querySelector(".footer");

export class MovieListPresenter {
  #moviesContainer = null;

  #mockCount = 20;
  #mocks = [];
  #filmCardPresenters = {};
  // #showUserRankComponent = new ShowUserRankView();
  // #createFilterTemplateComponent = new CreateFilterTemplateView(filters);
  #sortFilmsComponent = new SortFilmsView();
  #filmsWrapperComponent = new FilmsWrapperView();
  #noFilmsComponent = new NoFilmsView();
  #showMoreButtonComponent = new ShowMoreButtonView();
  #topExtraWrapperComponent = new TopExtraWrapperView();
  #mostCommentedExtraWrapperComponent = new MostCommentedExtraWrapperView();
  // #createMovieCardComponent = new СreateMovieCardView();
  // #popupFilmDetailsComponent = new PopupFilmDetailsView();
  #footerStatisticComponent = new FooterStatisticView();
  #filmsListContainerComponent = new FilmsListContainertView();
  #FilmsListConponent = new FilmsListView();
  #MostCommentedExtraContainerComponent = new MostCommentedExtraContainerView();
  #TopFilmListContainerComponent = new TopFilmListContainerView();

  constructor(moviesContainer) {
    this.#moviesContainer = moviesContainer;
  }

  init = (mocks) => {
    this.#mocks = [...mocks];
    this.#renderSortFilms();
    this.#renderFilmsWrapperComponent();
    this.#rendeFilmsListConponent();
    this.#renderFilmsListContainerConponent();
    this.#renderShowMoreButtonComponent();
    this.#renderTopExtraWrapperComponent();
    this.#renderMostCommentedExtraWrapperComponent();
    // this.#renderAllCards();
    this.#renderFiveFilms();
    this.#renderMostCommentedExtraContainerComponent();
    this.#renderTopFilmListContainerComponent();
    // this.#renderTopExtraFilmsComponent();
    // this.#renderMostCommentedExtraFilmsComponent();
    this.#renderFooterStatisticComponent();

  };

  #renderSortFilms = () => {
    render(siteMainElement, this.#sortFilmsComponent, RenderPosition.BEFOREEND);
  };

  #renderFilmCard = (container, film) => {
    const filmCardPresenter = new MoviePresenter();
    filmCardPresenter.init(container, film);
    this.#filmCardPresenters[film.id] = filmCardPresenter;
  }

  #renderFilmsWrapperComponent = () => {
    render(
      siteMainElement,
      this.#filmsWrapperComponent,
      RenderPosition.BEFOREEND
    );
  };

  #rendeFilmsListConponent = () => {
    if (this.#mocks.length === 0) {
      render(
        this.#filmsWrapperComponent,
        this.#noFilmsComponent,
        RenderPosition.BEFOREEND
      );
      return;
    }

    render(
      this.#filmsWrapperComponent,
      this.#FilmsListConponent,
      RenderPosition.BEFOREEND
    );
  };

  #renderFilmsListContainerConponent = () => {
    render(
      this.#FilmsListConponent,
      this.#filmsListContainerComponent,
      RenderPosition.BEFOREEND
    );
  };

  #renderShowMoreButtonComponent = () => {
    render(
      this.#FilmsListConponent,
      this.#showMoreButtonComponent,
      RenderPosition.AFTEREND
    );
  };

  #renderTopExtraWrapperComponent = () => {
    render(
      this.#filmsWrapperComponent,
      this.#topExtraWrapperComponent,
      RenderPosition.BEFOREEND
    );
  };

  #renderMostCommentedExtraWrapperComponent = () => {
    render(
      this.#filmsWrapperComponent,
      this.#mostCommentedExtraWrapperComponent,
      RenderPosition.BEFOREEND
    );
  };

  // #renderCard = (filmListElement, card) => {

  //   const filmComponent = this.#createMovieCardComponent.render(card);
  //   const popupComponent = this.#popupFilmDetailsComponent;

  //   this.#createMovieCardComponent.setClickHandler(() => {
  //     body.appendChild(popupComponent.element);
  //     document.addEventListener("keydown", keyDownEscHandler);
  //     popupComponent.element
  //       .querySelector(".film-details__close-btn")
  //       .addEventListener("click", closePopupHandler);

  //     function closePopupHandler() {
  //       body.removeChild(popupComponent.element);
  //       document.removeEventListener("keydown", keyDownEscHandler);
  //       popupComponent.element
  //         .querySelector(".film-details__close-btn")
  //         .removeEventListener("click", closePopupHandler);
  //     }

  //     function keyDownEscHandler(evt) {
  //       if (evt.key === "Escape") {
  //         evt.preventDefault();
  //         closePopupHandler();
  //       }
  //     }
  //   });
  //   // filmComponent.setClickHandler();

  //   render(filmListElement, filmComponent, RenderPosition.BEFOREEND);
  // };

  // #renderAllCards = () => {
  //   for (let i = 0; i < this.#mockCount; i++) {
  // this.#renderFilmCard(this.#filmsListContainerComponent.element, this.#mocks[i]);




  //     // this.#renderCard(
  //     //   this.#filmsListContainerComponent.element,
  //     //   this.#mocks[i]
  //     // );
  //   }
  // };

  #renderMostCommentedExtraContainerComponent = () => {
    render(
      this.#mostCommentedExtraWrapperComponent,
      this.#MostCommentedExtraContainerComponent,
      RenderPosition.BEFOREEND
    );
  };

  #renderTopFilmListContainerComponent = () => {
    render(
      this.#topExtraWrapperComponent,
      this.#TopFilmListContainerComponent,
      RenderPosition.BEFOREEND
    );
  };

  // #renderTopExtraFilmsComponent = () => {
  //   render(
  //     this.#TopFilmListContainerComponent,
  //     new СreateMovieCardView(this.#mocks[0]),
  //     RenderPosition.BEFOREEND
  //   );
  //   render(
  //     this.#TopFilmListContainerComponent,
  //     new СreateMovieCardView(this.#mocks[1]),
  //     RenderPosition.BEFOREEND
  //   );
  // };

  // #renderMostCommentedExtraFilmsComponent = () => {
  //   render(
  //     this.#MostCommentedExtraContainerComponent,
  //     new СreateMovieCardView(this.#mocks[2]),
  //     RenderPosition.BEFOREEND
  //   );
  //   render(
  //     this.#MostCommentedExtraContainerComponent,
  //     new СreateMovieCardView(this.#mocks[3]),
  //     RenderPosition.BEFOREEND
  //   );
  // };

  #renderFooterStatisticComponent = () => {
    render(
      siteFooterElement,
      this.#footerStatisticComponent(this.#mocks),
      RenderPosition.BEFOREEND
    );
  };

  #renderFiveFilms = () => {

    //Метод не работает если использовать функцию

    // function addFiveFilmsHandler (){
      for (let i = openedFilms; i < this.#mocks.length; i++) {
        this.#renderFilmCard(this.#filmsListContainerComponent.element, this.#mocks[i]);


        openedFilms += 1;
        if (openedFilms === this.#mocks.length) {
          this.#showMoreButtonComponent.style.display = 'none';
          // this.#showMoreButtonComponent.removeEventListener('click', addFiveFilmsHandler);
        }
        if ((i + 1) % fiveFilms === 0) {
          break;
        }
      }
    // }

    // this.#showMoreButtonComponent.addEventListener(
    //   'click',
    //   addFiveFilmsHandler
    // );
    // addFiveFilmsHandler();
  };
}
