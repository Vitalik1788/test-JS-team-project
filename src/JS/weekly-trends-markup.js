import { validateGenres } from './weekly-trends-genres';
// export function createMarkup(films) {
//   const markup = films
//     .map(
//       ({ id, poster_path, release_date, title, genre_ids, vote_average }) => {
//         const genres = validateGenres(genre_ids);
//         const posterPath = `https://image.tmdb.org/t/p/original/${poster_path}`;

//         let releaseDate = '';
//         if (release_date === 'undefind') {
//           releaseDate = 'Date unknown';
//         } else {
//           releaseDate = release_date;
//         }
//         //const releaseDate=release_date.substring(0,4);
//         return `<li class="card-item item" data-id="${id}">
//         <img class="film-poster" src="https://image.tmdb.org/t/p/original/${posterPath}" alt="${title} poster" />
//         <div class="overlay">
//           <div class="film-info">
//             <p class="film-title">${title}</p>
//             <div class="film-details">
//               <span class="film-description">${genres} | ${releaseDate}</span>

//               <span class="film-rating">${vote_average}</span>
//             </div>
//           </div>
//         </div>
//       </li>`;
//       }
//     )
//     .join('');
//   document.querySelector('.cards-list').insertAdjacentHTML('beforeend', markup);
// }

export function createMarkup(films) {
  const markup = films.map(
    ({ id, poster_path, release_date, title, genre_ids, vote_average }) => {
      const genresPromise = validateGenres(genre_ids);
      const posterPath = `https://image.tmdb.org/t/p/original/${poster_path}`;

      // let releaseDate = '';
      // if (release_date === 'undefind') {
      //   releaseDate = 'Date unknown';
      // } else {
      //   releaseDate = release_date;
      // }
      let releaseDate = '';
      if (release_date === 'undefind') {
        releaseDate = 'Date unknown';
      } else {
        releaseDate = release_date.split('-')[0];
      }

      return genresPromise.then(genres => {
        return `<li class="card-item item" data-id="${id}">
            <img class="film-poster" src="https://image.tmdb.org/t/p/original/${posterPath}" alt="${title} poster" />
            <div class="overlay">
              <div class="film-info">
                <p class="film-title">${title}</p>
                <div class="film-details">
                  <span class="film-description">${genres} | ${releaseDate}</span>
                  <span class="film-rating">${vote_average}</span>
                </div>
              </div>
            </div>
          </li>`;
      });
    }
  );

  return Promise.all(markup).then(results => {
    const finalMarkup = results.join('');
    document
      .querySelector('.cards-list')
      .insertAdjacentHTML('beforeend', finalMarkup);
  });
}
