import API from './api-library';
import { STORAGE_KEY } from '../../fetch/api_key';
import { openModalAboutFilm } from '../movieModal';
import { errorMarkup, onCreateLibraryMarkup } from './library-markup';

const libraryRef = document.querySelector('.library-card-list');
const btnLib = document.querySelector('.btn');

window.addEventListener('DOMContentLoaded', () => {
  const library = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  // if(libraryRef) createLibraryMarkup(library);
  let totalElementInList = 0;
  let firstEl = 0;
  getLibrarylistInParts(library);
});

btnLib?.addEventListener('click', function (event) {
  getLibrarylistInParts(library);
  firstEl += 6;
  totalElementInList += 6;
});

let totalElementInList = 0;
let firstEl = 0;
let lostEl = firstEl + 6;

function getLibrarylistInParts(library) {
  const totalLiberyLength = library.length;
  const libraryInParts = library.slice(firstEl, lostEl);
  if (totalLiberyLength - totalElementInList <= 6) {
    createLibraryMarkup(libraryInParts);
  } else {
    createLibraryMarkup(libraryInParts);
    libraryRef.insertAdjacentHTML(
      'afterend',
      ` <div class="lib-btn-cont"><button class="btn btn-search-movie" type="button">Load more</button></div>`
    );
  }
}

export function handleFilm(e) {
  const id = e.target.dataset.id;

  if (e.target.hasAttribute('data-add')) {
    // btnLib.removeAttribute('data-add');
    // btnLib.setAttribute('data-remove', '');
    // btnLib.textContent = 'Remove from my library';
    setBtnProp(e.target, addOps);

    addFilmToLibrary(id);

    //
  } else if (e.target.hasAttribute('data-remove')) {
    console.log('data-remove');

    e.target.removeAttribute('data-remove');
    e.target.setAttribute('data-add', '');
    e.target.textContent = 'Add to my library';

    deleteCardLibrary(id);
  }
}

const addOps = {
  addAttr: 'data-remove',
  removeAttr: 'data-add',
  btnText: 'Remove from my library',
};

function setBtnProp(el, props) {
  const { addAttr, removeAttr, btnText } = props;

  el.removeAttribute(removeAttr);
  el.setAttribute(addAttr, '');
  el.textContent = btnText;
}

/////// ПРОВЕРКА НАЛИЧИЯ ID В LOCAL STORAGE /////////

/////// ПОЛУЧЕНИЯ ОТ СЕРВЕРА ФИЛЬМА ПО ID ///////

async function getMovieById(id) {
  const responce = await API.getMoviById(id);
  return responce.data;
}

///// ФУНКЦИЯ ДОБАВЛЕНИЯ В LOCAL STORAGE ///////

export async function addFilmToLibrary(id) {
  const libraryList = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  const isAtLibrary = libraryList?.find(x => x.id === Number(id));

  if (isAtLibrary) return console.log('film is at list');

  const movieObj = await getMovieById(id);
  libraryList.push(movieObj);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(libraryList));
}

///// ФНКЦИЯ УДАЛЕНИЯ ИЗ LOCAL STORAGE ///////

export function deleteCardLibrary(id) {
  const libraryList = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const itemToDelete = libraryList.find(film => film.id === id);

  libraryList.pop(itemToDelete);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(libraryList));

  if (location.pathname === '/library.html') {
    // libraryRef.innerHTML = '';
    createLibraryMarkup(libraryList);
  }}

function createLibraryMarkup(libraryInParts) {
  if (libraryInParts.length === 0) {
    const createErrorMarkup = errorMarkup();
    libraryRef.innerHTML = createErrorMarkup;
  }
  const sucsessMurkup = onCreateLibraryMarkup(libraryInParts);
  libraryRef.insertAdjacentHTML('beforeend', sucsessMurkup);
}

window.addEventListener('DOMContentLoaded', () => {
  const watchAddedCard = document.querySelector('.library-card-list');
  watchAddedCard.addEventListener('click', function (e) {
    let targetItem = e.target;
    const currentButton = targetItem.closest('.watch-more-details');
    if (currentButton) {
      const movieId = currentButton.getAttribute('data-id');
      openModalAboutFilm(movieId);
    }
  });
});
