import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledMovieListItem } from 'components/MoviesList/MovieItem/StylesdMovieListItem';

const MovieItem = ({ id, poster_path, title, overview }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleItemClick = () => {
    navigate(`/movies/${id}`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <StyledMovieListItem
      className={`movieItem ${isHovered ? 'hovered' : ''}`}
      onClick={handleItemClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="movieCard">
        <div className={`movieCardFront ${isHovered ? 'hovered' : ''}`}>
          <img
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt={title}
            className="moviePoster front"
          />
        </div>
        <div className={`movieCardBack ${isHovered ? 'hovered' : ''}`}>
          <h3 className="front">{title}</h3>
          <p className="overviewText back">{overview}</p>
        </div>
      </div>
    </StyledMovieListItem>
  );
};

export default MovieItem;
