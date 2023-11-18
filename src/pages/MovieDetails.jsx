import React, { useEffect, useState } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
// import Cast from 'pages/Cast';
// import Reviews from 'pages/Reviews';
import { getFilmById } from 'components/api/api.js';
import Loader from 'components/Loader/Loader'; //npm install react-loader-spinner --save
import GoBackBtn from 'components/GoBackBtn/GoBackBtn';

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

  useEffect(() => {
    // Функция для запроса детальной информации о выбранном фильме
    const fetchChosenMovie = async id => {
      try {
        // Установить флаг загрузки в true перед запросом
        setIsLoading(true);
        // Сбросить состояние ошибки перед запросом
        setError(null);

        const movieData = await getFilmById(movieId); // Вызываем функцию с movieId
        setMovieDetails(movieData); // Устанавливаем полученные данные в состояние
        setError(null);

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
    fetchChosenMovie(); // Вызываем функцию при монтировании компонента и изменении movieId
  }, [movieId]);

  // !!!!Проверка, есть ли данные в movieDetails перед их отображением  КАК РЕАЛИЗОВАТЬ ИНАЧЕ?
  if (!movieDetails) {
    return;
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
      <GoBackBtn></GoBackBtn>
      <h1> Movie Id: {movieId}</h1> {/* !Заглушка для проверки movieId */}
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
