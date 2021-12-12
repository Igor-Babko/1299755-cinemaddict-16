import {
  showMostCommentedExtraWrapper,
  showTopExtraWrapper
} from './view/films-list-extra-view.js';
import {
  createPopupFilmDetails
} from './view/information-popup-view.js';
import {
  showStatistic,
  sortFilms,
  createFilmsWrapper,
  showFooterStatistic,
  createFilterTemplate
} from './view/menu-view.js';
import {
  createMovieCard,
} from './view/movie-card-view.js';
import {
  showUserRank
} from './view/rank-view.js';
import {
  createCard
} from '../src/mock/film.js';
import {
  generateFilter
} from './mock/filter.js';

const fiveFilms = 5;
const mockCount = 20;
const mocks = [];
const cardCount = 5;
let openedFilms = 5;


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

for (let i = 0; i < mockCount; i++) {
  mocks.push(createCard());
}
const filters = generateFilter(mocks);


renderTemplate(siteHeaderElement, showUserRank(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createFilterTemplate(filters), RenderPosition.AFTERBEGIN);
renderTemplate(siteMainElement, sortFilms(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createFilmsWrapper(), RenderPosition.BEFOREEND);


const filmsWrapper = siteMainElement.querySelector('.films');
const filmsContainer = filmsWrapper.querySelector('.films-list__container');


renderTemplate(filmsWrapper, showTopExtraWrapper(), RenderPosition.BEFOREEND);
renderTemplate(filmsWrapper, showMostCommentedExtraWrapper(), RenderPosition.BEFOREEND);


for (let i = 0; i < cardCount; i++) {
  renderTemplate(filmsContainer, createMovieCard(mocks[i]), RenderPosition.BEFOREEND);
}


const extraTopWrapper = filmsWrapper.querySelector('.film-list__container_top');
const extraWrapperMostCommented = filmsWrapper.querySelector('.film-list__container_most_commented');


renderTemplate(extraTopWrapper, createMovieCard(mocks[0]), RenderPosition.BEFOREEND);
renderTemplate(extraTopWrapper, createMovieCard(mocks[1]), RenderPosition.BEFOREEND);
renderTemplate(extraWrapperMostCommented, createMovieCard(mocks[2]), RenderPosition.BEFOREEND);
renderTemplate(extraWrapperMostCommented, createMovieCard(mocks[3]), RenderPosition.BEFOREEND);
renderTemplate(siteFooterElement, showFooterStatistic(), RenderPosition.BEFOREEND);
//renderTemplate(siteFooterElement, createPopupFilmDetails(mocks[0]), RenderPosition.AFTEREND);
//renderTemplate(siteFooterElement, showStatistic(), RenderPosition.AFTEREND);

const filmsLoader = document.querySelector('.films-list__show-more');
const addFiveFilmsHandler = () => {
  for (let i = openedFilms; i < mocks.length; i++) {
    openedFilms += 1;
    renderTemplate(filmsContainer, createMovieCard(mocks[i]), RenderPosition.BEFOREEND);
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
