import styled from 'styled-components';

export const Background = styled.div` 
  background-color: 'white';
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 3px solid #1F3541;
  box-sizing: border-box;
  border-radius: 15px;
  margin-top: 5vh;
  margin-bottom: 5vh;
`;

export const BookDiv = styled.div`
    padding: 5px;
    display: flex;
    justify-content: center;
    @media(max-width: 750px){
    width: 100vw;
    box-shadow: 0;
    border-radius: 0;
  }
`;