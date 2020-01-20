import styled from 'styled-components';

export const BigDiv = styled.div`
  width: 3000px;
  height: 500px;

  border: 5px dashed black;
`;

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 5px solid blue;

  overflow: hidden;
`;

// This component must be have a width and overflow property
// It child can have large(width) content
export const Slider = styled.div`
  width: 90%;
  height: 500px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: scroll;

  border: 5px solid red;

  box-sizing: content-box;

  ::-webkit-scrollbar {
    /* display: none; */
  }
`;

// This component's must have a min-width, width doesnt work inside flex parent
export const Card = styled.div`
  box-sizing: border-box;

  border: 5px dashed black;
  max-width: 100vw;
  min-width: 200px;
  height: 300px;
  margin: 5px;
`;
