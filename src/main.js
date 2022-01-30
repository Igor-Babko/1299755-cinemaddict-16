import UserRankView from './view/user-rank-view.js';
import FilmsTotalCountView from './view/films-total-count-view.js';
import { RenderPosition, render, remove } from './utils/render.js';
import FilmsBoardPresenter from './presenter/films-board-presenter.js';
import FilmsModel from './model/films-model.js';
import FilterModel from './model/filter-model.js';
import FilterPresenter from './presenter/filter-presenter.js';
import { AUTHORIZATION, END_POINT, MenuItem } from './const.js';
import SiteMenuView from './view/site-menu-view.js';
import StatisticsView from './view/statistics-view.js';
import { watchedFilmCountToUserRank } from './utils/common.js';
import ApiService from './api-service.js';
import CommentsModel from './model/comments-model';

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');

const apiService = new ApiService(END_POINT, AUTHORIZATION);

const filmsModel = new FilmsModel(new ApiService(END_POINT, AUTHORIZATION));
const commentsModel = new CommentsModel(apiService, filmsModel);
const filterModel = new FilterModel();


const siteFooterElement = document.querySelector('.footer');
const footerStatisticsElement = siteFooterElement.querySelector('.footer__statistics');

const filmsBoardPresenter = new FilmsBoardPresenter(siteMainElement, filmsModel, commentsModel, filterModel);
const siteMenuComponent = new SiteMenuView();
const filterPresenter = new FilterPresenter(siteMenuComponent, filterModel, filmsModel);
let userRank = null;
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

filterPresenter.init();
render(siteMainElement, siteMenuComponent, RenderPosition.BEFOREEND);

filmsBoardPresenter.init();
filmsModel.init().finally(() => {
  userRank = watchedFilmCountToUserRank(filmsModel.films.filter((film) => film.isWatched).length);
  render(siteHeaderElement, new UserRankView(userRank), RenderPosition.BEFOREEND);
  siteMenuComponent.setMenuClickHandler(handleSiteMenuClick);
  render(footerStatisticsElement, new FilmsTotalCountView(filmsModel.films.length), RenderPosition.BEFOREEND);
});
