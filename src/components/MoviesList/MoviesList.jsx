import React from 'react';
import MovieItem from 'components/MoviesList/MovieItem/MovieItem';

const MoviesList = ({ movies, onClick }) => {
  return (
    <ul className="moviesList">
      {movies.map(movie => (
        <MovieItem
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
          onClick={onClick}
        ></MovieItem>
      ))}
    </ul>
  );
};

export default MoviesList;
