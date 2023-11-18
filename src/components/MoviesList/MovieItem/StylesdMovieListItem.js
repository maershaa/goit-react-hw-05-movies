import styled from 'styled-components';

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
    transition: transform 1.2s ease; /* Увеличено время перехода */
  }

  /* Стили для обратной стороны */
  .movieCardBack {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    transition: transform 1.2s ease, opacity 1.2s ease; /* Увеличено время перехода */
    background-color: #ffffff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    opacity: 0;
    pointer-events: none;
  }

  /* Показываем обратную сторону при наведении */
  .movieCard:hover .movieCardFront {
    transform: rotateY(180deg);
  }

  .movieCard:hover .movieCardBack {
    transform: rotateY(0deg);
    opacity: 1;
    pointer-events: auto;
    background-color: rgb(54, 155, 175);
    color: white;
    border-radius: 20px;

    overflow-x: auto;
  }

  .moviePoster {
    border-radius: 20px;
  }

  .front {
    padding-left: 10px;
    padding-top: 10px;
  }

  .overviewText {
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .ratingCircle {
    position: absolute;
    padding: 5px;
    bottom: -18px;
    left: -18px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #ffcc00; /* Цвет фона для круглого значка */
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #ffffff; /* Цвет текста внутри круглого значка */
    font-size: 20px; /* Размер текста */
  }
`;
