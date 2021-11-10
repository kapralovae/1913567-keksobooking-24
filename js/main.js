import {getArticle, addressInput} from './generate-data.js';
import {inActivePage, activePage} from './form.js';
import {getRandomFloat} from './get-random-number.js';
//import {createCardData} from './data-and-get-object-massive.js';
//import {createLoader} from './server-data.js';
fetch('https://24.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((markers) => {
    getArticle(markers);
  });

inActivePage();
const mainPinIcon = L.icon({
  iconUrl: 'leaflet/images/marker-icon.png',
  iconSize: [50, 50],
  iconAnchor: [25, 50],
});
const mainMarker = L.marker(
  {
    lat: 35.68386,
    lng: 139.7635,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const mymap = L.map('map-canvas').on('load', () => {
  addressInput.value = mainMarker._latlng;
  activePage ();
}).setView([35.68386, 139.7635], 13);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(mymap);


mainMarker.addTo(mymap);


mainMarker.on('move', (evt) => {
  addressInput.value = evt.target.getLatLng();
});


function createMarker (map){
 // const cardData = createCardData();

  const icon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const addMarker = L.marker(
    {
      lat : getRandomFloat(35.67, 35.69, 5),
      lng: getRandomFloat(139.7, 139.77, 5),
    },
   // markers.location,
    {
      icon,
    },
  );

  addMarker
    .bindPopup(getArticle())
    .addTo(map);

  mainMarker.setLatLng({
    lat: 35.68386,
    lng: 139.7635,
  });
  return addMarker;
}
createMarker();
for (let i = 0; i<15; i++) {

  //createMarker (mymap);
}

const submitButton = document.querySelector('.ad-form__submit');

submitButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  createMarker (mymap);

});

//const loadMarkers = createLoader(console.log, console.error);

// loadMarkers();


