import {
  showFilmsListExtra
} from './view/films-list-extra-view.js';
import {
  createPopupFilmDetails
} from './view/information-popup-view.js';
import {
  showNav,
  showStatistic,
  sortFilms,
  createFilmsWrapper,
  showFooterStatistic
} from './view/menu-view.js';
import {
  createMovieCard,
} from './view/movie-card-view.js';
import {
  showUserRank
} from './view/rank-view.js';


const cardCount = 5;
const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend'
};

const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');
const siteFooterElement = document.querySelector('.footer');


renderTemplate(siteHeaderElement, showUserRank(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, showNav(), RenderPosition.AFTERBEGIN);
renderTemplate(siteMainElement, sortFilms(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createFilmsWrapper(), RenderPosition.BEFOREEND);


const filmsWrapper = siteMainElement.querySelector('.films');
const filmsContainer = filmsWrapper.querySelector('.films-list__container');


for (let i = 0; i < cardCount; i++) {
  renderTemplate(filmsContainer, createMovieCard(), RenderPosition.BEFOREEND);
}

renderTemplate(filmsWrapper, showFilmsListExtra(), RenderPosition.BEFOREEND);
renderTemplate(siteFooterElement, showFooterStatistic(), RenderPosition.BEFOREEND);
renderTemplate(siteFooterElement, createPopupFilmDetails(), RenderPosition.AFTEREND);
renderTemplate(siteFooterElement, showStatistic(), RenderPosition.AFTEREND);

