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


function createMarker (){
  const icon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
  const {lat, lng} = mainMarker.getLatLng();
  const addMarker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );


  addMarker.addTo(mymap).bindPopup(getArticle());

  mainMarker.setLatLng({
    lat: 35.68386,
    lng: 139.7635,
  });
}

const submitButton = document.querySelector('.ad-form__submit');

submitButton.addEventListener('click', () => {
  createMarker ();

});

