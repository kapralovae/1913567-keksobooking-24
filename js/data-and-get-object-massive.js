import {getRandomInt, getRandomFloat} from './get-random-number.js';

const ARR_FOR_TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const typeObject = {
  'palace' : 'Дворец',
  'flat' : 'Квартира',
  'house' : 'Дом',
  'bungalow' : 'Бунгало',
  'hotel' : 'Отель',
};

const ARR_TIME = ['12:00', '13:00', '14:00'];

const ARR_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const ARR_FOR_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

function getAvatarSrc () {
  const resultRandom = getRandomInt(1,10);
  let avatarSrc = '';
  if (resultRandom === 10) {
    avatarSrc = './img/avatars/user10.png';
  } else {
    avatarSrc = `./img/avatars/user0${resultRandom}.png`;
  }
  return avatarSrc;
}


const arrPhotosRandom = [];

function getCountPhoto (){
  for (let i = 0; i < getRandomInt(0, 5); i++) { // Длина наполняемого массива от 0 до 10

    arrPhotosRandom.push(ARR_PHOTOS[getRandomInt(0, ARR_PHOTOS.length - 1)]); //Наполняем массив случайными значениями из ARR_PHOTOS
  }
  return arrPhotosRandom;
}

console.log(getCountPhoto());
const arrFeatures = [];

for (let i = 0; i < getRandomInt(0, ARR_FOR_FEATURES.length); i++) {
  const cutValue = ARR_FOR_FEATURES.splice(getRandomInt(0, ARR_FOR_FEATURES.length - 1), 1);
  arrFeatures.push(cutValue[0]); // Наполняем массив arrFeature вырезая значения из arrForFeature, чтобы не было повторов

}

const arrayTitles = ['title1', 'title2', 'title3'];
const arrayDescription = ['description1', 'description2', 'description3'];

function createCardData() {

  const author = {
    avatar : getAvatarSrc (),
  };

  const location = {
    lat : getRandomFloat(35.65000, 35.70000, 5),
    lng : getRandomFloat(139.70000, 139.80000, 5),
  };
  const offer = {
    title : arrayTitles[getRandomInt(0,2)],
    address : `${location.lat} ${location.lng}`,
    price : getRandomInt(0, 50000),
    type : ARR_FOR_TYPE[getRandomInt(0, ARR_FOR_TYPE.length - 1)],
    rooms : getRandomInt(1, 5),
    guests : getRandomInt(0, 6),
    checkin : ARR_TIME[getRandomInt(0, ARR_TIME.length - 1)],
    checkout : ARR_TIME[getRandomInt(0, ARR_TIME.length - 1)],
    features : arrFeatures,
    description : arrayDescription[getRandomInt(0,2)],
    photos : getCountPhoto (),
  };
  return {author, offer, location};
}
console.log(createCardData());

export {ARR_FOR_TYPE, typeObject, ARR_TIME, ARR_PHOTOS, ARR_FOR_FEATURES, getCountPhoto, arrFeatures, arrPhotosRandom, createCardData};
