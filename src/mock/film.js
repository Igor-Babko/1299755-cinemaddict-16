import { nanoid } from 'nanoid';
import { getRandomInteger, getRandomItem, shuffle, getRandomItems, getRandomPastDate } from '../utils/common';
import { POSTERS, AGE_RATING, GENRES, DESCRIPTION, NAMES, COUNTRIES } from '../const.js';

const extractTitleFromPoster = (posterFileName) => {
  const title = posterFileName.split('.')[0].split('-').join(' ');

  return title.slice(0, 1).toUpperCase() + title.slice(1);
};

const generateTotalRating = () => `${getRandomInteger(0, 9)}.${getRandomInteger(0, 9)}`;

const generateDescription = () => {
  const descriptions = DESCRIPTION.split('. ');
  const descriptionCount = getRandomInteger(1, descriptions.length - 1);

  return `${shuffle(descriptions).slice(0, descriptionCount).join('. ')}.`;
};

const generateFilmInfo = () => {
  const poster = getRandomItem(POSTERS);
  const title = extractTitleFromPoster(poster);
  const alternativeTitle = extractTitleFromPoster(getRandomItem(POSTERS));
  const totalRating = generateTotalRating();
  const ageRating = getRandomItem(AGE_RATING);
  const releaseDate = getRandomPastDate(20, 365);
  const releaseCountry = getRandomItem(COUNTRIES);
  const runtime = getRandomInteger(50, 120);
  const genres = getRandomItems(GENRES);
  const description = generateDescription();
  const director = getRandomItem(NAMES);
  const writers = getRandomItems(NAMES);
  const actors = getRandomItems(NAMES);

  return {
    title,
    alternativeTitle,
    totalRating,
    poster,
    ageRating,
    director,
    writers,
    actors,
    releaseDate,
    releaseCountry,
    runtime,
    genres,
    description,
  };
};

const generateUserDetails = () => {
  const isWatchlist = Boolean(getRandomInteger(0, 1));
  const isWatched = Boolean(getRandomInteger(0, 1));
  const watchingDate = (isWatched === true) && getRandomPastDate(2, 365);
  const isFavorite = Boolean(getRandomInteger(0, 1));

  return {
    isWatchlist,
    isWatched,
    watchingDate,
    isFavorite,
  };
};

export const generateFilm = () => {
  const id = nanoid();
  const commentsId = Array.from({ length: getRandomInteger(0, 5) }, nanoid);
  const filmInfo = generateFilmInfo();
  const userDetails = generateUserDetails();

  return {
    id,
    commentsId,
    ...filmInfo,
    ...userDetails,
  };
};
