import UserRankView from './view/user-rank-view.js';
import FilmsTotalCountView from './view/films-total-count-view.js';
import { RenderPosition, render, remove } from './utils/render.js';
import { generateFilm } from './mock/film.js';
import FilmsBoardPresenter from './presenter/films-board-presenter.js';
import FilmsModel from './model/films-model.js';
import { generateComment } from './mock/comment.js';
import CommentsModel from './model/comments-model.js';
import FilterModel from './model/filter-model.js';
import FilterPresenter from './presenter/filter-presenter.js';
import { MenuItem } from './const.js';
import SiteMenuView from './view/site-menu-view.js';
import StatisticsView from './view/statistics-view.js';
import { watchedFilmCountToUserRank } from './utils/common.js';

const FILM_COUNT = 20;

const films = Array.from({ length: FILM_COUNT }, generateFilm);
const comments = films.reduce((commentsList, film) => {
  const comment = film.commentsId.map(generateComment);
  return [...commentsList, ...comment];
}, []);
const filmsModel = new FilmsModel();
filmsModel.films = films;
const commentsModel = new CommentsModel();
commentsModel.comments = comments;
const filterModel = new FilterModel();
const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const siteFooterElement = document.querySelector('.footer');
const footerStatisticsElement = siteFooterElement.querySelector('.footer__statistics');

const filmsBoardPresenter = new FilmsBoardPresenter(siteMainElement, filmsModel, commentsModel, filterModel);
const siteMenuComponent = new SiteMenuView();
const filterPresenter = new FilterPresenter(siteMenuComponent, filterModel, filmsModel);
const userRank = watchedFilmCountToUserRank(filmsModel.films.filter((film) => film.isWatched).length);
let statisticsComponent = null;
let currentMenuItem = null;

const handleSiteMenuClick = (menuItem) => {
  if (currentMenuItem === menuItem) {
    return;
  }

  switch (menuItem) {
    case MenuItem.STATISTICS:

      statisticsComponent = new StatisticsView(filmsModel.films, userRank);
      filmsBoardPresenter.destroy();
      filterPresenter.removeActiveClass();
      render(siteMainElement, statisticsComponent, RenderPosition.BEFOREEND);
      break;
    default:
      remove(statisticsComponent);
  }

  currentMenuItem = menuItem;
};

render(siteHeaderElement, new UserRankView(userRank), RenderPosition.BEFOREEND);
filterPresenter.init();
render(siteMainElement, siteMenuComponent, RenderPosition.BEFOREEND);
siteMenuComponent.setMenuClickHandler(handleSiteMenuClick);
render(footerStatisticsElement, new FilmsTotalCountView(FILM_COUNT), RenderPosition.BEFOREEND);

filmsBoardPresenter.init();
