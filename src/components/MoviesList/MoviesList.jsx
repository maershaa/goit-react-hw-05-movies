import React from 'react';
import MovieItem from 'components/MoviesList/MovieItem/MovieItem';
import { useNavigate } from 'react-router-dom';
import { StyledMovieList } from 'components/MoviesList/StyledMovieList';

// Компонент для отображения списка фильмов
const MoviesList = ({ movies }) => {
  // Хук навигации из React Router для перехода на другие страницы
  const navigate = useNavigate();
  const handleMovieClick = movieId => {
    navigate(`/movies/${movieId}`);
  };

  return (
    <StyledMovieList className="moviesList">
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
            raiting={movie.vote_average}
            // Используем функцию для загрузки выбранного фильма при клике
            onClick={() => handleMovieClick(movie.id)}
          ></MovieItem>
        ))}
    </StyledMovieList>
  );
};

export default MoviesList;
