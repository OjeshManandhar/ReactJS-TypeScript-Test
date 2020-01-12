// packages
import styled from 'styled-components';

// types
import { LongDivProp } from './types';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;

  border: 5px solid red;

  overflow: auto;
`;

export const LongDiv = styled.div<LongDivProp>`
  height: 1000px;
  width: 100%;

  padding-top: ${props => (props.paddingTop ? props.paddingTop : '0px')};

  border: 5px solid green;

  background: #eee;
`;
