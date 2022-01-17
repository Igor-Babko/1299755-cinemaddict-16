import SiteMenuView from '../view/site-menu';
import { render, RenderPosition, replace, remove } from '../utils/render';
import { filter } from '../utils/filter';
import { FilterType, UpdateType, MenuItem } from '../const';

export class Filter {
  constructor(filterContainer, filterModel, moviesModel, movieListPresenter) {
    this.#filterContainer = filterContainer;
    this.#filterModel = filterModel;
    this.#moviesModel = moviesModel;
    this.#movieListPresenter = movieListPresenter;

    this.#filterComponent = null;

    this.#handleModelEvent = this.#handleModelEvent.bind(this);
    this.#handleMenuClick = this.#handleMenuClick.bind(this);

    this.#moviesModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  init() {
    const filters = this._getFilters();
    const prevFilterComponent = this.#filterComponent;

    this.#filterComponent = new SiteMenuView(filters, this.#filterModel.getFilter());
    this.#filterComponent.setMenuClickHandler(this.#handleMenuClick);

    if (prevFilterComponent === null) {
      render(this.#filterContainer, this.#filterComponent, RenderPosition.BEFOREEND);
      return;
    }

    replace(this.#filterComponent, prevFilterComponent);
    remove(prevFilterComponent);
  }

  #handleModelEvent() {
    this.init();
  }

  #handleMenuClick(menuItem) {
    switch (menuItem) {
      case MenuItem.ALL_MOVIES:
        this.#movieListPresenter.hideStatistics();
        this.#movieListPresenter.destroy();
        this.#filterModel.setFilter(UpdateType.MAJOR, menuItem);
        this.#movieListPresenter.init();
        break;
      case MenuItem.WATCHLIST:
        this.#movieListPresenter.hideStatistics();
        this.#movieListPresenter.destroy();
        this.#filterModel.setFilter(UpdateType.MAJOR, menuItem);
        this.#movieListPresenter.init();
        break;
      case MenuItem.HISTORY:
        this.#movieListPresenter.hideStatistics();
        this.#movieListPresenter.destroy();
        this.#filterModel.setFilter(UpdateType.MAJOR, menuItem);
        this.#movieListPresenter.init();
        break;
      case MenuItem.FAVORITES:
        this.#movieListPresenter.hideStatistics();
        this.#movieListPresenter.destroy();
        this.#filterModel.setFilter(UpdateType.MAJOR, menuItem);
        this.#movieListPresenter.init();
        break;
      case MenuItem.STATS:
        this.#movieListPresenter.destroy();
        this.#movieListPresenter.showStatistics();
        break;
    }
  }

  _getFilters() {
    const films = this.#moviesModel.getMovies();

    return [
      {
        type: FilterType.ALL,
        name: 'All Movies',
        count: filter[FilterType.ALL](films).length,
      },
      {
        type: FilterType.WATCHLIST,
        name: 'Watchlist',
        count: filter[FilterType.WATCHLIST](films).length,
      },
      {
        type: FilterType.HISTORY,
        name: 'History',
        count: filter[FilterType.HISTORY](films).length,
      },
      {
        type: FilterType.FAVORITES,
        name: 'Favorites',
        count: filter[FilterType.FAVORITES](films).length,
      },
    ];
  }
}

