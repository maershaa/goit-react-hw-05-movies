import styled from 'styled-components'; //npm install styled-components
export const StyledActorsList = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  white-space: nowrap;
  box-sizing: border-box;
  padding: 15px 0; /* 15px сверху и снизу, 0 слева и справа */
  gap: 10px;

  background-image: url(https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg);
  background-size: cover;
  background-repeat: no-repeat;
  background-color: white;
  background-position: left;
`;
