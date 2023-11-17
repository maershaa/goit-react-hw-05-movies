import styled from 'styled-components'; //npm install styled-components
export const StyledMovieListItem = styled.li`
  padding: 20px;
  list-style: none;
  display: flex;
  flex-direction: row;

  .itemContainer {
    max-width: 50%;
    padding-left: 20px;
    padding-right: 20px;
  }

  .moviePoster {
    border-radius: 10px;
  }
`;
