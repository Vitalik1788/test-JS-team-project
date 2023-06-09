import { openModalAboutFilm } from './movieModal';
import { handleFilm } from './library/library';

window.addEventListener('click', e => {
  const heroDetailsButton = document.querySelector('.css-bnt-info');
  const watchTrailerButton = document.querySelector('.watch-trailer-button');
  const upcomingBtn = document.querySelector('.btn');

  const id = e.target.dataset.id;

  switch (e.target) {
    case heroDetailsButton:
      openModalAboutFilm(id);
      break;

    case upcomingBtn:
      handleFilm(e);
      break;

    case watchTrailerButton:
      break;

    default:
      break;
  }
});

function trailerCb() {
  const closeButton = document.querySelector('.close-button');
  const modal = document.getElementById('modal');

  document.addEventListener('keydown', event =>
    event.key === 'Escape' ? (modal.style.display = 'none') : null
  );

  window.addEventListener('click', event =>
    event.target === modal ? (modal.style.display = 'none') : null
  );

  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}
