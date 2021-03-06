import {capacitySelect, roomSelect} from './form.js';


const card = document.querySelector('#card').content;

const article = card.querySelector('article');

function getArticle (cardData) {

  const copyArticle = article.cloneNode(true);
  const popupTitle = copyArticle.querySelector('.popup__title');
  const popupAddress = copyArticle.querySelector('.popup__text--address');
  const popupPrice = copyArticle.querySelector('.popup__text--price');
  const popupType = copyArticle.querySelector('.popup__type');
  const popupCapacity = copyArticle.querySelector('.popup__text--capacity');
  const popupTime = copyArticle.querySelector('.popup__text--time');
  const popupFeature = copyArticle.querySelector('.popup__features');
  const popupDescription = copyArticle.querySelector('.popup__description');
  const popupPhoto = copyArticle.querySelector('.popup__photos');
  const popupAvatar = copyArticle.querySelector('.popup__avatar');


  const popupPhotoImg = popupPhoto.querySelector('img');
  popupPhoto.innerHTML = '';

  if ('photos' in cardData.offer) {
    for (let i = 0; i < cardData.offer.photos.length; i++) {
      const elementImg = popupPhotoImg.cloneNode(true);
      elementImg.src = cardData.offer.photos[i];
      popupPhoto.appendChild(elementImg);
    }
  }

  popupTitle.textContent = cardData.offer.title;
  popupAddress.textContent = cardData.offer.address;
  popupPrice.textContent = `${cardData.offer.price} ₽/ночь`;
  popupType.textContent = cardData.offer.type;
  popupCapacity.textContent = `${cardData.offer.rooms} комнаты для ${cardData.offer.guests} гостей`;
  popupTime.textContent = `Заезд после ${cardData.offer.checkin}, выезд до ${cardData.offer.checkout}`;
  popupFeature.textContent = cardData.offer.features;
  popupDescription.textContent = cardData.offer.description;

  popupAvatar.src = cardData.author.avatar;

  return copyArticle;
}

export {getArticle, roomSelect, capacitySelect};
