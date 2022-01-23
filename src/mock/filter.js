const filmToFilterMap = {
  all: (films) => films.length,
  watchList: (films) => films.filter(({ isWatchlist }) => isWatchlist === true).length,
  history: (films) => films.filter(({ isWatched }) => isWatched === true).length,
  favorites: (films) => films.filter(({ isFavorite }) => isFavorite === true).length,
};

export const generateFilter = (films) => Object.entries(filmToFilterMap).map(
  ([filterName, countFilms], index) => ({
    name: filterName,
    count: countFilms(films),
    isChecked: index === 0,
  })
);
