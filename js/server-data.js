import {getArticle} from './generate-data.js';
import {inActivePage, activePage} from './form.js';
import { filters, getData} from './api.js';

const addressInput = document.querySelector('#address');

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
    item.onchange = filters;
  });
  document.querySelectorAll('.map__checkbox').forEach((item) => {
    item.onchange = filters;
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

function createMarker (map, markerData){

  const icon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  addMarker = L.marker(
    {
      lat : markerData.location.lat,
      lng : markerData.location.lng,
    },
    {
      icon,
    },
  ).bindPopup(getArticle(markerData))
    .addTo(map);

  return addMarker;
}

export {setAddressInput, createMarker, mymap};
