import {getArticle} from './generate-data.js';
import {inActivePage, activePage} from './form.js';

const mapCanvas = document.querySelector('#map-canvas');
const copyCard = getArticle();
mapCanvas.append(copyCard);

inActivePage();
activePage ();
