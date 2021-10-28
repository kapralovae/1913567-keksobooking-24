import {getRandomInt, getRandomFloat} from './get-random-number.js';

const ARR_FOR_TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
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
const author = {
  avatar : `./img/avatars/user0${getRandomInt(1,10)}.png`,
};

const arrPhotosRandom = [];

function getCountPhoto (){
  for (let i = 0; i < getRandomInt(0, 10); i++) { // Длина наполняемого массива от 0 до 10

    arrPhotosRandom.push(ARR_PHOTOS[getRandomInt(0, 2)]); //Наполняем массив случайными значениями из ARR_PHOTOS
  }
  return arrPhotosRandom;
}

const arrFeatures = [];

for (let i = 0; i < getRandomInt(1, 7); i++) {
  const cutValue = ARR_FOR_FEATURES.splice(getRandomInt(0, ARR_FOR_FEATURES.length - 1), 1);
  arrFeatures.push(cutValue[0]); // Наполняем массив arrFeature вырезая значения из arrForFeature, чтобы не было повторов

}

const location = {
  lat : getRandomFloat(35.65000, 35.70000, 5),
  lng : getRandomFloat(139.70000, 139.80000, 5),
};

const offer = {
  title : 'Welcome',
  address : `${location.lat} ${location.lng}`,
  price : getRandomInt(0, 50000),
  type : ARR_FOR_TYPE[getRandomInt(0,4)],
  rooms : getRandomInt(1, 5),
  guests : getRandomInt(0, 6),
  checkin : ARR_TIME[getRandomInt(0, 2)],
  checkout : ARR_TIME[getRandomInt(0, 2)],
  features : arrFeatures,
  description : 'Аренда',
  photos : getCountPhoto (),
};

const objectMassiv = [author, offer, location];
const createMassive = [];

function createAdvertisement (countAdvertisement) {
  for (let i = 0; i < countAdvertisement; i++) {
    createMassive.push(objectMassiv.slice());
  }
  return createMassive; // На выходе функции получаем массив, где элементами являются массивы – [[author, offer, location],[author, offer, location],[]....]
}

createAdvertisement (10); // вызов функции

export {ARR_FOR_TYPE, ARR_TIME, ARR_PHOTOS, ARR_FOR_FEATURES, author, getCountPhoto, arrFeatures, location, arrPhotosRandom, offer};
