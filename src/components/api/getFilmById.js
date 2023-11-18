import axios from 'axios';
import { BASE_URL, API_KEY } from 'refs/refs';

const getFilmById = async movieId => {
  try {
    const resp = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
    );
    const data = resp.data;
    return data;
  } catch (error) {
    throw error;
  }
};

export default getFilmById;
