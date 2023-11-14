import styled from 'styled-components'; //npm install styled-components
export const StyledActorItem = styled.li`
  padding: 10px;
  width: 120px;
  min-width: 120px;
  /* height: 220x; */
  background-color: white;
  color: black;

  margin: 10px 4px 10px 10px;

  border: 1px solid grey;
  padding-bottom: 10px;
  border-radius: 10px;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  .text,
  .actorsName {
    display: block;
    white-space: wrap;
  }

  .text {
    font-size: 16px;
  }

  .actorsName {
    font-size: 14px;
  }
`;
