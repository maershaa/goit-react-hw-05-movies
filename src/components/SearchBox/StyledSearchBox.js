import styled from 'styled-components';

export const StyledSearchBox = styled.div`
  background-image: linear-gradient(
      to right,
      rgba(3, 37, 65, 0.8) 0%,
      rgba(3, 37, 65, 0) 100%
    ),
    url('https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/dKqa850uvbNSCaQCV4Im1XlzEtQ.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgb(3, 37, 65);

  padding-top: 40px;
  padding-bottom: 40px;

  .welcomeTitle {
    padding: 15px;
    margin: 0;
    margin-bottom: 10px;
    font-size: 48px;
    font-weight: 700;
    line-height: 1;
  }
  .welcomeText {
    padding: 15px;

    margin: 0;
    margin-bottom: 10px;
    font-size: 32px;
    font-weight: 700;
    line-height: 1;
  }
  .searchContainer {
    position: relative;
    display: inline-block;
    width: 500px;
  }

  input[type='text'] {
    margin-top: 15px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 20px;

    width: 100%;
    padding: 10px;

    background: white;
    font-size: 18px;
    color: rgb(3, 37, 65);

    border: 2px solid rgb(3, 37, 65);
    border-radius: 40px;
  }

  .submitBtn {
    position: absolute;
    top: 47%;
    right: -33px;
    transform: translateY(-50%);

    cursor: pointer;
    text-decoration: none;
    background: rgb(54, 155, 175);
    font-size: 18px;
    color: white;
    padding: 10px;

    display: inline-flex;
    border: 1px solid rgb(54, 155, 175);
    border-radius: 40px;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      -webkit-transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .submitBtn :hover,
  .submitBtn :focus {
    transform: scale(1.1); /* Измените масштаб по вашему усмотрению */
    transition: transform 0.3s ease; /* Добавьте плавное переходное свойство */
  }

  .buttonLabel {
    color: white;
  }
`;
