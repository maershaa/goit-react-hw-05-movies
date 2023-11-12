import React from 'react';
import MovieItem from 'components/MoviesList/MovieItem/MovieItem';
import { useNavigate } from 'react-router-dom';

// Компонент для отображения списка фильмов
const MoviesList = ({ movies }) => {
  // Хук навигации из React Router для перехода на другие страницы
  const navigate = useNavigate();
  const handleMovieClick = movieId => {
    navigate(`/movies/${movieId}`);
  };

  return (
    <ul className="moviesList">
      {/* Проверка, что массив movies не является null или undefined */}
      {movies &&
        // Отображаем каждый элемент списка фильмов
        movies.map(movie => (
          <MovieItem
            key={movie.id}
            id={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
            overview={movie.overview}
            // Используем функцию для загрузки выбранного фильма при клике
            onClick={() => handleMovieClick}
          ></MovieItem>
        ))}
    </ul>
  );
};

export default MoviesList;
