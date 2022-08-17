import styled from 'styled-components';

export const Background = styled.div` 
  width: 100%;
  height: 100%;
  background-color: 'white';
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Center = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: center;
  background: #FFFFFF;
  border: 3px solid #1F3541;
  box-sizing: border-box;
  border-radius: 15px;
  margin-top: 5vh;
  margin-bottom: 5vh;
  @media(max-width: 750px){
    width: 100vw;
    box-shadow: 0;
    border-radius: 0;
  }
`;

export const BooksList = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`;

export const ServicesBook = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`;