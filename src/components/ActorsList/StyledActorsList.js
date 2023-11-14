import styled from 'styled-components'; //npm install styled-components
export const StyledActorsList = styled.ul`
  list-style: none;
  width: calc(100vw + 10px);
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  white-space: nowrap;
  /* flex-wrap: wrap; */
  box-sizing: border-box;
  padding-bottom: 0;
  gap: 10px;
`;
