import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ActorsList from 'components/ActorsList/ActorsList';
import Loader from 'components/Loader/Loader'; //npm install react-loader-spinner --save
import { getCastMovie } from 'components/api/api.js';

const Cast = () => {
  const { movieId } = useParams();
  // Состояние для отслеживания состояния загрузки
  const [isLoading, setIsLoading] = useState(false);
  // Состояние для обработки ошибок
  const [error, setError] = useState(null);
  const [actorsDetails, setActorsDetails] = useState(null);

  const fetchActors = async id => {
    try {
      // Установить флаг загрузки в true перед запросом
      setIsLoading(true);
      // Сбросить состояние ошибки перед запросом
      setError(null);
      // Запрос к API для получения детальной информации о фильме по его ID
      const data = await getCastMovie(id);
      // Установка детальной информации о фильме в состояние
      setActorsDetails(data);
      console.log('actorsDetails.cast:', data.cast); // Добавляем вывод в консоль
      // Сбросить состояние ошибки
      setError(null);
    } catch (error) {
      // Установка состояния ошибки в случае ошибки
      setError(error.message);
      // Сбросить состояние деталей фильма в случае ошибки
      setActorsDetails(null);
    } finally {
      // Установка флага загрузки в false в любом случае после завершения запроса, независимо от его успешности
      setIsLoading(false);
    }
  };
  // useEffect для выполнения запроса, когда компонент монтируется или изменяется movieId
  useEffect(() => {
    // Вызов функции fetchChosenMovie при изменении movieId
    fetchActors(movieId);
  }, [movieId]);

  // Извлечение массива актеров и преобразование его в массив имен
  return (
    <div>
      {error !== null && (
        <p className="errorBadge">
          Oops, some error occurred... Error message: {error}
        </p>
      )}
      {isLoading && <Loader />}
      <h2> Cast </h2> {/* Cast = актерский состав */}
      {actorsDetails !== null && <ActorsList actors={actorsDetails.cast} />}
    </div>
  );
};

export default Cast;
