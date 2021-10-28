import {ARR_FOR_TYPE, arrPhotosRandom, author, offer} from './data-and-get-object-massive.js';
import {getRandomInt} from './get-random-number.js';
const card = document.querySelector('#card').content;
const article = card.querySelector('article');
const fragment = document.createDocumentFragment();
const copyArticle = article.cloneNode(true);

function getArticle () {
  const popupTitle = copyArticle.querySelector('.popup__title');
  popupTitle.textContent = offer.title;

  const popupAddress = copyArticle.querySelector('.popup__text--address');
  popupAddress.textContent = offer.address;

  const popupPrice = copyArticle.querySelector('.popup__text--price');
  popupPrice.textContent = `${offer.price} ₽/ночь`;

  const popupTypeTranslate = [];
  for (let i = 0; i < ARR_FOR_TYPE.length; i++) {
    popupTypeTranslate.push(ARR_FOR_TYPE[i]);
  }
  const popupType = copyArticle.querySelector('.popup__type');
  popupType.textContent = popupTypeTranslate[getRandomInt(0,4)];

  let popupCapacity = copyArticle.querySelector('.popup__text--capacity');
  popupCapacity.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;

  const popupTime = copyArticle.querySelector('.popup__text--time');
  popupTime.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  const popupFeature = copyArticle.querySelector('.popup__features');
  popupFeature.textContent = offer.features;

  const popupDescription = copyArticle.querySelector('.popup__description');
  popupDescription.textContent = offer.description;


  const popupPhoto = copyArticle.querySelector('.popup__photos');
  const popupPhotoImg = popupPhoto.querySelector('img');
  const elementImg = popupPhotoImg.cloneNode(true);
  popupPhoto.innerHTML = '';
  for (let i = 0; i < arrPhotosRandom.length; i++) {
    elementImg.src = arrPhotosRandom[i];
    popupPhoto.appendChild(elementImg);
  }

  const popupAvatar = copyArticle.querySelector('.popup__avatar');
  popupAvatar.src = author.avatar;

  fragment.appendChild(popupTitle);
  fragment.appendChild(popupAddress);
  fragment.appendChild(popupPrice);
  fragment.appendChild(popupType);
  fragment.appendChild(popupCapacity);
  fragment.appendChild(popupTime);
  fragment.appendChild(popupFeature);
  fragment.appendChild(popupDescription);
  fragment.appendChild(popupPhoto);
  fragment.appendChild(popupAvatar);

  return fragment;
}

export {getArticle};
