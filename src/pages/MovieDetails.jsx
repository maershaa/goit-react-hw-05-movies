import React, { useEffect, useState } from 'react';
import {
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
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

  const backgroundImageStyles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdrop_path})`,
  };

  const calculateRoundedRating = rating => {
    const numericRating = Number(rating);
    return numericRating.toFixed(1);
  };

  const calculateRuntime = runtime => {
    const numericRuntime = Number(runtime);
    const hours = Math.floor(numericRuntime / 60);
    const minutes = numericRuntime % 60;
    return { hours, minutes };
  };

  const extractReleaseYear = releaseDate => {
    return new Date(releaseDate).getFullYear();
  };

  const roundedRating = calculateRoundedRating(vote_average);

  const { hours, minutes } = calculateRuntime(runtime);

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

          <p></p>

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
            <li>Cast</li>
            <li>Reviews</li>
          </ul>
          <NavLink className="header-link" to="cast">
            Состав
          </NavLink>
          <Routes>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Routes>
        </div>
      </div>
    </StyledMovieDetails>
  );
};

export default MovieDetails;
