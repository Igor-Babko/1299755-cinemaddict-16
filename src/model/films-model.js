import { UpdateType } from '../const.js';
import AbstractObservable from '../utils/abstract-observable.js';

export default class FilmsModel extends AbstractObservable {
  #apiService = null;
  #films = [];

  constructor(apiService) {
    super();
    this.#apiService = apiService;
  }

  set films(films) {
    this.#films = [...films];
  }

  get films() {
    return this.#films;
  }

  init = async () => {
    try {
      const films = await this.#apiService.films;
      this.#films = films.map(this.#adaptToClient);
    } catch (err) {
      this.#films = [];
    }

    this._notify(UpdateType.INIT);
  };

  addComment = (type, filmId, comments) => {
    const updatedFilm = {
      ...this.films.find(({id}) => id === filmId),
      comments: comments
    };

    this._notify(type, updatedFilm);
  }

  deleteComment = (type, id) => {
    const film = this.films.find(({comments}) => comments.includes(id));
    const updatedFilm = {
      ...film,
      comments: film.comments.filter((item) => item !== id)
    };

    this._notify(type, updatedFilm);
  }

  updateFilm = async (updateType, update) => {
    const index = this.#films.findIndex((film) => film.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t update unexisting film');
    }

    try {
      const response = await this.#apiService.updateFilm(update);
      const updatedFilm = this.#adaptToClient(response);
      this.#films = [
        ...this.#films.slice(0, index), updatedFilm, ...this.#films.slice(index + 1)
      ];

      this._notify(updateType, update);
    } catch (err) {
      throw new Error('Can\'t update film');
    }
  };

  #adaptToClient = ({
    id,
    comments: commentsId,
    film_info: {
      actors,
      age_rating: ageRating,
      alternative_title: alternativeTitle,
      description,
      director,
      genre: genres,
      poster,
      release: {
        date: releaseDate,
        release_country: releaseCountry,
      },
      runtime,
      title,
      total_rating: totalRating,
      writers,
    },
    user_details: {
      already_watched: isWatched,
      favorite: isFavorite,
      watching_date: watchingDate,
      watchlist: isWatchlist,
    },
  }) => ({
    id,
    commentsId,
    actors,
    ageRating,
    alternativeTitle,
    description,
    director,
    genres,
    poster,
    releaseDate,
    releaseCountry,
    runtime,
    title,
    totalRating,
    writers,
    isWatched,
    isFavorite,
    watchingDate,
    isWatchlist,
  });
}
