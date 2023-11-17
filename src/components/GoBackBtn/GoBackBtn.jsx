import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { StyledGoBackBtn } from 'components/GoBackBtn/StyledGoBackBtn';

const GoBackBtn = () => {
  const location = useLocation(); // Хук для получения объекта location из React Router
  const navigate = useNavigate(); // Хук для навигации по маршрутам

  // Функция для возврата на предыдущую страницу
  const handleGoBack = () => {
    if (location.state && location.state.from) {
      navigate(location.state.from); // Возвращение на предыдущий маршрут
    } else {
      navigate('/'); // Возвращение на главную страницу по умолчанию
    }
  };

  return (
    <StyledGoBackBtn onClick={handleGoBack} className="backBtn">
      &#8617;
    </StyledGoBackBtn>
  );
};

export default GoBackBtn;
