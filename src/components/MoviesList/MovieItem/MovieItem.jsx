import React from 'react';

const MovieItem = ({ id, poster_path, title, onClick }) => {
  const handleMovieClick = () => {
    if (onClick) {
      onClick(id);
    }
  };

  return (
    <li className="movieItem" onClick={handleMovieClick}>
      <h3>{title}</h3>
      <img
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt={title}
      />
    </li>
  );
};

export default MovieItem;
