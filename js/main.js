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
  return elements[_.random(0, elements.length - 1)];
};

const author = () => {
  return {
    name: getRandomArrayElement(AVATAR),
  };
};
const similarAvatar = Array.from({ length: 1 }, author);

console.log(similarAvatar);

// Второй объект

const LAT = [
  function getRandomLat(min = 35.65, max = 35.7, maxDigits = 5) {
    const digitsDegree = 10 ** maxDigits;
    const result =
      ~~((Math.random() * (max - min) + min) * digitsDegree) / digitsDegree;
    return max <= min ? false : Math.abs(result);
  },
];

const LNG = [
  function getRandomLng(min = 139.7, max = 139.8, maxDigits = 5) {
    const digitsDegree = 10 ** maxDigits;
    const result =
      ~~((Math.random() * (max - min) + min) * digitsDegree) / digitsDegree;
    return max <= min ? false : Math.abs(result);
  },
];
const location = () => {
  return {
    latitude: LAT,
    longitude: LNG,
  };
};
console.log(location());

// Третий объект

const title = ['hello', 'good morning', 'good day'];
const address = ['{{location.lat}}', '{{location.lng}}'];
const price = [
  function getRandomIntFromRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    return max <= min ? false : Math.abs(result);
  },
];
const type = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const rooms = [
  function getRandomIntFromRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    return max <= min ? false : Math.abs(result);
  },
];
const guests = [
  function getRandomIntFromRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    return max <= min ? false : Math.abs(result);
  },
];
const checkin = ['12:00', '13:00', '14:00'];
const checkout = ['12:00', '13:00', '14:00'];
const features = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const description = ['long', 'short', 'narrow', 'wide'];
const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const offer = () => {};
