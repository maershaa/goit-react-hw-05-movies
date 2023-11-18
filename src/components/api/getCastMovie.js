import axios from 'axios'; //npm install axios

import { BASE_URL, API_KEY } from 'refs/refs';

const getCastMovie = async movieID => {
  const resp = await axios.get(
    `${BASE_URL}/movie/${movieID}/credits?api_key=${API_KEY}`
  );
  const data = resp.data;
  return data;
};

export default getCastMovie;
