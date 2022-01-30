const Method = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};

export default class ApiService {
  #endPoint = null;
  #authorization = null;

  constructor(endPoint, authorization) {
    this.#endPoint = endPoint;
    this.#authorization = authorization;
  }

  get films() {
    return this.#load({ url: 'movies' })
      .then(ApiService.parseResponse);
  }

  getComments(filmId) {
    return this.#load({ url: `comments/${filmId}` })
      .then(ApiService.parseResponse);
  }

  // addComment(filmId, comment) {
  //   return this.#load({
  //     url: `comments/${filmId}`,
  //     method: Method.POST,
  //     body: JSON.stringify(comment),
  //     headers: new Headers({ 'Content-Type': 'application/json' }),
  //   }).then(ApiService.parseResponse);
  // }
  async addComment(filmId, comment) {
     const response = await fetch('https://16.ecmascript.pages.academy/cinemaddictqeqw');
    return response;
  }

  deleteComment(commentId) {
    return this.#load({
      url: `comments/${commentId}`,
      method: Method.DELETE,
    });
  }

  updateFilm = async (film) => {
    const response = await this.#load({
      url: `movies/${film.id}`,
      method: Method.PUT,
      body: JSON.stringify(this.#adaptToServer(film)),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });

    const parsedResponse = await ApiService.parseResponse(response);

    return parsedResponse;
  };

  #load = async ({
    url,
    method = Method.GET,
    body = null,
    headers = new Headers(),
  }) => {
    headers.append('Authorization', this.#authorization);

    const response = await fetch(
      `${this.#endPoint}/${url}`,
      { method, body, headers },
    );

    try {
      ApiService.checkStatus(response);
      return response;
    } catch (err) {
      ApiService.catchError(err);
    }
  };

  #adaptToServer = ({
    id,
    commentsId: comments,
    title,
    alternativeTitle,
    totalRating,
    poster,
    ageRating,
    director,
    writers,
    actors,
    releaseDate: date,
    releaseCountry,
    runtime,
    genres: genre,
    description,
    isWatchlist: watchlist,
    isWatched,
    watchingDate,
    isFavorite: favorite,
  }) => ({
    id,
    comments,
    'film_info': {
      actors,
      'age_rating': ageRating,
      'alternative_title': alternativeTitle,
      description,
      director,
      genre,
      poster,
      release: {
        date,
        'release_country': releaseCountry,
      },
      runtime,
      title,
      'total_rating': totalRating,
      writers,
    },
    'user_details': {
      'already_watched': isWatched,
      favorite,
      'watching_date': watchingDate,
      watchlist,
    },
  });

  static parseResponse = (response) => response.json();

  static checkStatus = (response) => {
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
  };

  static catchError = (err) => {
    throw err;
  };
}
