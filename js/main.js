// Функции

function getRandomIntFromRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return max <= min ? false : Math.abs(result);
}
getRandomIntFromRange(-10, 10);

function getRandomArbitrary(min, max, maxDigits = 0) {
  const digitsDegree = 10 ** maxDigits;
  const result =
    ~~((Math.random() * (max - min) + min) * digitsDegree) / digitsDegree;
  return max <= min ? false : Math.abs(result);
}

getRandomArbitrary(-10, 10, 5);

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

const getRandomArrayElement = (elements) => {
  return elements[getRandomIntFromRange(0, elements.length - 1)];
};

const author = () => {
  return {
    name: getRandomArrayElement(AVATAR),
  };
};
const similarAvatar = Array.from({ length: 1 }, author);

console.log(similarAvatar);

// Второй объект

const LAT = getRandomArbitrary(35.65, 35.7, 5);

const LNG = getRandomArbitrary(139.7, 139.8, 5);

const locations = () => {
  return {
    latitude: LAT,
    longitude: LNG,
  };
};
console.log(locations());

// Третий объект

const TITLE = ['hello', 'good morning', 'good day'];
const ADDRESS = locations();
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
const offer = () => {
  return {
    title: getRandomArrayElement(TITLE),
    address: ADDRESS,
    price: PRICE,
    type: getRandomArrayElement(TYPE),
    rooms: ROOMS,
    guests: GUESTS,
    checkin: getRandomArrayElement(CHECKIN),
    checkout: getRandomArrayElement(CHECKOUT),
    features: getRandomArrayElement(FEATURES),
    description: getRandomArrayElement(DESCRIPTION),
    photos: getRandomArrayElement(PHOTOS),
  };
};

console.log(offer());
