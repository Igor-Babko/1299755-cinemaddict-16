const filmToFilterMap = {
  isWatchList: (films) => films
    .filter((film) => film.isWatchList).length,
  isWatched: (films) => films
    .filter((film) => film.isWatched).length,
  isFavorites: (films) => films
    .filter((film) => film.isFavorites).length,
};

export const generateFilter = (films) => Object.entries(filmToFilterMap).map(
  ([filterName, countfilms]) => ({
    name: filterName,
    count: countfilms(films),
  }),
);
