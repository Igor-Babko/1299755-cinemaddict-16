import {
  showMostCommentedExtraWrapper,
  showTopExtraWrapper
} from './view/top-extra-wrapper.js';
import {
  PopupFilmDetailsView
} from './view/information-popup-view.js';
import {
  ShowStatisticView,
  sortFilms,
  createFilmsWrapper,
  ShowFooterStatistic,
  createFilterTemplate
} from './view/menu-view.js';
import {
  СreateMovieCardView,
} from './view/movie-card-view.js';
import {
  ShowUserRankView
} from './view/rank-view.js';
import {
  createCard
} from '../src/mock/film.js';
import {
  generateFilter
} from './mock/filter.js';

import {
  render,
  renderTemplate,
  RenderPosition
} from './render.js';
import {
  SortFilmsView
} from './view/sortFilms.js';
import {
  FilmsWrapperView
} from './view/films-wrapper.js';
import {
  FooterStatisticView
} from './view/footer-statistic.js';
import {
  MostCommentedExtraWrapperView
} from './view/most-commented-extra-wrapper.js';
import {
  TopExtraWrapperView
} from './view/top-extra-wrapper.js';
import {
  ShowMoreButtonView
} from './view/show-more-button.js';
import {
  FilmsListView
} from '/src/view/films-list.js';
import {
  CreateFilterTemplateView
} from './view/filter-template-view.js';
import {
  NoFilmsView
} from './view/no-films-view.js';


const fiveFilms = 5;
const mockCount = 20;
const mocks = [];
const cardCount = 5;
let openedFilms = 5;

const body = document.querySelector('body');
const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');
const siteFooterElement = document.querySelector('.footer');

for (let i = 0; i < mockCount; i++) {
  mocks.push(createCard());
}
const filters = generateFilter(mocks);

render(siteHeaderElement, new ShowUserRankView().element, RenderPosition.BEFOREEND);
render(siteMainElement, new CreateFilterTemplateView(filters).element, RenderPosition.AFTERBEGIN);
render(siteMainElement, new SortFilmsView().element, RenderPosition.BEFOREEND);
const filmsWrapperComponent = new FilmsWrapperView();
const noFilms = new NoFilmsView();

if (mocks.length === 0) {
  render(siteMainElement, noFilms.element, RenderPosition.BEFOREEND);
} else {
  render(siteMainElement, filmsWrapperComponent.element, RenderPosition.BEFOREEND);



  const filmsWrapper = siteMainElement.querySelector('.films');
  const filmsContainer = filmsWrapper.querySelector('.films-list');

  const filmsListComponent = new FilmsListView();
  render(filmsContainer, filmsListComponent.element, RenderPosition.BEFOREEND);

  render(filmsContainer, new ShowMoreButtonView().element, RenderPosition.AFTEREND);
  render(filmsWrapper, new TopExtraWrapperView().element, RenderPosition.BEFOREEND);
  render(filmsWrapper, new MostCommentedExtraWrapperView().element, RenderPosition.BEFOREEND);


  const renderCard = (filmListElement, card) => {
    const filmComponent = new СreateMovieCardView(card);
    const popupComponent = new PopupFilmDetailsView(card);

    function filmCardClickHandler() {
      body.appendChild(popupComponent.element);

      function closePopupHandler() {
        body.removeChild(popupComponent.element);
        document.removeEventListener('keydown', keyDownEscHandler);
        popupComponent.element.querySelector('.film-details__close-btn').removeEventListener('click', closePopupHandler);
      }

      function keyDownEscHandler(evt) {
        if (evt.key === 'Escape') {
          evt.preventDefault();
          closePopupHandler();
        }
      }

      popupComponent.element.querySelector('.film-details__close-btn').addEventListener('click', closePopupHandler);
      document.addEventListener('keydown', keyDownEscHandler);

    }

    filmComponent.element.querySelector('.film-card__link').addEventListener('click', filmCardClickHandler);

    //document.addEventListener('keydown', keyDownEscHandler);

    render(filmListElement, filmComponent.element, RenderPosition.BEFOREEND);
  };


  for (let i = 0; i < cardCount; i++) {
    renderCard(filmsListComponent.element, mocks[i]);
  }


  const extraTopWrapper = filmsWrapper.querySelector('.film-list__container_top');
  const extraWrapperMostCommented = filmsWrapper.querySelector('.film-list__container_most_commented');

  render(extraTopWrapper, new СreateMovieCardView(mocks[0]).element, RenderPosition.BEFOREEND);
  render(extraTopWrapper, new СreateMovieCardView(mocks[1]).element, RenderPosition.BEFOREEND);
  render(extraWrapperMostCommented, new СreateMovieCardView(mocks[2]).element, RenderPosition.BEFOREEND);
  render(extraWrapperMostCommented, new СreateMovieCardView(mocks[3]).element, RenderPosition.BEFOREEND);
  render(siteFooterElement, new FooterStatisticView(mocks).element, RenderPosition.BEFOREEND);

  const filmsLoader = document.querySelector('.films-list__show-more');

  const addFiveFilmsHandler = () => {
    for (let i = openedFilms; i < mocks.length; i++) {
      openedFilms += 1;
      render(filmsListComponent.element, new СreateMovieCardView(mocks[i]).element, RenderPosition.BEFOREEND);
      if (openedFilms === mocks.length) {
        filmsLoader.style.display = 'none';
        filmsLoader.removeEventListener('click', addFiveFilmsHandler);
      }
      if ((i + 1) % fiveFilms === 0) {
        break;
      }
    }
  };


  filmsLoader.addEventListener('click', addFiveFilmsHandler);
}




//render(siteFooterElement, new PopupFilmDetailsView(mocks[0]).element, RenderPosition.AFTEREND);
//render(siteFooterElement, new ShowStatisticView(mocks).element, RenderPosition.AFTEREND);
