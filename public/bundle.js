/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/mock/film.js":
/*!**************************!*\
  !*** ./src/mock/film.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCard": () => (/* binding */ createCard)
/* harmony export */ });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");

let movieId = 0;
const descriptions = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Cras aliquet varius magna, non porta ligula feugiat eget.', 'Fusce tristique felis at fermentum pharetra.', 'Aliquam id orci ut lectus varius viverra.', 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.', 'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.', 'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.', 'Sed sed nisi sed augue convallis suscipit in sed felis.', 'Aliquam erat volutpat.', 'Nunc fermentum tortor ac porta dapibus.', 'In rutrum ac purus sit amet tempus.'];
const genres = ['Кинокомедия', 'Киноповесть', 'Кинофантастика', 'Комедийная драма', 'Комедия о возобновлении брака', 'Комедия по-итальянски', 'Детективный фильм', 'Детское кино'];

const generateGenre = genr => {
  const countGenre = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(1, 3);
  let readyGenres = '';

  for (let i = 0; countGenre > i; i++) {
    readyGenres = `${readyGenres} ${genr[(0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(0, 7)]}`;
  }

  return readyGenres;
};

const filmsNames = ['Venom', 'Harry Potter', 'Titanic', 'Avengers', 'Never break down'];
const posters = ['./images/posters/made-for-each-other.png', './images/posters/popeye-meets-sinbad.png', './images/posters/sagebrush-trail.jpg', './images/posters/santa-claus-conquers-the-martians.jpg', './images/posters/the-dance-of-life.jpg', './images/posters/the-great-flamarion.jpg', './images/posters/the-man-with-the-golden-arm.jpg'];
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

const years = ['01 April 1995', '02 March 1999', '03 June 2001', '04 Jule 2003', '07 September 1995', '15 October 2001', '23 April 2021']; // const generateComments = () => {
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
    genre: generateGenre(genres),
    rating: generateRating(),
    duration: generateDuration(),
    originalName: getRandomData(filmsNames),
    director: getRandomData(directors),
    writers: generateStuff(writers),
    actors: generateStuff(actors),
    country: getRandomData(countries),
    ageRating: (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(0, 18),
    isWatchList: Boolean((0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(0, 1)),
    isWatched: Boolean((0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(0, 1)),
    isFavorites: Boolean((0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInteger)(0, 1))
  };
  return card;
};

/***/ }),

/***/ "./src/mock/filter.js":
/*!****************************!*\
  !*** ./src/mock/filter.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateFilter": () => (/* binding */ generateFilter)
/* harmony export */ });
const filmToFilterMap = {
  WatchList: films => films.filter(film => film.isWatchList).length,
  History: films => films.filter(film => film.isWatched).length,
  Favorites: films => films.filter(film => film.isFavorites).length
};
const generateFilter = films => Object.entries(filmToFilterMap).map(([filterName, countfilms]) => ({
  name: filterName,
  count: countfilms(films)
}));

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderPosition": () => (/* binding */ RenderPosition),
/* harmony export */   "renderTemplate": () => (/* binding */ renderTemplate),
/* harmony export */   "renderElement": () => (/* binding */ renderElement),
/* harmony export */   "createElement": () => (/* binding */ createElement)
/* harmony export */ });
const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend'
};
const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};
const renderElement = (container, element, place) => {
  switch (place) {
    case RenderPosition.BEFOREBEGIN:
      container.before(element);
      break;

    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;

    case RenderPosition.BEFOREEND:
      container.append(element);
      break;

    case RenderPosition.AFTEREND:
      container.after(element);
      break;
  }
};
const createElement = template => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstChild;
};

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/view/films-list.js":
/*!********************************!*\
  !*** ./src/view/films-list.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilmsListView": () => (/* binding */ FilmsListView)
/* harmony export */ });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render.js */ "./src/render.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }



const createFilmsListWrapper = () => '<div class="films-list__container"></div>';

var _element = /*#__PURE__*/new WeakMap();

class FilmsListView {
  constructor() {
    _classPrivateFieldInitSpec(this, _element, {
      writable: true,
      value: null
    });
  }

  get element() {
    if (!_classPrivateFieldGet(this, _element)) {
      _classPrivateFieldSet(this, _element, (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.template));
    }

    return _classPrivateFieldGet(this, _element);
  }

  get template() {
    return createFilmsListWrapper();
  }

  removeElement() {
    _classPrivateFieldSet(this, _element, null);
  }

}

/***/ }),

/***/ "./src/view/films-wrapper.js":
/*!***********************************!*\
  !*** ./src/view/films-wrapper.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilmsWrapperView": () => (/* binding */ FilmsWrapperView)
/* harmony export */ });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render.js */ "./src/render.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }



const createFilmsWrapper = () => `<section class="films">
<section class="films-list">
  <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>

  <div class="films-list__container"></div>
  </section>
  </section>`;

var _element = /*#__PURE__*/new WeakMap();

class FilmsWrapperView {
  constructor() {
    _classPrivateFieldInitSpec(this, _element, {
      writable: true,
      value: null
    });
  }

  get element() {
    if (!_classPrivateFieldGet(this, _element)) {
      _classPrivateFieldSet(this, _element, (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.template));
    }

    return _classPrivateFieldGet(this, _element);
  }

  get template() {
    return createFilmsWrapper();
  }

  removeElement() {
    _classPrivateFieldSet(this, _element, null);
  }

}

/***/ }),

/***/ "./src/view/footer-statistic.js":
/*!**************************************!*\
  !*** ./src/view/footer-statistic.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterStatisticView": () => (/* binding */ FooterStatisticView)
/* harmony export */ });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render.js */ "./src/render.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }



const showFooterStatistic = moviesCount => {
  const {
    movies
  } = moviesCount;
  return `<section class="footer__statistics">
<p>${movies} movies inside</p>
</section>`;
};

var _element = /*#__PURE__*/new WeakMap();

var _count = /*#__PURE__*/new WeakMap();

class FooterStatisticView {
  constructor(count) {
    _classPrivateFieldInitSpec(this, _element, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _count, {
      writable: true,
      value: null
    });

    _classPrivateFieldSet(this, _count, count);
  }

  get element() {
    if (!_classPrivateFieldGet(this, _element)) {
      _classPrivateFieldSet(this, _element, (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.template));
    }

    return _classPrivateFieldGet(this, _element);
  }

  get template() {
    return showFooterStatistic(_classPrivateFieldGet(this, _count));
  }

  removeElement() {
    _classPrivateFieldSet(this, _element, null);
  }

}

/***/ }),

/***/ "./src/view/information-popup-view.js":
/*!********************************************!*\
  !*** ./src/view/information-popup-view.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPopupFilmDetails": () => (/* binding */ createPopupFilmDetails)
/* harmony export */ });
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
              <td class="film-details__term">Director</td>
              <td class="film-details__cell">${director}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Writers</td>
              <td class="film-details__cell">${writers}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Actors</td>
              <td class="film-details__cell">${actors}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Release Date</td>
              <td class="film-details__cell">${year}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Runtime</td>
              <td class="film-details__cell">${duration}</td>
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sortFilms": () => (/* binding */ sortFilms),
/* harmony export */   "createFilterTemplate": () => (/* binding */ createFilterTemplate),
/* harmony export */   "showStatistic": () => (/* binding */ showStatistic),
/* harmony export */   "createFilmsWrapper": () => (/* binding */ createFilmsWrapper),
/* harmony export */   "showFooterStatistic": () => (/* binding */ showFooterStatistic)
/* harmony export */ });
const sortFilms = () => `<ul class="sort">
  <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
  <li><a href="#" class="sort__button">Sort by date</a></li>
  <li><a href="#" class="sort__button">Sort by rating</a></li>
</ul>`;

const createFilterItemTemplate = filter => {
  const {
    name,
    count
  } = filter;
  return `<a href="#isWachList" class="main-navigation__item">${name} <span class="main-navigation__item-count">${count}</span></a>`;
};

const createFilterTemplate = filterItems => {
  const filterItemsTemplate = filterItems.map((filter, index) => createFilterItemTemplate(filter, index === 0)).join('');
  return `<nav class="main-navigation">
  <div class="main-navigation__items">
    <a href="#all" class="main-navigation__item">All movies</a>
    ${filterItemsTemplate};
  </div>
  <a href="#stats" class="main-navigation__additional main-navigation__additional--active">Stats</a>
</nav>`;
};
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
const createFilmsWrapper = () => `<section class="films">
<section class="films-list">
  <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>

  <div class="films-list__container"></div>
  <button class="films-list__show-more">Show more</button>
  </section>
  </section>`;
const showFooterStatistic = () => {
  const moviesCount = 20;
  return `<section class="footer__statistics">
<p>${moviesCount} movies inside</p>
</section>`;
};

/***/ }),

/***/ "./src/view/most-commented-extra-wrapper.js":
/*!**************************************************!*\
  !*** ./src/view/most-commented-extra-wrapper.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MostCommentedExtraWrapperView": () => (/* binding */ MostCommentedExtraWrapperView)
/* harmony export */ });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render.js */ "./src/render.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }



const showMostCommentedExtraWrapper = () => `<section class="films-list films-list--extra">
  <h2 class="films-list__title">Most commented</h2>
  <div class="films-list__container film-list__container_most_commented">
  </div>
</section>`;

var _element = /*#__PURE__*/new WeakMap();

class MostCommentedExtraWrapperView {
  constructor() {
    _classPrivateFieldInitSpec(this, _element, {
      writable: true,
      value: null
    });
  }

  get element() {
    if (!_classPrivateFieldGet(this, _element)) {
      _classPrivateFieldSet(this, _element, (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.template));
    }

    return _classPrivateFieldGet(this, _element);
  }

  get template() {
    return showMostCommentedExtraWrapper();
  }

  removeElement() {
    _classPrivateFieldSet(this, _element, null);
  }

}

/***/ }),

/***/ "./src/view/movie-card-view.js":
/*!*************************************!*\
  !*** ./src/view/movie-card-view.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMovieCard": () => (/* binding */ createMovieCard)
/* harmony export */ });
const createMovieCard = card => {
  const {
    name,
    poster,
    description,
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
    <span class="film-card__comments">0 comments</span>
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

/***/ "./src/view/show-more-button.js":
/*!**************************************!*\
  !*** ./src/view/show-more-button.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowMoreButtonView": () => (/* binding */ ShowMoreButtonView)
/* harmony export */ });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render.js */ "./src/render.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }



const createShowMoreButton = () => '<button class="films-list__show-more">Show more</button>';

var _element = /*#__PURE__*/new WeakMap();

class ShowMoreButtonView {
  constructor() {
    _classPrivateFieldInitSpec(this, _element, {
      writable: true,
      value: null
    });
  }

  get element() {
    if (!_classPrivateFieldGet(this, _element)) {
      _classPrivateFieldSet(this, _element, (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.template));
    }

    return _classPrivateFieldGet(this, _element);
  }

  get template() {
    return createShowMoreButton();
  }

  removeElement() {
    _classPrivateFieldSet(this, _element, null);
  }

}

/***/ }),

/***/ "./src/view/sortFilms.js":
/*!*******************************!*\
  !*** ./src/view/sortFilms.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortFilmsView": () => (/* binding */ SortFilmsView)
/* harmony export */ });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render.js */ "./src/render.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }



const createSortFilmsTemplate = () => `<ul class="sort">
  <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
  <li><a href="#" class="sort__button">Sort by date</a></li>
  <li><a href="#" class="sort__button">Sort by rating</a></li>
</ul>`;

var _element = /*#__PURE__*/new WeakMap();

class SortFilmsView {
  constructor() {
    _classPrivateFieldInitSpec(this, _element, {
      writable: true,
      value: null
    });
  }

  get element() {
    if (!_classPrivateFieldGet(this, _element)) {
      _classPrivateFieldSet(this, _element, (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.template));
    }

    return _classPrivateFieldGet(this, _element);
  }

  get template() {
    return createSortFilmsTemplate();
  }

  removeElement() {
    _classPrivateFieldSet(this, _element, null);
  }

}

/***/ }),

/***/ "./src/view/top-extra-wrapper.js":
/*!***************************************!*\
  !*** ./src/view/top-extra-wrapper.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopExtraWrapperView": () => (/* binding */ TopExtraWrapperView)
/* harmony export */ });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render.js */ "./src/render.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }



const showTopExtraWrapper = () => `<section class="films-list films-list--extra">
  <h2 class="films-list__title">Top rated</h2>
  <div class="films-list__container film-list__container_top">
  </div>
</section>
`;

var _element = /*#__PURE__*/new WeakMap();

class TopExtraWrapperView {
  constructor() {
    _classPrivateFieldInitSpec(this, _element, {
      writable: true,
      value: null
    });
  }

  get element() {
    if (!_classPrivateFieldGet(this, _element)) {
      _classPrivateFieldSet(this, _element, (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.template));
    }

    return _classPrivateFieldGet(this, _element);
  }

  get template() {
    return showTopExtraWrapper();
  }

  removeElement() {
    _classPrivateFieldSet(this, _element, null);
  }

}

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_top_extra_wrapper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/top-extra-wrapper.js */ "./src/view/top-extra-wrapper.js");
/* harmony import */ var _view_information_popup_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/information-popup-view.js */ "./src/view/information-popup-view.js");
/* harmony import */ var _view_menu_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/menu-view.js */ "./src/view/menu-view.js");
/* harmony import */ var _view_movie_card_view_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/movie-card-view.js */ "./src/view/movie-card-view.js");
/* harmony import */ var _view_rank_view_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/rank-view.js */ "./src/view/rank-view.js");
/* harmony import */ var _src_mock_film_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/mock/film.js */ "./src/mock/film.js");
/* harmony import */ var _mock_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mock/filter.js */ "./src/mock/filter.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./render.js */ "./src/render.js");
/* harmony import */ var _view_sortFilms_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/sortFilms.js */ "./src/view/sortFilms.js");
/* harmony import */ var _view_films_wrapper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view/films-wrapper.js */ "./src/view/films-wrapper.js");
/* harmony import */ var _view_footer_statistic_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view/footer-statistic.js */ "./src/view/footer-statistic.js");
/* harmony import */ var _view_most_commented_extra_wrapper_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view/most-commented-extra-wrapper.js */ "./src/view/most-commented-extra-wrapper.js");
/* harmony import */ var _view_show_more_button_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view/show-more-button.js */ "./src/view/show-more-button.js");
/* harmony import */ var _src_view_films_list_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../src/view/films-list.js */ "./src/view/films-list.js");















const fiveFilms = 5;
const mockCount = 20;
const mocks = [];
const cardCount = 5;
let openedFilms = 5;
const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');
const siteFooterElement = document.querySelector('.footer');

for (let i = 0; i < mockCount; i++) {
  mocks.push((0,_src_mock_film_js__WEBPACK_IMPORTED_MODULE_5__.createCard)());
}

const filters = (0,_mock_filter_js__WEBPACK_IMPORTED_MODULE_6__.generateFilter)(mocks);
(0,_render_js__WEBPACK_IMPORTED_MODULE_7__.renderTemplate)(siteHeaderElement, (0,_view_rank_view_js__WEBPACK_IMPORTED_MODULE_4__.showUserRank)(), _render_js__WEBPACK_IMPORTED_MODULE_7__.RenderPosition.BEFOREEND);
(0,_render_js__WEBPACK_IMPORTED_MODULE_7__.renderTemplate)(siteMainElement, (0,_view_menu_view_js__WEBPACK_IMPORTED_MODULE_2__.createFilterTemplate)(filters), _render_js__WEBPACK_IMPORTED_MODULE_7__.RenderPosition.AFTERBEGIN);
(0,_render_js__WEBPACK_IMPORTED_MODULE_7__.renderElement)(siteMainElement, new _view_sortFilms_js__WEBPACK_IMPORTED_MODULE_8__.SortFilmsView().element, _render_js__WEBPACK_IMPORTED_MODULE_7__.RenderPosition.BEFOREEND);
const filmsWrapperComponent = new _view_films_wrapper_js__WEBPACK_IMPORTED_MODULE_9__.FilmsWrapperView();
(0,_render_js__WEBPACK_IMPORTED_MODULE_7__.renderElement)(siteMainElement, filmsWrapperComponent.element, _render_js__WEBPACK_IMPORTED_MODULE_7__.RenderPosition.BEFOREEND);
const filmsWrapper = siteMainElement.querySelector('.films');
const filmsContainer = filmsWrapper.querySelector('.films-list');
const filmsListComponent = new _src_view_films_list_js__WEBPACK_IMPORTED_MODULE_13__.FilmsListView();
(0,_render_js__WEBPACK_IMPORTED_MODULE_7__.renderElement)(filmsContainer, filmsListComponent.element, _render_js__WEBPACK_IMPORTED_MODULE_7__.RenderPosition.BEFOREEND);
(0,_render_js__WEBPACK_IMPORTED_MODULE_7__.renderElement)(filmsContainer, new _view_show_more_button_js__WEBPACK_IMPORTED_MODULE_12__.ShowMoreButtonView().element, _render_js__WEBPACK_IMPORTED_MODULE_7__.RenderPosition.AFTEREND);
(0,_render_js__WEBPACK_IMPORTED_MODULE_7__.renderElement)(filmsWrapper, new _view_top_extra_wrapper_js__WEBPACK_IMPORTED_MODULE_0__.TopExtraWrapperView().element, _render_js__WEBPACK_IMPORTED_MODULE_7__.RenderPosition.BEFOREEND);
(0,_render_js__WEBPACK_IMPORTED_MODULE_7__.renderElement)(filmsWrapper, new _view_most_commented_extra_wrapper_js__WEBPACK_IMPORTED_MODULE_11__.MostCommentedExtraWrapperView().element, _render_js__WEBPACK_IMPORTED_MODULE_7__.RenderPosition.BEFOREEND);

for (let i = 0; i < cardCount; i++) {
  (0,_render_js__WEBPACK_IMPORTED_MODULE_7__.renderTemplate)(filmsListComponent.element, (0,_view_movie_card_view_js__WEBPACK_IMPORTED_MODULE_3__.createMovieCard)(mocks[i]), _render_js__WEBPACK_IMPORTED_MODULE_7__.RenderPosition.BEFOREEND);
}

const extraTopWrapper = filmsWrapper.querySelector('.film-list__container_top');
const extraWrapperMostCommented = filmsWrapper.querySelector('.film-list__container_most_commented');
(0,_render_js__WEBPACK_IMPORTED_MODULE_7__.renderTemplate)(extraTopWrapper, (0,_view_movie_card_view_js__WEBPACK_IMPORTED_MODULE_3__.createMovieCard)(mocks[0]), _render_js__WEBPACK_IMPORTED_MODULE_7__.RenderPosition.BEFOREEND);
(0,_render_js__WEBPACK_IMPORTED_MODULE_7__.renderTemplate)(extraTopWrapper, (0,_view_movie_card_view_js__WEBPACK_IMPORTED_MODULE_3__.createMovieCard)(mocks[1]), _render_js__WEBPACK_IMPORTED_MODULE_7__.RenderPosition.BEFOREEND);
(0,_render_js__WEBPACK_IMPORTED_MODULE_7__.renderTemplate)(extraWrapperMostCommented, (0,_view_movie_card_view_js__WEBPACK_IMPORTED_MODULE_3__.createMovieCard)(mocks[2]), _render_js__WEBPACK_IMPORTED_MODULE_7__.RenderPosition.BEFOREEND);
(0,_render_js__WEBPACK_IMPORTED_MODULE_7__.renderTemplate)(extraWrapperMostCommented, (0,_view_movie_card_view_js__WEBPACK_IMPORTED_MODULE_3__.createMovieCard)(mocks[3]), _render_js__WEBPACK_IMPORTED_MODULE_7__.RenderPosition.BEFOREEND);
(0,_render_js__WEBPACK_IMPORTED_MODULE_7__.renderElement)(siteFooterElement, new _view_footer_statistic_js__WEBPACK_IMPORTED_MODULE_10__.FooterStatisticView(mocks.length).element, _render_js__WEBPACK_IMPORTED_MODULE_7__.RenderPosition.BEFOREEND); //renderTemplate(siteFooterElement, createPopupFilmDetails(mocks[0]), RenderPosition.AFTEREND);
//renderTemplate(siteFooterElement, showStatistic(), RenderPosition.AFTEREND);

const filmsLoader = document.querySelector('.films-list__show-more');

const addFiveFilmsHandler = () => {
  for (let i = openedFilms; i < mocks.length; i++) {
    openedFilms += 1;
    (0,_render_js__WEBPACK_IMPORTED_MODULE_7__.renderTemplate)(filmsListComponent.element, (0,_view_movie_card_view_js__WEBPACK_IMPORTED_MODULE_3__.createMovieCard)(mocks[i]), _render_js__WEBPACK_IMPORTED_MODULE_7__.RenderPosition.BEFOREEND);

    if (openedFilms === mocks.length) {
      filmsLoader.style.display = 'none';
      filmsLoader.removeEventListener('click', addFiveFilmsHandler);
    }

    if ((i + 1) % fiveFilms === 0) {
      break;
    }
  }
};

filmsLoader.addEventListener('click', addFiveFilmsHandler);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map