import { formatRuntime } from './film.js';

export const getFilmsDuration = (films) => formatRuntime(films.reduce((total, currentFilm) => {
  total += currentFilm.runtime;
  return total;
}, 0));

export const genresToCountMap = (films) => Object
  .entries(films.reduce((acc, currentFilm) => {
    currentFilm.genres.forEach((genre) => {
      if (genre in acc) {
        acc[genre] += 1;
      } else {
        acc[genre] = 1;
      }
    });

    return acc;
  }, {}))
  .sort(([, currentGenreRepeating], [, nextGenreRepeating]) => nextGenreRepeating - currentGenreRepeating)
  .map(([genre, count]) => ({ genre, count }));

export const getTopGenre = (films) => genresToCountMap(films)[0].genre;
