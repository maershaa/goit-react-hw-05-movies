import axios from 'axios'; //npm install axios

import { BASE_URL, API_KEY } from 'refs/refs';

const getTrendingFilm = async () => {
  const resp = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=1`
  );
  const data = resp.data;

  return data;
};

export default getTrendingFilm;
