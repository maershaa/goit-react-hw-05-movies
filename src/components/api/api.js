import axios from 'axios'; //npm install axios

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = 'c23a5d8272617f6f7021ba4c498464ff';

const fetchMovies = async (searchQuery, page = 1, perPage = 12) => {
  try {
    const params = {
      key: API_KEY,
      append_to_response,
      q: searchQuery,
      //   page,
      //   per_page: perPage,
    };
    const response = await axios.get(BASE_URL, { params });
    console.log('response in api', response);
    console.log('searchQuery', searchQuery);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchMovies;
