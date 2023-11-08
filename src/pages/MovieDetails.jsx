// import axios from 'axios'; //npm install axios
// import React,{ useEffect, useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Cast from 'pages/Cast';
import Reviews from 'pages/Reviews';

const MovieDetails = () => {
  return (
    <div>
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
