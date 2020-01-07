import styled from 'styled-components';

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
