/* eslint-disable prefer-template */
import { getElement } from './util.js';

const userDialog = document
  .querySelector('template')
  .content.querySelector('#card');

const TYPE = {
  flat: 'Квартира',
  bungalo: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

// eslint-disable-next-line no-unused-vars
const createaCard = function (advertisement) {
  userDialog.innerHTML = '';
  const popup = userDialog.cloneNode(true);
  const popupAvatar = getElement(popup, '.popup__avatar');
  popupAvatar.src = advertisement.author.avatar;
  const popupFeatures = popup.querySelectorAll('.popup__feature');

  for (let i = 0; i < popupFeatures.length; i++) {
    if (i > advertisement.offer.features.length) {
      popupFeatures[i].classList.remove('.popup__feature');
    }
  }

  const popupPhotos = getElement(popup, '.popup__photos');
  const popupPhotoItem = popupPhotos.querySelector('li');

  for (let j = 0; j < advertisement.offer.photos.length; j++) {
    const img = document.createElement('img');
    img.src = advertisement.offer.photos[j];
    popupPhotoItem.appendChild(img);
  }

  getElement(popup, '.popup__title', advertisement.offer.title);
  getElement(popup, '.popup__text--address', advertisement.offer.address);
  getElement(
    popup,
    '.popup__text--price',
    // eslint-disable-next-line prefer-template
    // eslint-disable-next-line comma-dangle
    advertisement.offer.price + '{{offer.price}}₽/Ночь'
  );
  getElement(popup, '.popup__type', TYPE[advertisement.offer.type]);
  getElement(
    popup,
    '.popup__text--capacity',
    advertisement.offer.rooms +
      ' комнаты для ' +
      advertisement.offer.guests +
      // eslint-disable-next-line comma-dangle
      '{{offer.guests}} гостей'
  );
  getElement(
    popup,
    '.popup__text--time',
    'Заезд после {{offer.checkin}}' +
      advertisement.offer.checkin +
      ', выезд до {{offer.checkout}}' +
      // eslint-disable-next-line comma-dangle
      advertisement.offer.checkout
  );
  getElement(popup, '.popup__description', advertisement.offer.description);

  return popup;
};
//console.log(createaCard);
