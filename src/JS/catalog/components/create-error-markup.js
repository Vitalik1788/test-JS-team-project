import { refs } from './refs';

let errorMarkupCreated = false;

export function createErrorMarkup() {
  if (errorMarkupCreated) {
    return; // Если функция уже вызвана, выходим из неё
  }

  const errorMarkup = `<p class="error-information">OOPS...</p>
  <p class="error-information">We are very sorry!</p>
  <p class="error-information">
    We don’t have any results matching your search.
  </p>`;

  const newErrorContainer = document.createElement('div');
  newErrorContainer.innerHTML = errorMarkup;

  refs.errorContainer.appendChild(newErrorContainer);
  refs.errorContainer.classList.remove('is-hidden');
  refs.paginationContainer.classList.add('is-hidden');

  errorMarkupCreated = true;
}
