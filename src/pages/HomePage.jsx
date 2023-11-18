import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader'; //npm install react-loader-spinner --save
import getTrendingFilm from 'components/api/getTrendingFilm';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [inputValue, setInputValue] = useState('');
  // const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState(null); // Состояние для хранения

  const navigate = useNavigate();
  const handleMovieClick = movieId => {
    navigate(`/movies/${movieId}`);
  };

  // Функция для выполнения запроса
  const fetchAndSetMovies = async () => {
    try {
      setIsLoading(true); // Устанавливаем флаг загрузки в true
      setError(null); // Сбрасываем сообщение об ошибке

      const data = await getTrendingFilm(); // Вызываем функцию getTrendingFilm

      const movies = data.results; // Получаем новые фильмы

      setMovies(movies); // Устанавливаем обновленные фильмы
      setError(null); // Сбрасываем сообщение об ошибке
    } catch (error) {
      setError(error.message); // Устанавливаем сообщение об ошибке
      setMovies(null); // Сбрасываем фильмы в случае ошибки
    } finally {
      setIsLoading(false); // В любом случае завершаем запрос, сбрасывая флаг загрузки
    }
  };

  useEffect(() => {
    fetchAndSetMovies();
  }, []);

  return (
    <div>
      {error !== null && (
        <p className="errorBadge">
          Oops, some error occurred... Error message: {error}
        </p>
      )}

      {isLoading && <Loader />}

      <h2 className="pageTitle"> Trending today </h2>
      <MoviesList movies={movies} onClick={handleMovieClick} />
    </div>
  );
};

export default HomePage;
