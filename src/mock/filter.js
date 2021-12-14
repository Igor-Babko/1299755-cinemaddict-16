const filmToFilterMap = {
  WatchList: (films) => films
    .filter((film) => film.isWatchList).length,
  History: (films) => films
    .filter((film) => film.isWatched).length,
  Favorites: (films) => films
    .filter((film) => film.isFavorites).length,
};

export const generateFilter = (films) => Object.entries(filmToFilterMap).map(
  ([filterName, countfilms]) => ({
    name: filterName,
    count: countfilms(films),
  }),
);
