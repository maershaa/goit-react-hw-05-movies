import axios from 'axios';
import { BASE_URL, API_KEY } from 'refs/refs';

const getReviewMovie = async movieID => {
  const resp = await axios.get(
    `${BASE_URL}/movie/${movieID}/reviews?api_key=${API_KEY}`
  );
  const data = resp.data;
  return data;
};

export default getReviewMovie;
