// Материалы для написания функций: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomInt (from, to) {
  from = Math.ceil(from);
  to = Math.floor(to);
  if (from <0 || to <0) {
    return alert('Вводите только положительные значения');
  }
  if (from > to) {
    let memory = from;
    from = to;
    to = memory;
   }
  return Math.floor(Math.random() * (to - from + 1) + from);
}

getRandomInt();

function getRandomFloat (from, to, lotNumber) {
  lotNumber = Math.pow(10, Math.round(lotNumber));
  if (from <0 || to <0) {
    return alert('Вводите только положительные значения');
  }
  if (from > to) {
    let memory = from;
    from = to;
    to = memory;
  }

  return Math.floor((((((Math.random() * lotNumber) + 1) / lotNumber) * (to - from)) + from) * lotNumber) / lotNumber;
}


let author = {
  avatar : 'img/avatars/user' + `${getRandomInt(1,10)}`,
}

const ARR_FOR_TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const ARR_TIME = ['12:00', '13:00', '14:00'];


let arrPhotos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];


function getCountPhoto (){
for (let i = 0; i < getRandomInt(0, 10); i++) { // Длина наполняемого массива от 0 до 10
  let arrPhotosRandom = [];
  arrPhotosRandom.push(arrPhotos[getRandomInt(0, 2)]); //Наполняем массив случайными значениями из arrPhotos
  }
};

let arrForFeatures = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

let arrFeatures = [];

for (let i = 0; i < getRandomInt(1, 7); i++) {
let cutValue = arrForFeatures.splice(getRandomInt(0, arrForFeatures.length - 1), 1);
arrFeatures.push(cutValue[0]); // Наполняем массив arrFeature вырезая значения из arrForFeature, чтобы не было повторов

}

let offer = {
  title : 'Welcome',
  address : `${location.lat} ` + `${location.lng}`,
  price : getRandomInt(0, Infinity),
  type : ARR_FOR_TYPE[getRandomInt(0,4)],
  rooms : getRandomInt(1, 5),
  guests : getRandomInt(0, 6),
  checkin : ARR_TIME[getRandomInt(0, 2)],
  cheeckout : ARR_TIME[getRandomInt(0, 2)],
  features : arrFeatures,
  description : 'Аренда',
  photos : arrPhotosRandom,
}

let location = {
  lat : getRandomFloat(35.65000, 35.70000, 5),
  lng : getRandomFloat(139.70000, 139.80000, 5),
}

let objectMassiv = [author, offer, location];
let createMassive = [];

function createAdvertisement (countAdvertisement) {
for (let i = 0; i < countAdvertisement; i++) {
  createMassive.push(objectMassiv.slice());
  }
  return createMassive; // На выходе функции получаем массив, где  [[author, offer, location],[author, offer, location],[]....]
}

createAdvertisement (10);
