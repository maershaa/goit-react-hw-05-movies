import styled from 'styled-components'; //npm install styled-components
export const StyledMovieListItem = styled.li`
  padding: 20px;
  list-style: none;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 8px;

  /* Стили для контейнера карточки */
  .movieCard {
    position: relative;
    width: 260px;
    height: 390px;
    perspective: 1000px;
    border-radius: 20px;
  }

  /* Стили для передней стороны */
  .movieCardFront {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transition: transform 0.8s ease;
  }

  /* Стили для обратной стороны */
  .movieCardBack {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    transition: transform 0.8s ease;
    background-color: #ffffff;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    display: none;
  }

  /* Показываем обратную сторону при наведении */
  .movieCard:hover .movieCardFront {
    transform: rotateY(180deg);
  }

  .movieCard:hover .movieCardBack {
    transform: rotateY(0deg);
    display: block;

    background-color: rgb(54, 155, 175);
    color: white;

    border-radius: 20px;
  }

  .moviePoster {
    border-radius: 20px;
  }

  .movieCardFront,
  .movieCardBack {
    transition-duration: 0.8s; /* Увеличьте или уменьшите продолжительность по вашему усмотрению */
    transition-timing-function: ease-in-out; /* Измените функцию сглаживания по вашему выбору */
  }
`;
