import {
  FilterType
} from '../const';

export const filter = {
  [FilterType.ALL]: (films) => films.filter((film) => film !== null),
  [FilterType.FAVORITES]: (films) => films.filter(({userDetails: {favorite}}) => favorite),
  [FilterType.HISTORY]: (films) => films.filter(({userDetails: {watched}}) => watched),
  [FilterType.WATCHLIST]: (films) => films.filter(({userDetails: {watchlist}}) => watchlist),};
