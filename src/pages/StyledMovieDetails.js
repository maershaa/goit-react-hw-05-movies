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

  .genresList {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 8px;

    list-style: none;

    padding: 0;
  }

  .addInfoList {
    display: flex;
    gap: 10px;
    flex-direction: row;
    list-style: none;

    padding: 0;
  }

  .addInfoItem {
    padding: 15px;
    border-radius: 10px;
    border: 1px solid white;
    background-color: rgba(54, 155, 175, 0.7);

    width: 50px;

    text-align: center;
  }

  .header-link {
    color: white;

    text-decoration: none;
  }
`;
