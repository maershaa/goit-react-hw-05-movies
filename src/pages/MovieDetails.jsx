// import axios from 'axios'; //npm install axios
// import React,{ useEffect, useState } from 'react';
import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import Cast from 'pages/Cast';
import Reviews from 'pages/Reviews';

const MovieDetails = ({ title, year, raiting, overview, genres }) => {
  const location = useLocation();

  const handleGoBack = () => {
    // Используйте location для определения, куда возвращаться
    if (location.state && location.state.from) {
      // Перейти на предыдущий маршрут
      window.location.href = location.state.from;
    } else {
      // Перейти на дефолтный маршрут, если нет информации о предыдущем местоположении
      window.location.href = '/';
    }
  };

  // !инлайн жирность  потом убери
  const bold = {
    fontWeight: 'bold',
  };
  return (
    <div>
      <button onClick={handleGoBack}> Go back</button>
      <h2>
        {title} {year}
      </h2>
      <p>User Score: {raiting}%</p>
      <h3 style={bold}> Overview</h3>
      <p>{overview}</p>
      <h3 style={bold}> Genres</h3>
      <p>{genres.join(', ')}</p>

      <h3>Additional information</h3>
      <ul>
        <li>Cast</li>
        <li>Reviews</li>
      </ul>
      <NavLink className="header-link" to="cast">
        Cast
      </NavLink>

      <Routes>
        <Route path="cast" element={<Cast />} />

        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
};

export default MovieDetails;
