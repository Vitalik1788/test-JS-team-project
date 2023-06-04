import { onError } from './weekly-trends-main';
import axios from 'axios';

async function getGenres() {
  try {
    const genres = await axios.get(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=41b8f9437bf3f899281f8a3f9bdc0891'
    );
    return genres;
  } catch (error) {
    onError(error);
  }
}

export async function validateGenres(genresArray) {
  try {
    const { data } = await getGenres();
    const allGenres = Array.from(data.genres);
    const genresNames = genresArray.map(genreId => {
      const genre = allGenres.find(genre => genre.id === genreId);
      return genre ? genre.name : '';
    });
    //console.log(genresNames);
    let genresString = '';
    if (genresNames.length > 2) {
      genresString = genresNames.slice(0, 2).join(', ') + ' and other';
    } else {
      genresString = genresNames.join(', ');
    }

    console.log(genresString);
    return genresString;
  } catch (error) {
    onError(error);
    return '';
  }
}
