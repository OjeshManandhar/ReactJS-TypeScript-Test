import styled from 'styled-components';

export const Padding = styled.div`
  padding: 100px;
`;

export const Button = styled.button`
  font-size: 15px;
  color: white;
  background-color: blueviolet;
  padding: 10px 20px;

  /* The Link component of reach router has <a> tag so change the style of all <a> childrens */
  a {
    text-decoration: none;
    color: white;
  }
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
