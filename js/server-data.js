import {getArticle, addressInput} from './generate-data.js';
import {inActivePage, activePage} from './form.js';


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

function setAddressInput() {
  addressInput.value = mainMarker._latlng;
}

const mymap = L.map('map-canvas').on('load', () => {
  setAddressInput();
  activePage ();
}).setView([35.68386, 139.7635], 13);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(mymap);


mainMarker.addTo(mymap);
const COUNT_MARKERS = 10;

fetch('https://24.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((serverMarkers) => {
    const markers = serverMarkers.slice(0, COUNT_MARKERS);
    for(let i = 0; i < markers.length; i++) {
      createMarker(mymap,markers[i]);
    }
  });

mainMarker.on('move', (evt) => {
  addressInput.value = evt.target.getLatLng();
});


function createMarker (map,markerData){

  const icon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const addMarker = L.marker(
    {
      lat : markerData.location.lat,
      lng:markerData.location.lng,
    },
    {
      icon,
    },
  );

  addMarker
    .bindPopup(getArticle(markerData))
    .addTo(map);


  return addMarker;
}
mainMarker.setLatLng({
  lat: 35.68386,
  lng: 139.7635,
});


function featuresFilter () {
  const wifiFilter = document.querySelector('#filter-wifi');
  const dishwasherFilter = document.querySelector('#filter-dishwasher');
  const parkingFilter = document.querySelector('#filter-parking');
  const washerFilter = document.querySelector('#filter-washer');
  const elevatorFilter = document.querySelector('#filter-elevator');
  const conditionerFilter = document.querySelector('#filter-conditioner');

  let rank = 0;

  if (wifiFilter.cheked) {
    rank += 1;
  }
  if (dishwasherFilter.cheked) {
    rank += 1;
  }
  if (parkingFilter.cheked) {
    rank += 1;
  }
  if (washerFilter.cheked) {
    rank += 1;
  }
  if (elevatorFilter.cheked) {
    rank += 1;
  }
  if (conditionerFilter.cheked) {
    rank += 1;
  }
  return rank;
}

const typeFilter = document.querySelector('#housing-type');
typeFilter.addEventListener('change', () => {

  const selectType = typeFilter.value;
  const removeMarkers = document.querySelector('.leaflet-marker-pane');
  if (selectType !== 'any') {
    removeMarkers.remove();
  }
  markers.filter();

});

const priceFilter = document.querySelector('#housing-price');
priceFilter.addEventListener('change', () => {

  const selectPrice = priceFilter.value;
});

const roomsFilter = document.querySelector('#housing-rooms');
roomsFilter.addEventListener('change', () => {
	const selectRooms = roomsFilter.value;
});

const guestsFilter = document.querySelector('#housing-guests');
guestsFilter.addEventListener('change', () => {
	const selectGuests = guestsFilter.value;
});

// function () {
// 	markers[i].offer.type === selectType
// };

export {setAddressInput};
