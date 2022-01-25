import UserRankView from './view/user-rank-view.js';
import FilterView from './view/filter-view.js';
import FilmsView from './view/films-view.js';
import FilmsTotalCountView from './view/films-total-count-view.js';
import { renderPosition, render } from './utils/render.js';
import { generateFilm } from './mock/film.js';
import { generateFilter } from './mock/filter.js';
import FilmsBoardPresenter from './presenter/films-board-presenter.js';
import FilmsModel from './model/films-model.js';
import { generateComment } from './mock/comment.js';
import CommentsModel from './model/comments-model.js';

const FILM_COUNT = 20;

const films = Array.from({ length: FILM_COUNT }, generateFilm);
const comments = films.reduce((commentsList, film) => {
  const comment = film.commentsId.map(generateComment);
  return [...commentsList, ...comment];
}, []);

const filters = generateFilter(films);
const activeFilter = filters.find((filter) => filter.isChecked);
const watchedFilmCount = filters.find(({ name }) => name === 'history').count;

const filmsModel = new FilmsModel();
const commentsModel = new CommentsModel();

filmsModel.films = films;
commentsModel.comments = comments;

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const siteFooterElement = document.querySelector('.footer');
const footerStatisticsElement = siteFooterElement.querySelector('.footer__statistics');

const filmsComponent = new FilmsView();
const filmsBoardPresenter = new FilmsBoardPresenter(filmsComponent, filmsModel, commentsModel);

render(siteHeaderElement, new UserRankView(watchedFilmCount), renderPosition.BEFOREEND);
render(siteMainElement, new FilterView(filters), renderPosition.BEFOREEND);
render(siteMainElement, filmsComponent, renderPosition.BEFOREEND);
render(footerStatisticsElement, new FilmsTotalCountView(FILM_COUNT), renderPosition.BEFOREEND);

filmsBoardPresenter.init(activeFilter);
