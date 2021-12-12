import {
  getRandomInteger
} from '../utils/utils.js';
import dayjs from 'dayjs';

let movieId = 0;

const descriptions = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.'
];

const genres = [
  'Кинокомедия',
  'Киноповесть',
  'Кинофантастика',
  'Комедийная драма',
  'Комедия о возобновлении брака',
  'Комедия по-итальянски',
  'Детективный фильм',
  'Детское кино'
];

const filmsNames = [
  'Venom',
  'Harry Potter',
  'Titanic',
  'Avengers',
  'Never break down'
];

const posters = [
  './images/posters/made-for-each-other.png',
  './images/posters/popeye-meets-sinbad.png',
  './images/posters/sagebrush-trail.jpg',
  './images/posters/santa-claus-conquers-the-martians.jpg',
  './images/posters/the-dance-of-life.jpg',
  './images/posters/the-great-flamarion.jpg',
  './images/posters/the-man-with-the-golden-arm.jpg',
];

const directors = [
  'Igor',
  'Vasya',
  'Sasha',
  'Kolya',
  'Nadya',
  'Ivan'
];

const countries = [
  'USA',
  'Russia',
  'China',
  'India'
];


const writers = [
  'Igor Babko',
  'Vasya Vasikin',
  'Sasha Grey',
  'Kolya Naumov',
  'Nadya Dorofeeva',
  'Ivan Grozniy'
];
const actors = [
  'Sara Conor',
  'Jon Vasikin',
  'Denis Grey',
  'Olya Naumov',
  'Zina Dorofeeva',
  'Lubov Grozniy'
];

const generateDescription = () => {
  const numberOfTexts = getRandomInteger(1, 5);
  let description = '';

  for (let i = 0; i < numberOfTexts; i++) {
    const randomIndex = getRandomInteger(0, descriptions.length - 1);
    description = `${description } ${descriptions[randomIndex]}`;
  }

  return description;
};

const getRandomData = (elements) => elements[getRandomInteger(0, elements.length - 1)];


const years = [
  1947,
  1975,
  1985,
  1990,
  1978,
  1999,
  2005
];

// const generateComments = () => {

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
  const duration = `${getRandomInteger(1,2)}h ${getRandomInteger(0,59)}m`;
  return duration;
};


const generateStuff = (staffList) => {
  const createWritersList = [];
  staffList.forEach((element) => {
    createWritersList.push(element);
  });
  return createWritersList;
};


export const createCard = () => {
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
    ageRating: getRandomInteger(0, 18),
    isWatchList: Boolean(getRandomInteger(0, 1)),
    isWatched: Boolean(getRandomInteger(0, 1)),
    isFavorites: Boolean(getRandomInteger(0, 1)),
  };
  return card;
};
