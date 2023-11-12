import React from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate
import { StyledMovieListItem } from 'components/MoviesList/MovieItem/StylesdMovieListItem';

const MovieItem = ({ id, poster_path, title, overview, onClick }) => {
  const navigate = useNavigate(); // Инициализируем useNavigate

  const handleItemClick = () => {
    // При нажатии на элемент списка фильмов, перенаправляем пользователя на страницу с деталями фильма
    navigate(`/movies/${id}`);
  };

  return (
    // Используем стилизованный компонент для элемента списка фильма
    <StyledMovieListItem className="movieItem" onClick={handleItemClick}>
      {/* Отображаем постер фильма */}
      <img
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt={title}
        style={{ height: '260px' }}
      />
      {/* Контейнер для заголовка и описания фильма */}
      <div className="itemContainer">
        <h3>{title}</h3>
        <p className="overviewText">{overview}</p>
      </div>
    </StyledMovieListItem>
  );
};

export default MovieItem;
