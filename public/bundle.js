/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/mock/film.js":
/*!**************************!*\
  !*** ./src/mock/film.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCard": () => (/* binding */ createCard)
/* harmony export */ });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);


let movieId = 0;
const descriptions = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Cras aliquet varius magna, non porta ligula feugiat eget.', 'Fusce tristique felis at fermentum pharetra.', 'Aliquam id orci ut lectus varius viverra.', 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.', 'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.', 'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.', 'Sed sed nisi sed augue convallis suscipit in sed felis.', 'Aliquam erat volutpat.', 'Nunc fermentum tortor ac porta dapibus.', 'In rutrum ac purus sit amet tempus.'];
const genres = ['Кинокомедия', 'Киноповесть', 'Кинофантастика', 'Комедийная драма', 'Комедия о возобновлении брака', 'Комедия по-итальянски', 'Детективный фильм', 'Детское кино'];
const filmsNames = ['Venom', 'Harry Potter', 'Titanic', 'Avengers', 'Never break down'];
const posters = ['./images/posters/made-for-each-other.png', './images/posters/popeye-meets-sinbad.png', './images/posters/sagebrush-trail.png', './images/posters/santa-claus-conquers-the-martians.png', './images/posters/the-dance-of-life.png', './images/posters/the-great-flamarion.png', './images/posters/the-man-with-the-golden-arm.png'];
const directors = ['Igor', 'Vasya', 'Sasha', 'Kolya', 'Nadya', 'Ivan'];
const countries = ['USA', 'Russia', 'China', 'India'];
const writers = ['Igor Babko', 'Vasya Vasikin', 'Sasha Grey', 'Kolya Naumov', 'Nadya Dorofeeva', 'Ivan Grozniy'];
const actors = ['Sara Conor', 'Jon Vasikin', 'Denis Grey', 'Olya Naumov', 'Zina Dorofeeva', 'Lubov Grozniy'];

const generateDescription = () => {
  const numberOfTexts = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(1, 5);
  let description = '';

  for (let i = 0; i < numberOfTexts; i++) {
    const randomIndex = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(0, descriptions.length - 1);
    description = `${description} ${descriptions[randomIndex]}`;
  }

  return description;
};

const getRandomData = elements => elements[(0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(0, elements.length - 1)];

const years = [1947, 1975, 1985, 1990, 1978, 1999, 2005]; // const generateComments = () => {
//   const numberOfComments = getRandomInteger(0, 5);
//   const createdComments = [];
//   for (let i = 0; i < numberOfComments; i++) {
//     let comment = '';
//     const comments = [
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//       'Cras aliquet varius magna, non porta ligula feugiat eget.',
//       'Fusce tristique felis at fermentum pharetra.',
//       'Aliquam id orci ut lectus varius viverra.',
//       'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
//       'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
//       'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
//       'Sed sed nisi sed augue convallis suscipit in sed felis.',
//       'Aliquam erat volutpat.',
//       'Nunc fermentum tortor ac porta dapibus.',
//       'In rutrum ac purus sit amet tempus.'
//     ];
//     for (let j = 0; j < numberOfComments; j++) {
//       const randomIndex = getRandomInteger(0, comments.length - 1);
//       comment = `${comment } ${comments[randomIndex]}`;
//     }
//     const reactions = [
//       '../public/images/emoji/smile.png',
//       '../public/images/emoji/angry.png',
//       '../public/images/emoji/puke.png',
//       '../public/images/emoji/sleeping.png'
//     ];
//     const reaction = reactions[getRandomInteger(0, 3)];
//     const autors = [
//       'Igor',
//       'Vasya',
//       'Sasha',
//       'Kolya',
//       'Nadya'
//     ];
//     const autor = autors[getRandomInteger(0, 4)];
//     const date = dayjs().format('YYYY/MM/DD hh:mm');
//     createdComments.push({
//       comment,
//       reaction,
//       autor,
//       date
//     });
//   }
//   return createdComments;
// };

const generateRating = () => {
  const rating = Math.random() * 10;
  return rating.toFixed(1);
};

const generateDuration = () => {
  const duration = `${(0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(1, 2)}h ${(0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(0, 59)}m`;
  return duration;
};

const generateStuff = staffList => {
  const createWritersList = [];
  staffList.forEach(element => {
    createWritersList.push(element);
  });
  return createWritersList;
};

const createCard = () => {
  const card = {
    id: movieId++,
    name: getRandomData(filmsNames),
    poster: getRandomData(posters),
    description: generateDescription(),
    //comments: [{},{},{}],
    year: getRandomData(years),
    genre: getRandomData(genres),
    rating: generateRating(),
    duration: generateDuration(),
    originalName: getRandomData(filmsNames),
    director: getRandomData(directors),
    writers: generateStuff(writers),
    actors: generateStuff(actors),
    country: getRandomData(countries),
    ageRating: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(0, 18),
    isWachList: Boolean((0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(0, 1)),
    isWached: Boolean((0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(0, 1)),
    isFavorites: Boolean((0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(0, 1))
  };
  return card;
};

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomInteger": () => (/* binding */ getRandomInteger)
/* harmony export */ });
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

/***/ }),

/***/ "./src/view/films-list-extra-view.js":
/*!*******************************************!*\
  !*** ./src/view/films-list-extra-view.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showTopExtraWrapper": () => (/* binding */ showTopExtraWrapper),
/* harmony export */   "showMostCommentedExtraWrapper": () => (/* binding */ showMostCommentedExtraWrapper)
/* harmony export */ });
const showTopExtraWrapper = () => `<section class="films-list films-list--extra">
  <h2 class="films-list__title">Top rated</h2>
  <div class="films-list__container film-list__container_top">
  </div>
</section>
`;
const showMostCommentedExtraWrapper = () => `<section class="films-list films-list--extra">
  <h2 class="films-list__title">Most commented</h2>
  <div class="films-list__container film-list__container_most_commented">
  </div>
</section>`;

/***/ }),

/***/ "./src/view/information-popup-view.js":
/*!********************************************!*\
  !*** ./src/view/information-popup-view.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPopupFilmDetails": () => (/* binding */ createPopupFilmDetails)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);

const createPopupFilmDetails = card => {
  const {
    name,
    poster,
    description,
    comments,
    year,
    genre,
    rating,
    duration,
    originalName,
    director,
    writers,
    actors,
    country,
    ageRating
  } = card;
  return `<section class="film-details">
  <form class="film-details__inner" action="" method="get">
    <div class="film-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>
      <div class="film-details__info-wrap">
        <div class="film-details__poster">
          <img class="film-details__poster-img" src=${poster} alt="">

          <p class="film-details__age">${ageRating}+</p>
        </div>

        <div class="film-details__info">
          <div class="film-details__info-head">
            <div class="film-details__title-wrap">
              <h3 class="film-details__title">${name}</h3>
              <p class="film-details__title-original">Original: ${originalName}</p>
            </div>

            <div class="film-details__rating">
              <p class="film-details__total-rating">${rating}</p>
            </div>
          </div>

          <table class="film-details__table">
            <tr class="film-details__row">
              <td class="film-details__term">${director}</td>
              <td class="film-details__cell">Anthony Mann</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">${writers}</td>
              <td class="film-details__cell">Anne Wigton, Heinz Herald, Richard Weil</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">${actors}</td>
              <td class="film-details__cell">Erich von Stroheim, Mary Beth Hughes, Dan Duryea</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Release Date</td>
              <td class="film-details__cell">${year.format('DD MMMM YYYY')}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Runtime</td>
              <td class="film-details__cell">${duration.format('«h m»')}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Country</td>
              <td class="film-details__cell">${country}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Genres</td>
              <td class="film-details__cell">
                <span class="film-details__genre">${genre}</span>
            </tr>
          </table>

          <p class="film-details__film-description">
           ${description}
          </p>
        </div>
      </div>

      <section class="film-details__controls">
        <button type="button" class="film-details__control-button film-details__control-button--watchlist" id="watchlist" name="watchlist">Add to watchlist</button>
        <button type="button" class="film-details__control-button film-details__control-button--active film-details__control-button--watched" id="watched" name="watched">Already watched</button>
        <button type="button" class="film-details__control-button film-details__control-button--favorite" id="favorite" name="favorite">Add to favorites</button>
      </section>
    </div>

    <div class="film-details__bottom-container">
      <section class="film-details__comments-wrap">
        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${comments}</span></h3>

        <ul class="film-details__comments-list">
          <li class="film-details__comment">
            <span class="film-details__comment-emoji">
              <img src="./images/emoji/smile.png" width="55" height="55" alt="emoji-smile">
            </span>
            <div>
              <p class="film-details__comment-text">Interesting setting and a good cast</p>
              <p class="film-details__comment-info">
                <span class="film-details__comment-author">Tim Macoveev</span>
                <span class="film-details__comment-day">2019/12/31 23:59</span>
                <button class="film-details__comment-delete">Delete</button>
              </p>
            </div>
          </li>
          <li class="film-details__comment">
            <span class="film-details__comment-emoji">
              <img src="./images/emoji/sleeping.png" width="55" height="55" alt="emoji-sleeping">
            </span>
            <div>
              <p class="film-details__comment-text">Booooooooooring</p>
              <p class="film-details__comment-info">
                <span class="film-details__comment-author">John Doe</span>
                <span class="film-details__comment-day">2 days ago</span>
                <button class="film-details__comment-delete">Delete</button>
              </p>
            </div>
          </li>
          <li class="film-details__comment">
            <span class="film-details__comment-emoji">
              <img src="./images/emoji/puke.png" width="55" height="55" alt="emoji-puke">
            </span>
            <div>
              <p class="film-details__comment-text">Very very old. Meh</p>
              <p class="film-details__comment-info">
                <span class="film-details__comment-author">John Doe</span>
                <span class="film-details__comment-day">2 days ago</span>
                <button class="film-details__comment-delete">Delete</button>
              </p>
            </div>
          </li>
          <li class="film-details__comment">
            <span class="film-details__comment-emoji">
              <img src="./images/emoji/angry.png" width="55" height="55" alt="emoji-angry">
            </span>
            <div>
              <p class="film-details__comment-text">Almost two hours? Seriously?</p>
              <p class="film-details__comment-info">
                <span class="film-details__comment-author">John Doe</span>
                <span class="film-details__comment-day">Today</span>
                <button class="film-details__comment-delete">Delete</button>
              </p>
            </div>
          </li>
        </ul>

        <div class="film-details__new-comment">
          <div class="film-details__add-emoji-label"></div>

          <label class="film-details__comment-label">
            <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
          </label>

          <div class="film-details__emoji-list">
            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
            <label class="film-details__emoji-label" for="emoji-smile">
              <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
            <label class="film-details__emoji-label" for="emoji-sleeping">
              <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
            <label class="film-details__emoji-label" for="emoji-puke">
              <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
            <label class="film-details__emoji-label" for="emoji-angry">
              <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
            </label>
          </div>
        </div>
      </section>
    </div>
  </form>
</section>`;
};

/***/ }),

/***/ "./src/view/menu-view.js":
/*!*******************************!*\
  !*** ./src/view/menu-view.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sortFilms": () => (/* binding */ sortFilms),
/* harmony export */   "showStatistic": () => (/* binding */ showStatistic),
/* harmony export */   "showNav": () => (/* binding */ showNav),
/* harmony export */   "createFilmsWrapper": () => (/* binding */ createFilmsWrapper),
/* harmony export */   "showFooterStatistic": () => (/* binding */ showFooterStatistic)
/* harmony export */ });
const sortFilms = () => `<ul class="sort">
  <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
  <li><a href="#" class="sort__button">Sort by date</a></li>
  <li><a href="#" class="sort__button">Sort by rating</a></li>
</ul>`;
const showStatistic = filter => {
  const {
    watchedFilms,
    hours,
    minutes,
    genre
  } = filter;
  return `<section class="statistic">

  <form action="https://echo.htmlacademy.ru/" method="get" class="statistic__filters">
    <p class="statistic__filters-description">Show stats:</p>

    <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-all-time" value="all-time" checked>
    <label for="statistic-all-time" class="statistic__filters-label">All time</label>

    <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-today" value="today">
    <label for="statistic-today" class="statistic__filters-label">Today</label>

    <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-week" value="week">
    <label for="statistic-week" class="statistic__filters-label">Week</label>

    <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-month" value="month">
    <label for="statistic-month" class="statistic__filters-label">Month</label>

    <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-year" value="year">
    <label for="statistic-year" class="statistic__filters-label">Year</label>
  </form>

  <ul class="statistic__text-list">
    <li class="statistic__text-item">
      <h4 class="statistic__item-title">You watched</h4>
      <p class="statistic__item-text">${watchedFilms} <span class="statistic__item-description">movies</span></p>
    </li>
    <li class="statistic__text-item">
      <h4 class="statistic__item-title">Total duration</h4>
      <p class="statistic__item-text">${hours} <span class="statistic__item-description">h</span> ${minutes} <span class="statistic__item-description">m</span></p>
    </li>
    <li class="statistic__text-item">
      <h4 class="statistic__item-title">Top genre</h4>
      <p class="statistic__item-text">${genre}</p>
    </li>
  </ul>

  <!-- Пример диаграммы -->
  <img src="../../public/images/cinemaddict-stats-markup.png" alt="Пример диаграммы">

  <div class="statistic__chart-wrap">
    <canvas class="statistic__chart" width="1000"></canvas>
  </div>

</section>`;
};
const showNav = naviData => {
  const {
    historyFilms,
    favoritesFilms,
    watchlist
  } = naviData;
  return ` <nav class="main-navigation">
  <div class="main-navigation__items">
    <a href="#all" class="main-navigation__item">All movies</a>
    <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${watchlist}</span></a>
    <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${historyFilms}</span></a>
    <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${favoritesFilms}</span></a>
  </div>
  <a href="#stats" class="main-navigation__additional main-navigation__additional--active">Stats</a>
</nav>`;
};
const createFilmsWrapper = () => `<section class="films">
<section class="films-list">
  <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>

  <div class="films-list__container"></div>
  <button class="films-list__show-more">Show more</button>
  </section>
  </section>`;
const showFooterStatistic = count => {
  const moviesCount = count;
  return `<section class="footer__statistics">
<p>${moviesCount} movies inside</p>
</section>`;
};

/***/ }),

/***/ "./src/view/movie-card-view.js":
/*!*************************************!*\
  !*** ./src/view/movie-card-view.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMovieCard": () => (/* binding */ createMovieCard)
/* harmony export */ });
const createMovieCard = card => {
  const {
    name,
    poster,
    description,
    comments,
    year,
    genre,
    rating,
    duration
  } = card;
  return `<article class="film-card">
  <a class="film-card__link">
    <h3 class="film-card__title">${name}</h3>
    <p class="film-card__rating">${rating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${year}</span>
      <span class="film-card__duration">${duration}</span>
      <span class="film-card__genre">${genre}</span>
    </p>
    <img src=${poster} alt class="film-card__poster">
    <p class="film-card__description">${description}</p>
    <span class="film-card__comments">${comments.length} comments</span>
  </a>
  <div class="film-card__controls">
    <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
    <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
    <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
  </div>
</article>`;
};

/***/ }),

/***/ "./src/view/rank-view.js":
/*!*******************************!*\
  !*** ./src/view/rank-view.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showUserRank": () => (/* binding */ showUserRank)
/* harmony export */ });
const showUserRank = () => `<section class="header__profile profile">
  <p class="profile__rating">Movie Buff</p>
  <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
</section>
</p>`;

/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_films_list_extra_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/films-list-extra-view.js */ "./src/view/films-list-extra-view.js");
/* harmony import */ var _view_information_popup_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/information-popup-view.js */ "./src/view/information-popup-view.js");
/* harmony import */ var _view_menu_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/menu-view.js */ "./src/view/menu-view.js");
/* harmony import */ var _view_movie_card_view_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/movie-card-view.js */ "./src/view/movie-card-view.js");
/* harmony import */ var _view_rank_view_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/rank-view.js */ "./src/view/rank-view.js");
/* harmony import */ var _src_mock_film_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/mock/film.js */ "./src/mock/film.js");






const mockCount = 20;
const mocks = [];
const cardCount = 5;
const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend'
};

const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');
const siteFooterElement = document.querySelector('.footer');
renderTemplate(siteHeaderElement, (0,_view_rank_view_js__WEBPACK_IMPORTED_MODULE_4__.showUserRank)(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, (0,_view_menu_view_js__WEBPACK_IMPORTED_MODULE_2__.showNav)(), RenderPosition.AFTERBEGIN);
renderTemplate(siteMainElement, (0,_view_menu_view_js__WEBPACK_IMPORTED_MODULE_2__.sortFilms)(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, (0,_view_menu_view_js__WEBPACK_IMPORTED_MODULE_2__.createFilmsWrapper)(), RenderPosition.BEFOREEND);
const filmsWrapper = siteMainElement.querySelector('.films');
const filmsContainer = filmsWrapper.querySelector('.films-list__container');

for (let i = 0; i < mockCount; i++) {
  mocks.push((0,_src_mock_film_js__WEBPACK_IMPORTED_MODULE_5__.createCard)());
}

for (let i = 0; i < cardCount; i++) {
  renderTemplate(filmsContainer, (0,_view_movie_card_view_js__WEBPACK_IMPORTED_MODULE_3__.createMovieCard)(mocks[i]), RenderPosition.BEFOREEND);
}

renderTemplate(filmsWrapper, (0,_view_films_list_extra_view_js__WEBPACK_IMPORTED_MODULE_0__.showTopExtraWrapper)(), RenderPosition.BEFOREEND);
renderTemplate(filmsWrapper, (0,_view_films_list_extra_view_js__WEBPACK_IMPORTED_MODULE_0__.showMostCommentedExtraWrapper)(), RenderPosition.BEFOREEND);
const extraTopWrapper = filmsWrapper.querySelector('.film-list__container_top');
const extraWrapperMostCommented = filmsWrapper.querySelector('.film-list__container_most_commented');
renderTemplate(extraTopWrapper, (0,_view_movie_card_view_js__WEBPACK_IMPORTED_MODULE_3__.createMovieCard)(mocks[0]), RenderPosition.BEFOREEND);
renderTemplate(extraTopWrapper, (0,_view_movie_card_view_js__WEBPACK_IMPORTED_MODULE_3__.createMovieCard)(mocks[1]), RenderPosition.BEFOREEND);
renderTemplate(extraWrapperMostCommented, (0,_view_movie_card_view_js__WEBPACK_IMPORTED_MODULE_3__.createMovieCard)(mocks[2]), RenderPosition.BEFOREEND);
renderTemplate(extraWrapperMostCommented, (0,_view_movie_card_view_js__WEBPACK_IMPORTED_MODULE_3__.createMovieCard)(mocks[3]), RenderPosition.BEFOREEND);
renderTemplate(siteFooterElement, (0,_view_menu_view_js__WEBPACK_IMPORTED_MODULE_2__.showFooterStatistic)(), RenderPosition.BEFOREEND); // renderTemplate(siteFooterElement, createPopupFilmDetails(), RenderPosition.AFTEREND);
// renderTemplate(siteFooterElement, showStatistic(), RenderPosition.AFTEREND);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map