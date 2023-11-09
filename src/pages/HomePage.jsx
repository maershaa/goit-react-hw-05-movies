import React, { useState, useEffect } from 'react';
import fetchMovies from 'components/api/api';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader'; //npm install react-loader-spinner --save

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [inputValue, setInputValue] = useState('');
  // const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState(null); // Состояние для хранения

  // Функция для выполнения запроса и обновления фотографий
  const fetchAndSetMovies = async () => {
    try {
      setIsLoading(true); // Устанавливаем флаг загрузки в true
      setError(null); // Сбрасываем сообщение об ошибке

      const data = await fetchMovies(); // Выполняем запрос к API

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

  const handleImageClick = event => {};

  return (
    <div>
      {error !== null && (
        <p className="errorBadge">
          Oops, some error occurred... Error message: {error}
        </p>
      )}

      {isLoading && <Loader />}

      <h2 className="pageTitle"> Trending today </h2>
      <MoviesList movies={movies} onClick={handleImageClick} />
    </div>
  );
};

export default HomePage;
