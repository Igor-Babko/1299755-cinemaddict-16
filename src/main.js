// import {
//   showMostCommentedExtraWrapper,
//   showTopExtraWrapper
// } from './view/top-extra-wrapper.js';
// import {
//   PopupFilmDetailsView
// } from './view/information-popup-view.js';
// import {
//   ShowStatisticView,
//   sortFilms,
//   createFilmsWrapper,
//   ShowFooterStatistic,
//   createFilterTemplate
// } from './view/menu-view.js';
// import {
//   СreateMovieCardView,
// } from './view/movie-card-view.js';
// import {
//   ShowUserRankView
// } from './view/rank-view.js';
import {
  createCard
} from './mock/film.js';
// import {
//   generateFilter
// } from './mock/filter.js';
// import {
//   AbstractView
// } from './view/abstract-view.js';
// import {
//   render,
//   renderTemplate,
//   RenderPosition
// } from './utils/render.js';
// import {
//   SortFilmsView
// } from './view/sortFilms.js';
// import {
//   FilmsWrapperView
// } from './view/films-wrapper.js';
// import {
//   FooterStatisticView
// } from './view/footer-statistic.js';
// import {
//   MostCommentedExtraWrapperView
// } from './view/most-commented-extra-wrapper.js';
// import {
//   TopExtraWrapperView
// } from './view/top-extra-wrapper.js';
// import {
//   ShowMoreButtonView
// } from './view/show-more-button.js';
// import {
//   FilmsListContainertView
// } from '/src/view/films-list-container.js';
// import {
//   CreateFilterTemplateView
// } from './view/filter-template-view.js';
// import {
//   NoFilmsView
// } from './view/no-films-view.js';
import {
  MovieListPresenter
} from "./presenter/main-presenter.js";

// const fiveFilms = 5;
const mockCount = 20;
const mocks = [];
// const cardCount = 5;
// let openedFilms = 5;

const body = document.querySelector("body");
const siteMainElement = document.querySelector(".main");
const siteHeaderElement = document.querySelector(".header");
const siteFooterElement = document.querySelector(".footer");

for (let i = 0; i < mockCount; i++) {
  mocks.push(createCard());
}
// const filters = generateFilter(mocks);

// render(siteHeaderElement, new ShowUserRankView(), RenderPosition.BEFOREEND);
// render(siteMainElement, new CreateFilterTemplateView(filters), RenderPosition.AFTERBEGIN);
// render(siteMainElement, new SortFilmsView(), RenderPosition.BEFOREEND);
// const filmsWrapperComponent = new FilmsWrapperView();
// const noFilms = new NoFilmsView();

// if (mocks.length === 0) {
//   render(siteMainElement, noFilms, RenderPosition.BEFOREEND);
// } else {
//   render(siteMainElement, filmsWrapperComponent, RenderPosition.BEFOREEND);

//   const filmsWrapper = siteMainElement.querySelector('.films');
//   const filmsContainer = filmsWrapper.querySelector('.films-list');

//   const filmsListComponent = new FilmsListContainertView();
//   render(filmsContainer, filmsListComponent, RenderPosition.BEFOREEND);

//   render(filmsContainer, new ShowMoreButtonView(), RenderPosition.AFTEREND);
//   render(filmsWrapper, new TopExtraWrapperView(), RenderPosition.BEFOREEND);
//   render(filmsWrapper, new MostCommentedExtraWrapperView(), RenderPosition.BEFOREEND);

//   const renderCard = (filmListElement, card) => {
//     const filmComponent = new СreateMovieCardView(card);
//     const popupComponent = new PopupFilmDetailsView(card);

//     filmComponent.setClickHandler(() => {
//       body.appendChild(popupComponent.element);
//       document.addEventListener('keydown', keyDownEscHandler);
//       popupComponent.element.querySelector('.film-details__close-btn').addEventListener('click', closePopupHandler);

//       function closePopupHandler() {
//         body.removeChild(popupComponent.element);
//         document.removeEventListener('keydown', keyDownEscHandler);
//         popupComponent.element.querySelector('.film-details__close-btn').removeEventListener('click', closePopupHandler);
//       }

//       function keyDownEscHandler(evt) {
//         if (evt.key === 'Escape') {
//           evt.preventDefault();
//           closePopupHandler();
//         }
//       }
//     });

//     render(filmListElement, filmComponent, RenderPosition.BEFOREEND);
//   };

//   for (let i = 0; i < cardCount; i++) {
//     renderCard(filmsListComponent.element, mocks[i]);
//   }

//   const extraTopWrapper = filmsWrapper.querySelector('.film-list__container_top');
//   const extraWrapperMostCommented = filmsWrapper.querySelector('.film-list__container_most_commented');

//   render(extraTopWrapper, new СreateMovieCardView(mocks[0]), RenderPosition.BEFOREEND);
//   render(extraTopWrapper, new СreateMovieCardView(mocks[1]), RenderPosition.BEFOREEND);
//   render(extraWrapperMostCommented, new СreateMovieCardView(mocks[2]), RenderPosition.BEFOREEND);
//   render(extraWrapperMostCommented, new СreateMovieCardView(mocks[3]), RenderPosition.BEFOREEND);
//   render(siteFooterElement, new FooterStatisticView(mocks), RenderPosition.BEFOREEND);

//   const filmsLoader = document.querySelector('.films-list__show-more');

//   const addFiveFilmsHandler = () => {
//     for (let i = openedFilms; i < mocks.length; i++) {
//       openedFilms += 1;
//       render(filmsListComponent.element, new СreateMovieCardView(mocks[i]), RenderPosition.BEFOREEND);
//       if (openedFilms === mocks.length) {
//         filmsLoader.style.display = 'none';
//         filmsLoader.removeEventListener('click', addFiveFilmsHandler);
//       }
//       if ((i + 1) % fiveFilms === 0) {
//         break;
//       }
//     }
//   };

//   filmsLoader.addEventListener('click', addFiveFilmsHandler);
// }

//render(siteFooterElement, new PopupFilmDetailsView(mocks[0]).element, RenderPosition.AFTEREND);
//render(siteFooterElement, new ShowStatisticView(mocks).element, RenderPosition.AFTEREND);

//-----------------------------;

const startRender = new MovieListPresenter();
startRender.init(mocks);
