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
  /* for slider controls */
  position: relative;

  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// This component must be have a width and overflow property
export const Slider = styled.div`
  width: 100%;
  /* height: 500px; */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  overflow-x: scroll;

  box-sizing: content-box;

  @media (min-width: 400px) {
    width: 90%;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

const SliderControl = styled.div`
  position: absolute;
  z-index: 300;
  top: calc(50% - 50px);

  font-family: cursive;
  font-size: 40px;
  font-weight: 500;

  width: 50px;
  height: 50px;
  line-height: 40px;
  text-align: center;

  cursor: pointer;
  border-radius: 50%;

  color: black;
  background-color: rgba(200, 200, 200, 0.07);

  :hover {
    color: white;
    background-color: blueviolet;
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const SliderControlLeft = styled(SliderControl)`
  left: 0;

  @media (min-width: 400px) {
    left: 5%;
  }
`;

export const SliderControlRight = styled(SliderControl)`
  right: 0;

  @media (min-width: 400px) {
    right: 5%;
  }
`;

// This component's must have a min-width, width doesnt work inside flex parent
// This component will be used to manage RESPONSIVE size of the card
export const CardContainer = styled.div`
  box-sizing: border-box;

  max-width: 100%;
  min-width: 100%;

  @media (min-width: 800px) {
    max-width: 50%;
    min-width: 50%;
  }
  @media (min-width: 1200px) {
    max-width: 450px;
    min-width: 450px;
  }
`;

export const Card = styled.div`
  width: 100%;

  padding: 10px;
  margin: 0px auto;

  /* To use em in child */
  font-size: 16px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 300px) {
    font-size: 18px;
  }

  @media (min-width: 400px) {
    width: 350px;
    font-size: 20px;
  }

  height: 100%;
  border: 2px solid blueviolet;
`;

export const CardImage = styled.img`
  width: 100%;
  max-height: 250px;
  object-fit: scale-down;
`;

export const CardHeader = styled.h2`
  font-size: 2em;
  font-style: bold;
  font-weight: 700;
  margin: 10px 30px;
`;

export const CardContent = styled.p`
  font-size: 1em;
  font-family: 'Times New Roman';
  color: grey;
  margin: 0 30px;
`;
