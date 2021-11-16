import {getArticle, addressInput} from './generate-data.js';
import {inActivePage, activePage} from './form.js';
import { getData, serverMarkers, paintMarkers, removeMarkers, paintFilterMarker } from './api.js';


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
  getData();
  document.querySelectorAll('.map__filter').forEach((item) => {
    item.onchange = selectFilter;
  });
  document.querySelectorAll('.map__checkbox').forEach((item) => {
    item.onchange = selectFilter;
  });
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

let addMarker;
function createMarker (map,markerData){

  const icon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  addMarker = L.marker(
    {
      lat : markerData.location.lat,
      lng:markerData.location.lng,
    },
    {
      icon,
    },
  );

  addMarker
    .addTo(map)
    .bindPopup(getArticle(markerData))
    .setTooltipContent(getArticle(markerData));

  mainMarker.setLatLng({
    lat: 35.68386,
    lng: 139.7635,
  });

  return addMarker;
}


function selectFilter (markerData) {
  const housingFeatures = document.querySelector('#housing-type');
  const typeFilter = housingFeatures.value;

  const priceFilter = document.querySelector('#housing-price');
  const selectPrice = priceFilter.value;

  const roomsFilter = document.querySelector('#housing-rooms');
  const selectRooms = roomsFilter.value;

  const guestsFilter = document.querySelector('#housing-guests');
  const selectGuests = guestsFilter.value;

  const checkFieldset = document.querySelector('#housing-features');
  const checkFilter = checkFieldset.querySelectorAll('input');

  const features = [];
  checkFilter.forEach((item) => {

    if (item.checked) {
      features.push(item.value);
    }
  });

  const filterMarkers = [];
  let comparePrice = '';
  serverMarkers.forEach((item) => {
    if (item.offer.features.some(features)) {
      filterMarkers.push(item);
    }

    if (item.offer.price < 10000) {
      comparePrice = 'low';
    } else if (item.offer.price > 10000 && item.offer.price < 50000) {
      comparePrice = 'middle';
    } else {
      comparePrice = 'high';
    }

    if (item.offer.type === typeFilter) {
      filterMarkers.push(item);
    }

  });

  removeMarkers(markerData);
  console.log(markerData);
  paintFilterMarker(filterMarkers);
  console.log(typeFilter, selectPrice, selectRooms, selectGuests, features);
}


export {setAddressInput, createMarker, mymap};
