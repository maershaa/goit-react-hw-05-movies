import axios from 'axios'; //npm install axios

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'c23a5d8272617f6f7021ba4c498464ff';

const fetchMovies = async () => {
  try {
    const response = await axios.get(
      // Получение списка популярных фильмов за неделю
      `${BASE_URL}trending/all/week?api_key=${API_KEY}`
    );
    console.log('response in api', response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchMovies;
