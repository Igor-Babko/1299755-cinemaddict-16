import UserRankView from './view/user-rank-view.js';
import FilterView from './view/filter-view.js';
import FilmsView from './view/films-view.js';
import FilmsTotalCountView from './view/films-total-count-view.js';
import { renderPosition, render } from './utils/render.js';
import { generateFilm } from './mock/film.js';
import { generateFilter } from './mock/filter.js';
import FilmsBoardPresenter from './presenter/films-board-presenter.js';

const FILM_COUNT = 20;
const films = Array.from({ length: FILM_COUNT }, generateFilm);
const filters = generateFilter(films);
const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const siteFooterElement = document.querySelector('.footer');
const footerStatisticsElement = siteFooterElement.querySelector('.footer__statistics');
const filmsComponent = new FilmsView();
const filmsBoardPresenter = new FilmsBoardPresenter(filmsComponent);

const renderUserRank = (container, allFilters) => {
  const watchedFilmCount = allFilters.find(({ name }) => name === 'history').count;
  render(container, new UserRankView(watchedFilmCount), renderPosition.BEFOREEND);
};

renderUserRank(siteHeaderElement, filters);
render(siteMainElement, new FilterView(filters), renderPosition.BEFOREEND);
render(siteMainElement, filmsComponent, renderPosition.BEFOREEND);
filmsBoardPresenter.init(films, filters);
render(footerStatisticsElement, new FilmsTotalCountView(FILM_COUNT), renderPosition.BEFOREEND);
