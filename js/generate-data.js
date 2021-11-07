import {titleInput, valueNumber, capacitySelect, roomSelect, typeSelect, timeIn, timeOut} from './form.js';
import {typeObject, arrPhotosRandom, author, offer} from './data-and-get-object-massive.js';

const card = document.querySelector('#card').content;

const addressInput = document.querySelector('#address');


const descriptionText = document.querySelector('#description');

const article = card.querySelector('article');



function getArticle () {
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
	const fragment = document.createDocumentFragment();
  popupTitle.textContent = titleInput.value;
  popupAddress.textContent = addressInput.value;
  popupPrice.textContent = `${valueNumber} ₽/ночь`;
  popupType.textContent = typeObject[typeSelect.value];
  popupCapacity.textContent = `${roomSelect.value} комнаты для ${capacitySelect.value} гостей`;
  popupTime.textContent = `Заезд после ${timeIn.value}, выезд до ${timeOut.value}`;
  popupFeature.textContent = offer.features;
  popupDescription.textContent = descriptionText.value;

  const popupPhotoImg = popupPhoto.querySelector('img');
  popupPhoto.innerHTML = '';

  for (let i = 0; i < arrPhotosRandom.length; i++) {
    const elementImg = popupPhotoImg.cloneNode(true);
    elementImg.src = arrPhotosRandom[i];
    popupPhoto.appendChild(elementImg);
  }


  popupAvatar.src = author.avatar;

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
console.log(fragment);
  return fragment.outerHTML;
}

export {getArticle, addressInput, roomSelect, capacitySelect};
