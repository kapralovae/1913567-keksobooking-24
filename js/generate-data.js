import {capacitySelect, roomSelect} from './form.js';


const card = document.querySelector('#card').content;

const addressInput = document.querySelector('#address');


//const descriptionText = document.querySelector('#description');

const article = card.querySelector('article');


function getArticle (cardData) {
  console.log(cardData);
  const fragment = document.createDocumentFragment();
for (let i = 0; i < cardData.length; i++) {
  let qwe = [];
  qwe = cardData[i];

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


  // const popupPhotoImg = popupPhoto.querySelector('img');
  // popupPhoto.innerHTML = '';

  const qwer1 = qwe.offer;
  //const qwer2 = qwe.location;
  const qwer3 = qwe.author;
  // for (let j = 0; i < qwer1.photos.length - 1; i++) {
  //   const elementImg = popupPhotoImg.cloneNode(true);
  //   elementImg.src = qwer1.photos[i];
  //   popupPhoto.appendChild(elementImg);

  // }


  popupTitle.textContent = qwer1.title;
  popupAddress.textContent = qwer1.address;
  popupPrice.textContent = `${qwer1.price} ₽/ночь`;
  popupType.textContent = qwer1.type;
  popupCapacity.textContent = `${qwer1.rooms} комнаты для ${qwer1.guests} гостей`;
  popupTime.textContent = `Заезд после ${qwer1.checkin}, выезд до ${qwer1.checkout}`;
  popupFeature.textContent = qwer1.features;
  popupDescription.textContent = qwer1.description;


  popupAvatar.src = qwer3.avatar;

  fragment.appendChild(popupAvatar);
  fragment.appendChild(popupTitle);
  fragment.appendChild(popupAddress);
  fragment.appendChild(popupPrice);
  fragment.appendChild(popupType);
  fragment.appendChild(popupCapacity);
  fragment.appendChild(popupTime);
  fragment.appendChild(popupFeature);
  fragment.appendChild(popupDescription);
  fragment.appendChild(popupPhoto);
}
  return fragment;
}

export {getArticle, addressInput, roomSelect, capacitySelect};
