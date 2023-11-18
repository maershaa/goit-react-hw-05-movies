import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewsList from 'components/ReviewsList/ReviewsList';
import Loader from 'components/Loader/Loader'; //npm install react-loader-spinner --save
import fetchMovies from 'components/api/api';

const Reviews = () => {
  const { movieId } = useParams();
  // Состояние для отслеживания состояния загрузки
  const [isLoading, setIsLoading] = useState(false);
  // Состояние для обработки ошибок
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState(null);

  const fetchReviews = async (id, currentPage) => {
    try {
      // Установить флаг загрузки в true перед запросом
      setIsLoading(true);
      // Сбросить состояние ошибки перед запросом
      setError(null);
      // Запрос к API для получения детальной информации о фильме по его ID
      const data = await fetchMovies(`movie/${id}/reviews`, {
        language: 'en-US',
        page: currentPage,
      });
      // fetch('https://api.themoviedb.org/3/movie/872585/reviews?language=en-US&page=1', options)

      // Установка детальной информации о фильме в состояние
      setReviews(data);
      console.log('fetchReviews', data);
      // Сбросить состояние ошибки
      setError(null);
    } catch (error) {
      // Установка состояния ошибки в случае ошибки
      setError(error.message);
      // Сбросить состояние деталей фильма в случае ошибки
      setReviews(null);
    } finally {
      // Установка флага загрузки в false в любом случае после завершения запроса, независимо от его успешности
      setIsLoading(false);
    }
  };
  // useEffect для выполнения запроса, когда компонент монтируется или изменяется movieId
  useEffect(() => {
    // Вызов функции fetchChosenMovie при изменении movieId
    fetchReviews(movieId, 1);
  }, [movieId]);

  return (
    <div>
      {error !== null && (
        <p className="errorBadge">
          Oops, some error occurred... Error message: {error}
        </p>
      )}
      {isLoading && <Loader />}

      <h2> Reviews </h2>

      {reviews !== null && <ReviewsList reviews={reviews.results} />}
    </div>
  );
};

export default Reviews;
