import axios from 'axios';
import { BASE_URL, API_KEY } from 'refs/refs';

const getSearchMovie = async searchQuery => {
  const resp = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${searchQuery}`
  );
  const data = resp.data;

  return data;
};

export default getSearchMovie;
