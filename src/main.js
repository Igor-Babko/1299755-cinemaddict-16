import {
  showMostCommentedExtraWrapper,
  showTopExtraWrapper
} from './view/top-extra-wrapper.js';
import {
  PopupFilmDetailsView
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

import {renderElement, renderTemplate, RenderPosition } from './render.js';
import {SortFilmsView} from './view/sortFilms.js';
import {FilmsWrapperView} from './view/films-wrapper.js';
import {FooterStatisticView} from './view/footer-statistic.js';
import {MostCommentedExtraWrapperView} from './view/most-commented-extra-wrapper.js';
import {TopExtraWrapperView} from './view/top-extra-wrapper.js';
import {ShowMoreButtonView} from './view/show-more-button.js';
import {FilmsListView} from '/src/view/films-list.js';


const fiveFilms = 5;
const mockCount = 20;
const mocks = [];
const cardCount = 5;
let openedFilms = 5;


const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');
const siteFooterElement = document.querySelector('.footer');

for (let i = 0; i < mockCount; i++) {
  mocks.push(createCard());
}
const filters = generateFilter(mocks);


renderTemplate(siteHeaderElement, showUserRank(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createFilterTemplate(filters), RenderPosition.AFTERBEGIN);
renderElement(siteMainElement, new SortFilmsView().element, RenderPosition.BEFOREEND);
const filmsWrapperComponent= new FilmsWrapperView();
renderElement(siteMainElement, filmsWrapperComponent.element, RenderPosition.BEFOREEND);

const filmsWrapper = siteMainElement.querySelector('.films');
const filmsContainer = filmsWrapper.querySelector('.films-list');


const filmsListComponent = new FilmsListView();
renderElement(filmsContainer, filmsListComponent.element, RenderPosition.BEFOREEND);

renderElement(filmsContainer, new ShowMoreButtonView().element, RenderPosition.AFTEREND);
renderElement(filmsWrapper, new TopExtraWrapperView().element, RenderPosition.BEFOREEND);
renderElement(filmsWrapper, new MostCommentedExtraWrapperView().element, RenderPosition.BEFOREEND);


for (let i = 0; i < cardCount; i++) {
  renderTemplate(filmsListComponent.element, createMovieCard(mocks[i]), RenderPosition.BEFOREEND);
}


const extraTopWrapper = filmsWrapper.querySelector('.film-list__container_top');
const extraWrapperMostCommented = filmsWrapper.querySelector('.film-list__container_most_commented');


renderTemplate(extraTopWrapper, createMovieCard(mocks[0]), RenderPosition.BEFOREEND);
renderTemplate(extraTopWrapper, createMovieCard(mocks[1]), RenderPosition.BEFOREEND);
renderTemplate(extraWrapperMostCommented, createMovieCard(mocks[2]), RenderPosition.BEFOREEND);
renderTemplate(extraWrapperMostCommented, createMovieCard(mocks[3]), RenderPosition.BEFOREEND);
renderElement(siteFooterElement, new FooterStatisticView(mocks).element, RenderPosition.BEFOREEND);
//renderElement(siteFooterElement, new PopupFilmDetailsView(mocks[0]).element, RenderPosition.AFTEREND);
//renderTemplate(siteFooterElement, showStatistic(), RenderPosition.AFTEREND);

const filmsLoader = document.querySelector('.films-list__show-more');
const addFiveFilmsHandler = () => {
  for (let i = openedFilms; i < mocks.length; i++) {
    openedFilms += 1;
    renderTemplate(filmsListComponent.element, createMovieCard(mocks[i]), RenderPosition.BEFOREEND);
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
