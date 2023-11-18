import axios from 'axios'; //npm install axios

import { BASE_URL, API_KEY } from 'refs/refs';

export const getTrendingFilm = async () => {
  const resp = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=1`
  );
  const data = resp.data;

  return data;
};

export const getFilmById = async movieId => {
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

export const getSearchMovie = async searchQuery => {
  const resp = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${searchQuery}`
  );
  const data = resp.data;

  return data;
};

export const getReviewMovie = async movieID => {
  const resp = await axios.get(
    `${BASE_URL}/movie/${movieID}/reviews?api_key=${API_KEY}`
  );
  const data = resp.data;
  return data;
};

export const getCastMovie = async movieID => {
  const resp = await axios.get(
    `${BASE_URL}/movie/${movieID}/credits?api_key=${API_KEY}`
  );
  const data = resp.data;
  return data;
};
