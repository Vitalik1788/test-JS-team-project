import { validateGenres } from './weekly-trends-genres';
import starsRating from './stars-rating';
import { openModalAboutFilm } from './movieModal';

const refsInputPlace = document.querySelector('.cards-list');
const filmList = document.querySelector('.listListener');

export function createMarkup(films) {
  const markup = films
    .map(
      ({ id, poster_path, release_date, title, genre_ids, vote_average }) => {
        const genres = validateGenres(
          genre_ids,
          JSON.parse(localStorage.getItem('genres'))
        );
        const posterPath = `https://image.tmdb.org/t/p/original/${poster_path}`;

        let releaseDate = '';
        if (release_date === 'undefind') {
          releaseDate = 'Date unknown';
        } else {
          releaseDate = release_date.split('-')[0];
        }

        return `<li class="card-item item" data-id="${id}">
            <img class="film-poster" src="https://image.tmdb.org/t/p/original/${posterPath}" alt="${title} poster" />
            <div class="overlay">
              <div class="film-info">
                <p class="film-title">${title}</p>
                <div class="film-details">
                  <span class="film-description">${genres} | ${releaseDate}</span>
                  <div class="stars-container">${starsRating({
                    voteAverage: vote_average,
                    isHero: false,
                  })}</div>
                </div>
              </div>
            </div>
          </li>`;
      }
    )
    .join('');

  if (refsInputPlace) refsInputPlace.insertAdjacentHTML('beforeend', markup);
}

filmList.addEventListener('click', event => {
  const li = event.target.closest('.card-item');

  const movieId = li.getAttribute('data-id');
  openModalAboutFilm(movieId);
});
