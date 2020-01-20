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

  border: 5px solid blue;

  overflow: hidden;
`;

// This component must be have a width and overflow property
export const Slider = styled.div`
  width: 100%;
  /* height: 500px; */

  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: scroll;

  border: 5px solid red;

  box-sizing: content-box;

  @media (min-width: 450px) {
    width: 90%;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

// This component's must have a min-width, width doesnt work inside flex parent
// This component will be used to manage RESPONSIVE size of the card
export const CardContainer = styled.div`
  box-sizing: border-box;

  /* To use em in child i.e. Card */
  font-size: 16px;

  max-width: 100%;
  min-width: 100%;

  @media (min-width: 700px) {
    max-width: 50%;
    min-width: 50%;
  }
  @media (min-width: 992px) {
    max-width: 400px;
    min-width: 400px;
  }
`;

export const Card = styled.div`
  width: 300px;

  margin: 0px auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 350px) {
    width: 100%;
  }

  height: 540px;
  border: 2px solid blueviolet;
`;

const SliderControl = styled.div`
  position: absolute;
  z-index: 300;
  top: calc(50% - 50px);

  font-size: 25px;

  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;

  background-color: grey;
  cursor: pointer;
  border-radius: 50%;

  @media (min-width: 992px) {
    display: none;
  }
`;

export const SliderControlLeft = styled(SliderControl)`
  left: 0;

  @media (min-width: 450px) {
    left: 5%;
  }
`;

export const SliderControlRight = styled(SliderControl)`
  right: 0;

  @media (min-width: 450px) {
    right: 5%;
  }
`;
