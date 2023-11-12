import styled from 'styled-components'; //npm install styled-components
export const StyledMovieDetails = styled.div`
  .movieInfoContainer {
    display: flex;
    flex-direction: row;
    padding: 20px;
    column-gap: 40px;

    border-bottom: 1px solid #369baf;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .infoContainer {
    max-width: 45%;
    align-items: center;
  }

  .title {
    font-size: 32px;
    font-weight: 700;
  }

  .infoTitle {
    font-size: 24px;
    font-weight: 700;
  }

  .slogan {
    font-style: italic;
  }

  .backBtn {
    cursor: pointer;
    text-decoration: none;
    background: #373b44; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #4286f4,
      #373b44
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      112.1deg,
      rgb(32, 38, 57) 11.4%,
      rgb(63, 76, 119) 70.2%
    );
    font-size: 18px;
    color: white;
    padding: 15px;
    margin-left: 20px;
    margin-bottom: 20px;
    display: inline-flex;
    border: 1px solid #373b44;
    border-radius: 10px;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      -webkit-transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .backBtn:hover,
  .backBtn:focus {
    cursor: pointer;
    transform: scale(1.1); /* Измените масштаб по вашему усмотрению */
    transition: transform 0.3s ease; /* Добавьте плавное переходное свойство */
  }

  .genresList {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 8px;

    list-style: none;

    padding: 0;
  }
`;
