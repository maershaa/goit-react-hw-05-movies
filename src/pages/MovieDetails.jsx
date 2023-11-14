import React, { useEffect, useState } from 'react';
import {
  Link,
  Route,
  Routes,
  useLocation,
  useParams,
  Outlet,
} from 'react-router-dom';
import Cast from 'pages/Cast';
import Reviews from 'pages/Reviews';
import fetchMovies from 'components/api/api';
import Loader from 'components/Loader/Loader'; //npm install react-loader-spinner --save

import { StyledMovieDetails } from 'pages/StyledMovieDetails';
const MovieDetails = () => {
  // Извлечение movieId из параметров URL
  const { movieId } = useParams();

  // Состояние для хранения детальной информации о фильме
  const [movieDetails, setMovieDetails] = useState(null);
  // Состояние для отслеживания состояния загрузки
  const [isLoading, setIsLoading] = useState(false);
  // Состояние для обработки ошибок
  const [error, setError] = useState(null);

  // Получение объекта location из React Router
  const location = useLocation();

  // Функция для возврата на предыдущую страницу
  const handleGoBack = () => {
    if (location.state && location.state.from) {
      // Вернуться на предыдущий маршрут, если возможно
      window.location.href = location.state.from;
    } else {
      // Вернуться на дефолтный маршрут, если информация о предыдущем местоположении отсутствует
      window.location.href = '/';
    }
  };

  // Функция для запроса детальной информации о выбранном фильме
  const fetchChosenMovie = async id => {
    try {
      // Установить флаг загрузки в true перед запросом
      setIsLoading(true);
      // Сбросить состояние ошибки перед запросом
      setError(null);

      // Запрос к API для получения детальной информации о фильме по его ID
      const data = await fetchMovies(`movie/${id}`, {
        params: {
          language: 'en-US',
        },
      });

      // Установка детальной информации о фильме в состояние
      setMovieDetails(data);
      // Сбросить состояние ошибки
      setError(null);
    } catch (error) {
      // Установка состояния ошибки в случае ошибки
      setError(error.message);
      // Сбросить состояние деталей фильма в случае ошибки
      setMovieDetails(null);
    } finally {
      // Установка флага загрузки в false в любом случае после завершения запроса, независимо от его успешности
      setIsLoading(false);
    }
  };

  // useEffect для выполнения запроса, когда компонент монтируется или изменяется movieId
  useEffect(() => {
    // Вызов функции fetchChosenMovie при изменении movieId
    fetchChosenMovie(movieId);
  }, [movieId]);

  // Проверка, есть ли данные в movieDetails перед их отображением
  if (!movieDetails) {
    return <p>Loading...</p>;
  }

  // Деструктуризация данных из movieDetails
  const {
    title,
    release_date,
    vote_average,
    overview,
    genres,
    poster_path,
    backdrop_path,
    runtime,
    tagline,
  } = movieDetails;

  // Создаем стиль для фона, используя линейный градиент и изображение фона из API
  const backgroundImageStyles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdrop_path})`,
  };

  // Функция для округления рейтинга до одной десятой
  const calculateRoundedRating = rating => {
    const numericRating = Number(rating);
    return numericRating.toFixed(1);
  };

  // Функция для расчета продолжительности фильма в часах и минутах
  const calculateRuntime = runtime => {
    const numericRuntime = Number(runtime);
    const hours = Math.floor(numericRuntime / 60);
    const minutes = numericRuntime % 60;
    return { hours, minutes };
  };

  // Функция для извлечения года из даты выпуска фильма
  const extractReleaseYear = releaseDate => {
    return new Date(releaseDate).getFullYear();
  };

  // Расчет округленного рейтинга на основе полученного рейтинга из API
  const roundedRating = calculateRoundedRating(vote_average);

  // Расчет продолжительности фильма в часах и минутах на основе полученных данных из API
  const { hours, minutes } = calculateRuntime(runtime);

  // Извлечение года выпуска фильма из даты, полученной из API
  const releaseYear = extractReleaseYear(release_date);

  return (
    <StyledMovieDetails>
      {error !== null && (
        <p className="errorBadge">
          Oops, some error occurred... Error message: {error}
        </p>
      )}
      {isLoading && <Loader />}
      <h1> Movie Id: {movieId}</h1> {/* !Заглушка для проверки movieId */}
      <button onClick={handleGoBack} className="backBtn">
        Назад
      </button>
      <div className="movieInfoContainer" style={backgroundImageStyles}>
        {/* Отображаем постер фильма */}
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          style={{ height: '460px' }}
        />

        <div className="infoContainer">
          <h2 className="title">
            {title} ( {releaseYear})
          </h2>

          <p className="slogan">{tagline}</p>
          <p>
            Rating: {roundedRating} &bull; Duration: {`${hours}h ${minutes}m`}
          </p>
          <h3 className="infoTitle">Overview</h3>
          <p>{overview}</p>

          <h3 className="infoTitle">Genres</h3>
          <ul className="genresList">
            {genres.map(genre => (
              <li key={genre.id}>{genre.name.toLowerCase()}</li>
            ))}
          </ul>
          <h3>Additional Information</h3>
          <ul>
            <li>
              <Link className="header-link" to="cast">
                Cast
              </Link>
            </li>
            <li>
              <Link className="header-link" to="reviews">
                Reviews
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </StyledMovieDetails>
  );
};

export default MovieDetails;
