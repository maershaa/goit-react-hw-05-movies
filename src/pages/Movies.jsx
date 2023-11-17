import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fetchMovies from 'components/api/api';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchBox from 'components/SearchBox/SearchBox';
import Loader from 'components/Loader/Loader';
import GoBackBtn from 'components/GoBackBtn/GoBackBtn';

const Movies = () => {
  // Использование хуков useState для управления состоянием компонента
  const [isLoading, setIsLoading] = useState(false); // Состояние для отслеживания загрузки данных
  const [error, setError] = useState(null); // Состояние для отслеживания ошибок
  const [inputValue, setInputValue] = useState(''); // Состояние для хранения значения ввода поиска
  const [movies, setMovies] = useState(null); // Состояние для хранения списка фильмов

  const navigate = useNavigate(); // Хук для навигации по маршрутам

  // Функция для получения списка фильмов по поисковому запросу
  const fetchMoviesBySearchQuery = async (inputValue, currentPage) => {
    try {
      setIsLoading(true); // Устанавливаем флаг загрузки в true перед запросом
      setError(null); // Сбрасываем состояние ошибки перед запросом

      // Вызываем функцию fetchMovies для получения списка фильмов по запросу
      const data = await fetchMovies(`search/movie`, {
        query: inputValue, // Запрос поискового запроса
        include_adult: false, // Указание на включение взрослого контента (false для исключения)
        language: 'en-US', // Язык результатов поиска
        page: currentPage, // Номер страницы результатов поиска
      });

      setMovies(data.results); // Устанавливаем полученный список фильмов в состояние
      console.log('data.results', data.results);

      setError(null); // Сбрасываем состояние ошибки
    } catch (error) {
      setError(error.message); // Устанавливаем сообщение об ошибке в состояние
      setMovies(null); // Сбрасываем список фильмов в случае ошибки
    } finally {
      setIsLoading(false); // Устанавливаем флаг загрузки в false после завершения запроса
    }
  };

  // Функция для обработки отправки поискового запроса
  const handleSubmit = query => {
    setMovies([]); // Очищаем список фильмов перед новым поиском
    setInputValue(query); // Устанавливаем в состояние значение поискового запроса
    console.log('query', query);
    fetchMoviesBySearchQuery(query, 1); // Вызов функции для получения фильмов по запросу (currentPage = 1)
  };

  // Функция для обработки нажатия на фильм и навигации к его странице
  const handleMovieClick = movieId => {
    navigate(`/movies/${movieId}`); // Переход на страницу фильма с указанным movieId
  };

  return (
    <>
      {/* Отображение сообщения об ошибке, если произошла ошибка */}
      {error !== null && (
        <p className="errorBadge">
          Oops, some error occurred... Error message: {error}
        </p>
      )}

      {/* Отображение индикатора загрузки, если данные загружаются */}
      {isLoading && <Loader />}

      <GoBackBtn></GoBackBtn>

      {/* Компонент SearchBox для ввода поискового запроса */}
      <SearchBox
        inputValue={inputValue}
        setInputValue={setInputValue}
        onSearch={handleSubmit}
      />

      {/* Отображение списка фильмов, если он не пуст и содержит более одного фильма */}
      {movies && movies.length > 1 && (
        <MoviesList movies={movies} onClick={handleMovieClick} />
      )}
    </>
  );
};

export default Movies;
