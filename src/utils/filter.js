import { FilterType } from '../const.js';

export const filter = {
  [FilterType.ALL]: (films) => films,
  [FilterType.WATCHLIST]: (films) => films.filter(({ isWatchlist }) => isWatchlist === true),
  [FilterType.HISTORY]: (films) => films.filter(({ isWatched }) => isWatched === true),
  [FilterType.FAVORITES]: (films) => films.filter(({ isFavorite }) => isFavorite === true),
};
