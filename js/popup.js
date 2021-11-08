/* eslint-disable prefer-template */
import { getElement } from './util.js';
import { offers } from './data.js';

const userDialog = document
  .querySelector('template')
  .content.querySelector('.popup');

const TYPE = {
  flat: 'Квартира',
  bungalo: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};
const MAP = document.querySelector('#map-canvas');

// eslint-disable-next-line no-unused-vars
const createaCard = function (advertisement) {
  // userDialog.innerHTML = '';
  const popup = userDialog.cloneNode(true);
  //console.log(popup);
  popup.querySelector('.popup__title').textContent =
    advertisement[0].offer.title;
  popup.querySelector('.popup__text--address').textContent =
    advertisement[0].offer.address;
  popup.querySelector('.popup__text--price').textContent =
    advertisement[0].offer.price + ' ₽/Ночь';
  popup.querySelector('.popup__type').textContent =
    TYPE[advertisement[0].offer.type];
  popup.querySelector('.popup__text--capacity').textContent =
    advertisement[0].offer.rooms +
    ' комнаты для' +
    advertisement[0].offer.guests +
    ' гостей';
  popup.querySelector('.popup__text--time').textContent =
    'Заезд после ' +
    advertisement[0].offer.checkin +
    ', выезд до ' +
    advertisement[0].offer.checkout;
  popup.querySelectorAll('.popup__features').textContent =
    advertisement[0].offer.features;
  console.log(advertisement[0].offer.features);
  MAP.appendChild(popup);

  //   //const popupAvatar = getElement(popup, '.popup__avatar');
  //   //popupAvatar.src = advertisement.author.avatar;
  //   //const popupFeatures = popup.querySelectorAll('.popup__feature');

  //   //for (let i = 0; i < popupFeatures.length; i++) {
  //   //  if (i > advertisement.offer.features.length) {
  //   //    popupFeatures[i].classList.remove('.popup__feature');
  //  //   }
  // //}

  //   const popupPhotos = getElement(popup, '.popup__photos');
  //   const popupPhotoItem = popupPhotos.querySelector('li');

  //   for (let j = 0; j < advertisement.offer.photos.length; j++) {
  //     const img = document.createElement('img');
  //     img.src = advertisement.offer.photos[j];
  //     popupPhotoItem.appendChild(img);
  //   }

  //   getElement(popup, '.popup__title', advertisement.offer.title);
  //   getElement(popup, '.popup__text--address', advertisement.offer.address);
  //   getElement(
  //     popup,
  //     '.popup__text--price',
  //     // eslint-disable-next-line prefer-template
  //     // eslint-disable-next-line comma-dangle
  //     advertisement.offer.price + '{{offer.price}}₽/Ночь'
  //   );
  //   getElement(popup, '.popup__type', TYPE[advertisement.offer.type]);
  //   getElement(
  //     popup,
  //     '.popup__text--capacity',
  //     advertisement.offer.rooms +
  //       ' комнаты для ' +
  //       advertisement.offer.guests +
  //       // eslint-disable-next-line comma-dangle
  //       '{{offer.guests}} гостей'
  //   );
  //   getElement(
  //     popup,
  //     '.popup__text--time',
  //     'Заезд после {{offer.checkin}}' +
  //       advertisement.offer.checkin +
  //       ', выезд до {{offer.checkout}}' +
  //       // eslint-disable-next-line comma-dangle
  //       advertisement.offer.checkout
  //   );
  //   getElement(popup, '.popup__description', advertisement.offer.description);

  return popup;
};
createaCard(offers);
