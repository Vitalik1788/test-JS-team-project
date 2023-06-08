import defaultImg from '../../images/default.jpg';

export const onCreateLibraryMarkup = libraryInParts => {
  return libraryInParts
    .map(movie => {
      const imageSrc = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : `${defaultImg}`;
      return `<li class="card-item item">
              <img class="film-poster" src="${imageSrc}" alt="${
        movie.original_title
      }" />
              <div class="overlay watch-more-details" data-id="${movie.id}">
                <div class="film-info">
                  <p class="film-title">
                    ${movie.original_title || movie.name}
                  </p>
                  <div class="film-details">
                    <span class="film-description">${
                      new Date(movie.release_date).getFullYear() ||
                      new Date(movie.first_air_date).getFullYear()
                    } </span>
                    <span class="film-rating">${Math.round(
                      movie.vote_average
                    )}</span>
                  </div>
                </div>
              </div>
            </li>`;
    })
    .join('');
};

export const errorMarkup = () => {
  return `<div class="library-info library-info-container">
            <p class="library-info-text">
            OOPS... <br> We are very sorry!<br>
            You dont have any movies at your library.
            </p>
            <button class="btn btn-search-movie" type="button">Search movie</button>
          </div>`;
};
