import {
  getRandomIntFromRange,
  getRandomArbitrary,
  // eslint-disable-next-line comma-dangle
  getRandomArrayElement,
} from './util.js';

// Первый объект

const AVATAR = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
  'img/avatars/user09.png',
  'img/avatars/user10.png',
];

const author = () => ({ avatar: getRandomArrayElement(AVATAR) });

//const similarAvatar = Array.from({ length: 1 }, author);

//console.log(similarAvatar);

// Второй объект

const LAT = getRandomArbitrary(35.65, 35.7, 5);

const LNG = getRandomArbitrary(139.7, 139.8, 5);

const locations = () => ({
  latitude: LAT,
  longitude: LNG,
});

//console.log(locations());

// Третий объект

const TITLE = ['hello', 'good morning', 'good day'];
const PRICE = getRandomIntFromRange(0, 100);
const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const ROOMS = getRandomIntFromRange(0, 100);
const GUESTS = getRandomIntFromRange(0, 100);
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTION = ['long', 'short', 'narrow', 'wide'];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const createRandomArray = (arr) =>
  arr.slice(0, getRandomIntFromRange(0, arr.length));

const offer = () => ({
  title: getRandomArrayElement(TITLE),
  // eslint-disable-next-line no-template-curly-in-string
  address: '${locations().lat}, ${locations().lng}',
  price: PRICE,
  type: getRandomArrayElement(TYPE),
  rooms: ROOMS,
  guests: GUESTS,
  checkin: getRandomArrayElement(CHECKIN),
  checkout: getRandomArrayElement(CHECKOUT),
  features: createRandomArray(FEATURES),
  description: getRandomArrayElement(DESCRIPTION),
  photos: createRandomArray(PHOTOS),
});

//console.log(offer());

const offers = [];
const createaAdv = () => ({
  author: author(),
  offer: offer(),
  location: locations(),
});

for (let item = 0; item <= 10; item++) {
  offers.push(createaAdv());
}

//const similarOffers = Array.from({ length: 10 }, createaAdv);

//console.log(offers);
