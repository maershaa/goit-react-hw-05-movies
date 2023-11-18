import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import getSearchMovie from 'components/api/getSearchMovie'; // Используем новую функцию получения списка фильмов
import MoviesList from 'components/MoviesList/MoviesList';
import SearchBox from 'components/SearchBox/SearchBox';
import Loader from 'components/Loader/Loader';
import GoBackBtn from 'components/GoBackBtn/GoBackBtn';

const Movies = () => {
  const [isLoading, setIsLoading] = useState(false); // Состояние для отслеживания загрузки данных
  const [error, setError] = useState(null); // Состояние для отслеживания ошибок
  const [inputValue, setInputValue] = useState(''); // Состояние для хранения значения ввода поиска
  const [movies, setMovies] = useState(null); // Состояние для хранения списка фильмов
  const navigate = useNavigate(); // Хук для навигации по маршрутам
  const [searchParams, setSearchParams] = useSearchParams(); // Хук для работы с параметрами строки запроса
  const query = searchParams.get('query'); // Получаем значение параметра 'query'

  // Функция для получения списка фильмов по поисковому запросу
  const fetchMoviesBySearchQuery = async (queryValue, currentPage) => {
    try {
      setIsLoading(true); // Устанавливаем флаг загрузки в true перед запросом
      setError(null); // Сбрасываем состояние ошибки перед запросом

      const data = await getSearchMovie(queryValue); // Используем новую функцию getSearchMovie для запроса

      setMovies(data); // Устанавливаем полученный список фильмов в состояние
      setError(null); // Сбрасываем состояние ошибки
    } catch (error) {
      setError(error.message); // Устанавливаем сообщение об ошибке в состояние
      setMovies(null); // Сбрасываем список фильмов в случае ошибки
    } finally {
      setIsLoading(false); // Устанавливаем флаг загрузки в false после завершения запроса
    }
  };

  // useEffect для обработки изменения параметра запроса 'query'
  useEffect(() => {
    if (query) {
      setInputValue(query); // Устанавливаем значение из параметра запроса в состояние ввода
      fetchMoviesBySearchQuery(query, 1); // Вызов функции для получения фильмов при изменении запроса
    }
  }, [query]);

  // Функция для обработки отправки поискового запроса
  const handleSubmit = value => {
    if (!value) return; // Если значение пустое, прекращаем выполнение

    setInputValue(value); // Устанавливаем значение поискового запроса в состояние ввода
    setSearchParams({ query: value }); // Записываем слово для поиска в параметры строки запроса

    fetchMoviesBySearchQuery(value, 1); // Вызов функции для получения фильмов по запросу
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

      {/* Кнопка для возврата на предыдущую страницу */}
      <GoBackBtn />

      {/* Компонент SearchBox для ввода поискового запроса */}
      <SearchBox
        inputValue={inputValue}
        setInputValue={setInputValue}
        onSearch={handleSubmit}
      />

      {/* Отображение списка фильмов, если он не пуст и содержит более одного фильма */}
      {movies && movies.length > 0 && (
        <MoviesList movies={movies} onClick={handleMovieClick} />
      )}
    </>
  );
};

export default Movies;
